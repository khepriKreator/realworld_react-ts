import { ReactNode } from 'react';


type Props = {
    children: ReactNode;
}

export const ContainerPage = ({children}: Props) => {
    return (
        <div className='container page'>
            {children}
        </div>
    )
}