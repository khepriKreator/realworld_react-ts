/* eslint i18next/no-literal-string: "off" */
import {Meta} from '@storybook/react';
import {ProfilePage, ProfilePageProps} from './ProfilePage';

const meta: Meta<ProfilePageProps> = {
    component: ProfilePage,
    title: 'ProfilePage',
};

export default meta;


export const Component = () => {
    return (
        <>
            <ProfilePage/>
        </>
    );
};

Component.parameters = {
    msw: {
        handlers: []
    },
}