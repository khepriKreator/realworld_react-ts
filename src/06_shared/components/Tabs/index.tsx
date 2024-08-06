import {ReactNode} from "react";

export {Tab} from './Tab';

type Props = {
    children: ReactNode;
    className: string;
}
export const Tabs = ({className, children}: Props) => {
    return (
        <ul className={className}>
            {children}
        </ul>
    )
}