/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {EditorPage, EditorPageProps} from './EditorPage';

const meta: Meta<EditorPageProps> = {
    component: EditorPage,
    title: 'EditorPage',
};

export default meta;


export const Component = () => {
    return (
        <>
            <EditorPage/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}