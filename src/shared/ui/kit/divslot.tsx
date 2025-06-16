import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

function DivSlot({
    asChild = false,
    ...props
}: React.ComponentProps<'div'> & {
    asChild?: boolean;
}) {
    const Comp = asChild ? Slot : 'div';

    return <Comp data-slot="divslot" {...props} />;
}

export { DivSlot };
