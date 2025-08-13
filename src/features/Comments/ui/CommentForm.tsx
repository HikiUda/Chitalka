type CommentFormProps = {
    className?: string;
};

export const CommentForm = (props: CommentFormProps) => {
    const { className } = props;

    return <div className="w-full h-20 border-2 rounded-2xl border-primary">Comment Form</div>;
};
