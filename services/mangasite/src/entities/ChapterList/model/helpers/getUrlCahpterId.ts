export function getUrlChapterId(tome: number, chapter: number, chapterId: number) {
    return `${tome}-tome--${chapter}-chapter---${chapterId}`.replace('.', ',');
}
