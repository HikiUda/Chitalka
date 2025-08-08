export async function enableDevWorker() {
    if (import.meta.env.PROD) {
        return;
    }

    const { worker } = await import('./devWorker');
    return worker.start();
}
