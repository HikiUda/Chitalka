import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
import '@/app/styles/index.css';
import { App } from './app/App';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(<App />);
