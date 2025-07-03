
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

createRoot(root).render(app);
