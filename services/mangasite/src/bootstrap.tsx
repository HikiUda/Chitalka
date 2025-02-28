import { createRoot } from 'react-dom/client';
import '@packages/ui/src/styles/index.scss';
import ThemeProvider from '@packages/model/src/lib/theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
