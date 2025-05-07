export const preventDisableScroll = (isOpen: boolean) => {
    setTimeout(() => {
        document.documentElement.style = '';
    });
};
