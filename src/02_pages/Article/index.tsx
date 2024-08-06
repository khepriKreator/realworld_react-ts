import {ArticleHeader} from "./ArticleHeader.tsx";
import {Link, useParams} from "react-router-dom";
import {Models_Comment, useGetArticleBySlugQuery} from "../../06_shared/api";
import dayjs from "dayjs";
import {useGetCommentsQuery} from "../../06_shared/api/queries/useGetComments.ts";
import {Comment} from "./Comment.tsx";

export const Arcticle = () => {
    const {slug} = useParams();
    const {data: dataArticle, isLoading} = useGetArticleBySlugQuery(slug);
    const {data: dataComments} = useGetCommentsQuery(slug);
    if (!dataArticle) {
        return null;
    }
    if (isLoading) {
        return(
                <h5>...is Loading</h5>
            )
    }

    return (
        <div className="article-page">
            <ArticleHeader {...dataArticle}/>

            <div className="container page">
                <div className="row article-content">
                    <div className="col-md-12">
                        <p>
                            {dataArticle.body}
                        </p>
                        <ul className="tag-list">
                            {dataArticle.tagList?.map((tag: string) => <li className="tag-default tag-pill tag-outline">{tag}</li>)}
                        </ul>
                    </div>
                </div>

                <hr/>

                <div className="article-actions">
                    <div className="article-meta">
                        <a href="#"><img src={dataArticle.author?.image}/></a>
                        <div className="info">
                            <a href="" className="author">{dataArticle.author?.username}</a>
                            <span className="date">{dayjs(dataArticle.createdAt).format('MMMM D, YYYY')}</span>
                        </div>

                        <button className="btn btn-sm btn-outline-secondary">
                            <i className="ion-plus-round"></i>
                            &nbsp; Follow {dataArticle.author?.username}
                        </button>
                        &nbsp;
                        <button className="btn btn-sm btn-outline-primary">
                            <i className="ion-heart"></i>
                            &nbsp; Favorite Article <span className="counter">({dataArticle.favoritesCount})</span>
                        </button>
                        <Link to={`/editor/${dataArticle.slug}`}>
                            <button className="btn btn-sm btn-outline-secondary">
                                <i className="ion-edit"></i> Edit Article
                            </button>
                        </Link>
                        <button className="btn btn-sm btn-outline-danger">
                            <i className="ion-trash-a"></i> Delete Article
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        <form className="card comment-form">
                            <div className="card-block">
                                <textarea className="form-control" placeholder="Write a comment..." rows={3}></textarea>
                            </div>
                            <div className="card-footer">
                                <img src="#" className="comment-author-img"/>
                                <button className="btn btn-sm btn-primary">Post Comment</button>
                            </div>
                        </form>

                {Array.isArray(dataComments) && dataComments?.map((comment: Models_Comment) => {
                    return (
                        <Comment key={comment.id} {...comment}/>
                    )
                })}

                    </div>
                </div>
            </div>
        </div>
    )
}