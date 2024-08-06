import { ReactNode } from 'react';


type Props = {
    children: ReactNode;
    onClick: () => void;
}

export const Tag = ({children, onClick}: Props) => {
    return (
        <a href="#" className="tag-pill tag-default" onClick={onClick}>{children}</a>
    )
}