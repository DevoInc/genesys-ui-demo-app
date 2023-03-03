import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// Light and Dark schemas.
import brand from '@devoinc/genesys-brand-devo';

type Schema = keyof typeof brand;

const initialSchemaContext: { schema: Schema; toggleSchema: () => void } = {
  schema: 'light',
  toggleSchema: () => null,
};

const SchemaContext = React.createContext(initialSchemaContext);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [schema, setSchema] = React.useState<Schema>(
    initialSchemaContext.schema
  );

  const toggleSchema = () => {
    setSchema((sc) => (sc === 'light' ? 'dark' : 'light'));
  };

  return (
    <SchemaContext.Provider value={{ schema, toggleSchema }}>
      <StyledThemeProvider theme={{ tokens: brand[schema] }}>
        {children}
      </StyledThemeProvider>
    </SchemaContext.Provider>
  );
};

export const useSchema = () => React.useContext(SchemaContext);

export default ThemeProvider;
