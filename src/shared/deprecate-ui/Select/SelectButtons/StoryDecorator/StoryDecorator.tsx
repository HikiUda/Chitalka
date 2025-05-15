import { Decorator } from '@storybook/react/*';
import { Select, SelectItem } from '../../Select';

export function StoryDecorator(): Decorator {
    return (Story) => (
        <Select items={[{ id: 1 }]} selectButton={<Story />}>
            <SelectItem>1</SelectItem>
        </Select>
    );
}
