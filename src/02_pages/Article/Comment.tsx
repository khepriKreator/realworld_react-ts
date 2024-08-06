import { Models_Comment} from "../../06_shared/api";
import dayjs from "dayjs";

export const Comment = ({author, updatedAt, createdAt, body}: Models_Comment) => {
    return (
        <div className="card">
            <div className="card-block">
                <p className="card-text">
                    {body}
                </p>
            </div>
            <div className="card-footer">
                <a href="#" className="comment-author">
                    <img src={author?.image} className="comment-author-img"/>
                </a>
                &nbsp;
                <a href="#" className="comment-author">{author?.username}</a>
                <span className="date-posted">{dayjs(updatedAt ? updatedAt : createdAt).format('MMMM D, YYYY')}</span>
            </div>
        </div>
    )
}