import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LingoProviderWrapper, loadDictionary } from 'lingo.dev/react/client';

 
// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LingoProviderWrapper loadDictionary={(locale) => loadDictionary(locale)}>
      <App />
    </LingoProviderWrapper>
  </StrictMode>
);
