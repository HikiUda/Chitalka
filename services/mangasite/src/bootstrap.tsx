import { createRoot } from 'react-dom/client';
import '@packages/ui/src/styles/index.scss';
import { MainProvider } from '@packages/model/src/config/MainProvider';
import { App } from './app/App';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
    <MainProvider>
        <App />
    </MainProvider>,
);
