import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import '@packages/ui/styles/index.scss';
import ThemeProvider from '@packages/model/lib/theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
