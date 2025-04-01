export function formatDate(date: Date): string {
    //TODO plure form e18next
    const diff = new Date().getTime() - date.getTime();
    const sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return 'только что';
    }
    const min = Math.floor(sec / 60);
    if (min < 60) {
        return `${min} минут назад`;
    }
    const hours = Math.floor(min / 60);
    if (hours < 24) {
        return `${hours} часов назад`;
    }
    const days = Math.floor(hours / 24);
    return `${days} дней назад`;
}
