import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/helpers/classNames';
import { ModalSidebar } from '@packages/ui/src/shared/ModalSidebar';
import { Button } from '@packages/ui/src/shared/Button';
import { useReadSettingsStore } from '../../model/store/readSettingsStore';
import cls from './ReadSettingsModal.module.scss';

interface ReadSettingsModalProps {
    className?: string;
}

export const ReadSettingsModal: FC<ReadSettingsModalProps> = (props) => {
    const { className } = props;

    const chapterView = useReadSettingsStore.use.chapterView();
    const setChapterView = useReadSettingsStore.use.setChapterView();

    return (
        <ModalSidebar
            trigger={<Button>trigger</Button>}
            className={classNames(cls.ReadSettingsModal, {}, [className])}
        >
            <Button onPress={() => setChapterView(chapterView === 'byPage' ? 'tape' : 'byPage')}>
                {chapterView}
            </Button>
        </ModalSidebar>
    );
};
