import {ReactNode} from "react";

type Props = {
    children: ReactNode;
    className?: string;
}

export const Tab = ({children, className}: Props) => {
    return (
        <li className={className}>
            {children}
        </li>
    )
}