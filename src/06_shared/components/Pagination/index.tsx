// https://www.npmjs.com/package/react-use-pagination
import {PaginationButton} from "./PaginationButton";

type Props = {
    totalArticles: number | undefined;
    currentPage: (offset: number) => void;
    isActive: (offset: number) => boolean;
}
export const Pagination = ({totalArticles, currentPage, isActive}: Props) => {
    const totalPage = new Array(Math.ceil(totalArticles ? totalArticles / 20 : 10)).fill(1);
    totalPage.forEach((_, index) => totalPage[index] = index * 20);
 console.log(totalPage)
    return (
        <ul className="pagination">
            {
                totalPage.map((offset: number, id) => <PaginationButton active={isActive(offset)} key={id} onClick={() => currentPage(offset)}>{id + 1}</PaginationButton>)
            }
        </ul>
    )
}

