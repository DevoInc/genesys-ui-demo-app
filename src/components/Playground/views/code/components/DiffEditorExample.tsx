import * as React from 'react';
import * as monaco from 'monaco-editor-core';

import {
  DiffEditor,
  registerStyleTokenizer,
  registerCompletionProvider,
} from '@devoinc/genesys-ui-code';
import { rawLanguage } from './EditorExample';

type Monaco = typeof monaco;

export const DiffEditorExample = () => {
  const modifiedEditorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>();
  const monacoRef = React.useRef<Monaco>();

  const registerLanguageProviders = (mon: Monaco) => {
    // Register highlighting
    registerStyleTokenizer(mon, rawLanguage.id, rawLanguage.lang);
    // Register autocompletion
    registerCompletionProvider(
      mon,
      rawLanguage.id,
      rawLanguage.completionProvider
    );
  };

  const validateEditorContent = (value?: string) => {
    if (!modifiedEditorRef.current || !monacoRef.current || !value) return;

    const model = modifiedEditorRef.current.getModel();

    if (!model) return;

    // validate that the content is a valid JSON. If there is an error,
    // locate the position of the error and mark it in the editor
    try {
      JSON.parse(value);

      monaco.editor.setModelMarkers(model, 'owner', []);
    } catch (err: unknown) {
      const message = (err as { message: string }).message;
      const position = message.match(/position (\d+)/)?.[1];

      // Position of the error in the string
      // OR current cursor postion
      // OR fallback to the first character
      const cursorPosition = position
        ? model.getPositionAt(parseInt(position, 10))
        : modifiedEditorRef.current.getPosition() || model.getPositionAt(1);

      const { lineNumber, column } = cursorPosition;
      const error = {
        severity: monaco.MarkerSeverity.Error,
        startLineNumber: lineNumber,
        endLineNumber: lineNumber,
        startColumn: column,
        endColumn: column,
        message: message,
      };
      monaco.editor.setModelMarkers(model, 'owner', [error]);
    }
  };

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneDiffEditor,
    mon: Monaco
  ) => {
    modifiedEditorRef.current = editor.getModifiedEditor();
    monacoRef.current = mon;

    // Validate the initial content of the editor
    validateEditorContent(modifiedEditorRef.current.getValue());
  };

  const handleValidate = (markers: monaco.editor.IMarkerData[]) => {
    window.console.log('Errors found', markers);
  };

  return (
    <DiffEditor
      height='300px'
      bordered={true}
      language={'rawConfig'}
      originalValue={rawLanguage.value}
      modifiedValue={rawLanguage.value.replaceAll('Grid', 'Flex')}
      onMount={handleEditorDidMount}
      beforeMount={registerLanguageProviders}
      onChange={(value?: { original: string; modified: string }) =>
        validateEditorContent(value?.modified)
      }
      onValidate={handleValidate}
    />
  );
};
