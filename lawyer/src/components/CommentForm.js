
import { useState } from "react";
import Wrapper from "../assets/wrappers/Comment";

const CommentForm = ({
        handleSubmit, 
        submitLabel,
        hasCancelButton = false,
        handleCancel,
        initialText = "",
    }) => {
    const [text,setText] = useState(initialText);

    const isTextareaDisable = text.length === 0;

    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit(text)
        setText("");
    }
    return (
        <Wrapper>
            <form onSubmit={onSubmit}>
                <textarea
                    className="comment-form-textarea"
                    value={text}
                    onChange={(e)=> setText(e.target.value) }
                />
                <button className="comment-form-button" disabled={isTextareaDisable} >{submitLabel}</button>
                {hasCancelButton && (
                <button
                    type="button"
                    className="comment-form-button comment-form-cancel-button"
                    onClick={handleCancel}
                    >
                    Cancel
                </button>
            )}
            </form>
        </Wrapper>
    )
}

export default CommentForm;