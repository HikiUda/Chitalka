import path from 'path';
import { buildConfig } from '@config/storybook';

export default buildConfig({
    output: '',
    entry: '',
    html: '',
    public: '',
    src: path.resolve(__dirname, '..', 'src'),
});
