import { FC } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { Page } from '@packages/ui/src/shared/Page';
import { Input } from '@packages/ui/src/shared/Input';
import { Modal } from '@packages/ui/src/shared/Modal';
import { Button } from '@packages/ui/src/shared/Button';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

export const MainPage: FC<MainPageProps> = (props) => {
    const { className } = props;

    const trigger = <Button>Trigger</Button>;
    return (
        <Page className={classNames(cls.MainPage, {}, [className])}>
            Main
            <Modal modalVerticalPosition="top" trigger={trigger}>
                <Input placeholder="Search" maxWidth />
                <Button theme="outline" slot="close" pressAnimation="press">
                    close
                </Button>
            </Modal>
        </Page>
    );
};
