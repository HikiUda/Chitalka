import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
import '@/app/styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { MainProvider } from './app/providers/mainProvider';
import { router } from '@/app/providers/router';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
    <StrictMode>
        <MainProvider>
            <RouterProvider router={router} />
        </MainProvider>
    </StrictMode>,
);
