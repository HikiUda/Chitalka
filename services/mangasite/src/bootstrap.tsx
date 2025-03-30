import { createRoot } from 'react-dom/client';
import '@packages/ui/src/styles/index.scss';
import ThemeProvider from '@packages/model/src/lib/theme/ThemeProvider';
import { QueryClientProvider } from '@packages/model/src/config/queryClient';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
//TODO wrapper
const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <QueryClientProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </QueryClientProvider>
    </BrowserRouter>,
);
