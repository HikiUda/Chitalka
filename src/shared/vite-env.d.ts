/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    readonly VITE_BASE_S3_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
