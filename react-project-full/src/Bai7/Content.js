import { memo } from 'react';

function Content({ callback = () => {} }) {
    callback();
    console.log('render content' + Math.random());
    return <h1>Content</h1>;
}

export default memo(Content);
