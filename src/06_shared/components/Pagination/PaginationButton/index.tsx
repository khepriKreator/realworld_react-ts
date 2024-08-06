import {ReactNode} from "react";
import classNames from 'classnames';

type Props = {
    children: ReactNode;
    onClick: () => void;
    active: boolean;
}

export const PaginationButton = ({children, onClick, active}: Props) => {
   const className = classNames(
       'page-item',
       {
           'active': active,
       }
   )

   return (
       <li className={className}>
           <a className="page-link" href="#" onClick={onClick}>{children}</a>
       </li>
   )
}