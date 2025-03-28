import { createRoot } from 'react-dom/client';
import '@packages/ui/src/styles/index.scss';
import ThemeProvider from '@packages/model/src/lib/theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from './app/App';
//TODO wrapper
const domNode = document.getElementById('root')!;
const root = createRoot(domNode);
const queryClient = new QueryClient();

root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </QueryClientProvider>
    </BrowserRouter>,
);
