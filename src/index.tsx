import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
import '@/app/styles/index.css';
import { App } from './app/App';
import { MainProvider } from '@/app/providers/mainProvider';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
    <MainProvider>
        <App />
    </MainProvider>,
);
