import { useState } from 'react';

export function useExpandedComments(onToggleExpand?: (commentId: number) => void) {
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});

    const toggleExpanded = (commentId: number) => {
        setExpanded((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
        onToggleExpand?.(commentId);
    };

    const isExpanded = (commentId: number) => expanded[commentId] ?? false;
    return { isExpanded, toggleExpanded };
}
