import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigpath from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigpath(), svgr(), tailwindcss()],
    server: {
        port: 3000,
    },
});
