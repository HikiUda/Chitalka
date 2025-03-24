import { FC } from 'react';
import { HStack } from '@packages/ui/src/shared/Stack';
import { Icon } from '@packages/ui/src/shared/Icon';
import { Input } from '@packages/ui/src/shared/Input';
import SearchSvg from '@packages/ui/src/assets/icon/common/search.svg';
import { MangaSearchList } from '../MangaSearchList/MangaSearchList';
import { ResentSearch } from '../ResentSearch/ResentSearch';
import cls from './QuickSearchModalContent.module.scss';

interface QuickSearchModalContentProps {
    className?: string;
}

const QuickSearchModalContent: FC<QuickSearchModalContentProps> = (props) => {
    const { className } = props;

    return (
        <>
            <HStack max align="center" className={cls.block}>
                <Icon Svg={SearchSvg} width={20} height={20} />{' '}
                <Input placeholder="Быстрый поиск" maxWidth />
            </HStack>
            <ResentSearch className={cls.block} />
            <MangaSearchList />
        </>
    );
};
export default QuickSearchModalContent;
