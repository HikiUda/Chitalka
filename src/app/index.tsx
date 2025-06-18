import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { MainProvider } from './providers/mainProvider';
import { router } from './providers/router';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
    <StrictMode>
        <MainProvider>
            <RouterProvider router={router} />
        </MainProvider>
    </StrictMode>,
);
