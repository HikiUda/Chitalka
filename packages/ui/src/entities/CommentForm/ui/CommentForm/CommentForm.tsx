import { memo, useCallback, useState } from 'react';
import { classNames } from '@packages/model/src/lib/classNames';
import { HStack } from '@ui/shared/Stack';
import { Button } from '@ui/shared/Button';
import { getStyleScrollbar } from '@ui/shared/StyleHooks';
import { TextArea } from '@ui/shared/TextArea';
import cls from './CommentForm.module.scss';

interface CommentFormProps {
    className?: string;
    submit?: (text: string) => void;
}

export const CommentForm = memo((props: CommentFormProps) => {
    const { className, submit } = props;
    const [editStart, setEditStart] = useState(false);
    const [text, setText] = useState('');

    const handleSubmit = useCallback(() => {
        submit?.(text);
        setEditStart(false);
        setText('');
    }, [submit, text]);

    const handleClose = useCallback(() => {
        setEditStart(false);
        setText('');
    }, []);

    return (
        <div
            onFocus={() => setEditStart(true)}
            className={classNames(cls.CommentForm, {}, [className])}
        >
            <TextArea
                value={text}
                onChange={setText}
                className={classNames(cls.textarea, { [cls.startEdit]: editStart }, [
                    getStyleScrollbar(),
                ])}
                placeholder="Написать комментарий"
            />
            {editStart && (
                <HStack justify="end">
                    <Button onPress={handleClose}>Отменить</Button>
                    <Button onPress={handleSubmit} theme="fill">
                        Отправить
                    </Button>
                </HStack>
            )}
        </div>
    );
});
