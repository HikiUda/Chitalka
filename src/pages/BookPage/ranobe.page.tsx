import { useParams } from 'react-router-dom';
import { BookPage } from './ui/layout/BookPage';
import { BookTitle } from './ui/layout/BookTitle';
import { BookRating } from './ui/layout/BookRating';
import { BookContent } from './ui/layout/BookContent';
import { RanobeCover } from '@/features/BookCover';
import { RanobeContinueReadButton } from '@/features/BookContinueRead';
import { RanobeBookmarkSelector } from '@/features/BookToBookmarks';
import { RanobeRateModalTrigger } from '@/features/BookRate';
import { useRanobeBasicInfo, useBookTitles, useGetRanobe } from '@/entities/BookInfo';
import { lazyNamed } from '@/shared/lib/helpers/lazyNamed';
import { PathParams, Routes } from '@/shared/kernel/router';

const AboutRanobe = lazyNamed(() => import('./ui/AboutRanobe'), 'AboutRanobe');
const RanobeChapters = lazyNamed(() => import('@/features/BookChapters'), 'RanobeChapters');

const BookSidebar = lazyNamed(() => import('./ui/layout/BookSidebar'), 'BookSidebar');
const TitleInfo = lazyNamed(() => import('./ui/layout/TitleInfo'), 'TitleInfo');

export const RanobePage = () => {
    const { ranobeId } = useParams<PathParams[typeof Routes.RANOBE]>();
    if (!ranobeId) throw new Error('ranobeId is required');

    const { ranobe } = useGetRanobe(ranobeId);
    const ranobeTitles = useBookTitles(ranobe);
    const { basicInfo } = useRanobeBasicInfo(ranobe);

    return (
        <BookPage
            banner={ranobe}
            cover={<RanobeCover ranobeId={ranobe.id} cover={ranobe.cover} className="w-full" />}
            title={
                <BookTitle
                    title={ranobeTitles.main}
                    subtitle={ranobeTitles.subtitle}
                    titleInfo={
                        <TitleInfo
                            titles={ranobeTitles.titles}
                            otherTitles={ranobeTitles.otherTitles}
                        />
                    }
                />
            }
            rating={
                <BookRating
                    rate={ranobe.rate}
                    countRate={ranobe.rateCount}
                    rateButton={<RanobeRateModalTrigger ranobeId={ranobe.id} />}
                />
            }
            buttons={
                <>
                    <RanobeContinueReadButton ranobeId={ranobe.id} className="w-full" />
                    <RanobeBookmarkSelector className="w-full" ranobeId={ranobe.id} />
                </>
            }
            sidebar={
                <BookSidebar
                    basicInfo={basicInfo}
                    otherTitles={ranobeTitles.otherTitles}
                    people={ranobe.people}
                />
            }
            content={
                <BookContent
                    info={<AboutRanobe ranobeId={ranobeId} />}
                    chapters={<RanobeChapters ranobeId={ranobeId} />}
                    comments={<div>comments</div>}
                />
            }
        />
    );
};

export const Component = RanobePage;
