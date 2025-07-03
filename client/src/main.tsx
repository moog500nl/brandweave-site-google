
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!;

// Hide fallback content once React app loads
const fallbackContent = document.getElementById('fallback-content');
if (fallbackContent) {
  fallbackContent.style.display = 'none';
}

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

createRoot(root).render(app);
