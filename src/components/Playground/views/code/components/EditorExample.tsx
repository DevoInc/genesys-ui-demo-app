import * as React from 'react';
import * as monaco from 'monaco-editor-core';

import {
  Editor,
  registerStyleTokenizer,
  registerCompletionProvider,
} from '@devoinc/genesys-ui-code';

type Monaco = typeof monaco;

const opts: monaco.editor.IEditorOptions = {
  // enable error batches in scrollbar to be shown.
  overviewRulerLanes: 2,
  // enable folding of code blocks
  folding: true,
  // enable minimap
  minimap: {
    enabled: true,
  },
};

export const keywords = [
  '"extra"',
  '"type"',
  '"subtype"',
  '"settings"',
  '"children"',
  '"name"',
  '"description"',
  '"datasource"',
];

export const rawLanguage: {
  id: string;
  lang: monaco.languages.IMonarchLanguage;
  value: string;
  completionProvider: monaco.languages.CompletionItemProvider;
} = {
  id: 'rawConfig',
  lang: {
    keywords,
    tokenizer: {
      root: [
        [
          /"[A-Za-z0-9_]*"/,
          {
            cases: {
              '@keywords': 'keyword',
              '@default': 'default',
            },
          },
        ],
        [/:\s"((.|-|\n|\r)*)"/, 'value'],
        [/:\s[0-9]+([,.][0-9]+)?/, 'digit'],
        [/true|false|null/, 'boolean'],
        [/[{}()[\]]/, '@brackets'],
        [/[;,.]/, 'delimiter'],
      ],
    },
  },
  value: `{
    "extra": {
      "favourites": {
        "widgets-widgets": "SimpleValue",
        "inputs": "Input",
        "containers": "Grid",
        "size": 1,2333,
        "height": 1.2333
      },
      "config": {
        "theme": {}
      },
      "autoRefreshPeriod": null
    },
    "containers": {
      "Grid": {
        "name": "Grid",
        "description": "Grid",
        "icon": "grid",
        "props": {
          "columns": 12,
          "rows": 12,
          "gutter": 0,
          "widgets": []
        }
      }
    }
  }`,
  completionProvider: {
    provideCompletionItems: (model, position) => {
      const word = model.getWordUntilPosition(position);
      const suggestions = keywords
        .filter((x) => x.includes(word.word))
        .map((key) => ({
          label: key,
          kind: monaco.languages.CompletionItemKind.Field,
          insertText: key,
          range: {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
          },
        }));

      return { suggestions: suggestions };
    },
  },
};

export const EditorExample = () => {
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>();
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
    if (!editorRef.current || !monacoRef.current || !value) return;

    const model = editorRef.current.getModel();

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
        : editorRef.current.getPosition() || model.getPositionAt(1);

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
    editor: monaco.editor.IStandaloneCodeEditor,
    mon: Monaco
  ) => {
    editorRef.current = editor;
    monacoRef.current = mon;

    // Validate the initial content of the editor
    validateEditorContent(editor.getValue());
  };

  const handleValidate = (markers: monaco.editor.IMarkerData[]) => {
    window.console.log('Errors found', markers);
  };

  return (
    <Editor
      height='300px'
      bordered={true}
      options={opts}
      language={'rawConfig'}
      value={rawLanguage.value}
      onMount={handleEditorDidMount}
      beforeMount={registerLanguageProviders}
      onChange={validateEditorContent}
      onValidate={handleValidate}
    />
  );
};
