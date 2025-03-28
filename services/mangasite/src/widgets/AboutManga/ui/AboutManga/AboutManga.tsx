import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { TextDisclosure } from '@packages/ui/src/shared/TextDisclosure';
import { HStack } from '@packages/ui/src/shared/Stack';
import cls from './AboutManga.module.scss';
import { JanresAndTagsList } from '@/features/JanresAndTagsList';
import { SimilarMangaSlider } from '@/features/SimilarMangaSlider';
import { MangaRateStatistic } from '@/features/MangaRateStatistic';
import { MangaBookmarksStatistic } from '@/features/MangaBookmarksStatistic';

interface AboutMangaProps {
    className?: string;
}

const text = `
Я - символ власти и красоты, Татьяна Картьен, самая востребованная невеста империи. С переполнявшей меня любовью матери, обладающей абсолютной властью, и четырех прекрасных сестер, все, что мне оставалось, - получить титул герцогини, которому завидовал любой.

"Тише, герцог. Что если ваша прекрасная невеста узнает?".
"Мне все равно. Она лишь кукла, которую в своих оковах держит мать".

Жених предал меня. Все члены моей семьи, которые, казалось, были на моей стороне, знали об истинной сущности моего жениха. Сказав, что больше никогда не выйду замуж я подверглась осуждению со стороны матери. Она отвернулась от меня и отобрала все.

Всего лишь неделя. Мне нужно найти жениха, который не побоится взглянуть в глаза моей матери. Он был последним, кто пришел на ум...

Красноглазый жнец, Кейнел Таунсенд, незаконнорожденный наемник, презираемый всем миром, и герой войны.

Чтобы выжить в этом мире, мне придется взять руку дьявола.

Искренность, тайны и другие эмоции этого человека по немногу раскрываются передо мной. Я никогда больше никому не доверюсь.
Наши отношения лишь контракт.

....Но почему моё сердце так бьется?
`;

const AboutManga: FC<AboutMangaProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.AboutManga, {}, [className])}>
            <TextDisclosure className={cls.textDisclosure} text={text} />
            <JanresAndTagsList className={cls.janresAndTagsList} />
            <SimilarMangaSlider className={cls.similarMangaSlider} />
            <HStack align="start" className={cls.statistic}>
                <MangaRateStatistic className={cls.statisticBlock} />
                <MangaBookmarksStatistic className={cls.statisticBlock} />
            </HStack>
        </div>
    );
};
export default AboutManga;
