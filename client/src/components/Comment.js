import userLogo from "../assets/images/user-icon.png";
import Wrapper from "../assets/wrappers/Comment";
import { CommentForm } from '../components';

const Comment = ({
        comment, 
        replies, 
        currentUserId, 
        deleteComment,
        setActiveComment,
        activeComment,
        parentId,
        addComment,
        getReplies,
        updateComment,
    }) => {
    const fiveMinutes = 300000;
    // console.log("in comment" , currentUserId);
    const timePassed = new Date() - new Date(comment.time) > fiveMinutes;
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.sender && !timePassed;
    var canDelete = currentUserId === comment.sender && !timePassed;
    canDelete = true;
    const time = new Date(comment.time).toLocaleDateString();
    const parentCheck = parentId ? parentId : comment._id;
    const isReplying =
        activeComment &&
        activeComment.id === comment._id &&
        activeComment.type === "replying";
    const isEditing =
        activeComment &&
        activeComment.id === comment._id &&
        activeComment.type === "editing";
    return (
        <Wrapper>
            <div className="comment">
                <div className="comment-image-container">
                    <img src={userLogo} alt="User"/>
                </div>
                <div className="comment-right-part">
                    <div className="comment-content">
                        <div className="comment-author">{comment.sender}</div>
                        <div>{time}</div>
                    </div>
                    {!isEditing && <div className="comment-text">{comment.body}</div>}
                    {isEditing && (
                    <CommentForm
                        submitLabel="Update"
                        hasCancelButton
                        initialText={comment.body}
                        handleSubmit={(text) => updateComment(text, comment._id)}
                        handleCancel={() => {
                            setActiveComment(null);
                        }}
                    />
                    )}
                    <div className="comment-actions">
                        {canReply && <div 
                                className="comment-action"
                                onClick={() =>
                                    setActiveComment({ id: comment._id, type: "replying" })
                                }
                            >Reply</div>}
                        {canEdit && <div 
                                className="comment-action"
                                onClick={() =>
                                    setActiveComment({ id: comment._id, type: "editing" })
                                }    
                            >Edit</div>}
                        {canDelete && <div className="comment-action" onClick={()=> deleteComment(comment._id)}>Delete</div>}
                    </div>
                    {isReplying && (
                        <CommentForm
                            submitLabel="Reply"
                            handleSubmit={(text) => addComment(text, parentCheck)}
                        />
                    )}
                    {replies.length > 0 && (
                        <div className="replies">
                        {replies.map((reply) => (
                            <Comment 
                                key={reply._id}
                                comment={reply}
                                replies={getReplies(reply._id)}
                                currentUserId={currentUserId}
                                deleteComment = {deleteComment}
                                parentId = {reply._id}
                                addComment = {addComment}
                                activeComment={activeComment}
                                setActiveComment={setActiveComment}
                                getReplies = {getReplies}
                                updateComment = {updateComment}
                            />
                        ))}
                      </div>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default Comment;