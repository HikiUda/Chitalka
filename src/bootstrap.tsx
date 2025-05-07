import { createRoot } from 'react-dom/client';
import '@/shared/styles/index.scss';
import { MainProvider } from '@/shared/config/MainProvider';
import { App } from './app/App';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
    <MainProvider>
        <App />
    </MainProvider>,
);
