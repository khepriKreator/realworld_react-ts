import {Models_Article} from "../../06_shared/api/models";
import {Link} from "react-router-dom";
import dayjs from "dayjs";

type Article = {
    data: Models_Article;
}
export const ArticlePreview = ({data}: Article) => {
    return (
        <div className="article-preview">
            <div className="article-meta">
                <a href='#'><img src={data.author.image}/></a>
                <div className="info">
                    <a href='#' className="author">{data.author.username}</a>
                    <span className="date">{dayjs(data.createdAt).format('MMMM D, YYYY')}</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                    <i className="ion-heart"></i> {data.favoritesCount}
                </button>
            </div>
            <Link to={`/article/${data.slug}`} className="preview-link">
                <h1>{data.title.slice(0, 100)}...</h1>
                <p>{data.description}</p>
                <span>Read more...</span>
                <ul className="tag-list">
                    {data.tagList.map((tag) => <li className="tag-default tag-pill tag-outline">{tag}</li>)}
                </ul>
            </Link>
        </div>
    )
}