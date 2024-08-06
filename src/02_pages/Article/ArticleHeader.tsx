import {Models_Article} from "../../06_shared/api";
import dayjs from "dayjs";

export const ArticleHeader = ({title, author, createdAt, favoritesCount}: Models_Article) => {

    return (
        <div className="banner">
            <div className="container">
                <h1>{title}</h1>

                <div className="article-meta">
                    <a href="#"><img src={author?.image}/></a>
                    <div className="info">
                        <a href="#" className="author">{author?.username}</a>
                        <span className="date">{dayjs(createdAt).format('MMMM D, YYYY')}</span>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary">
                        <i className="ion-plus-round"></i>
                        &nbsp; Follow {author?.username} <span className="counter"></span>
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-sm btn-outline-primary">
                        <i className="ion-heart"></i>
                        &nbsp; Favorite Post <span className="counter">({favoritesCount})</span>
                    </button>
                    {/*<button className="btn btn-sm btn-outline-secondary">
                        <i className="ion-edit"></i> Edit Article
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                        <i className="ion-trash-a"></i> Delete Article
                    </button>*/}
                </div>
            </div>
        </div>
    )
}