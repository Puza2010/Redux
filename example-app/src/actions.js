import uuid from 'uuid';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id       
    }
}

function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}

//const boundAddComment = text => dispatch(addComment(text));
//const boundEditComment = (text, id) => dispatch(editComment(text, id));
//const boundRemoveComment = id => dispatch(editComment(id));
//const boundVoteUp = id => dispatch(voteUp(id));
//const boundVoteDown = id => dispatch(voteDown(id));

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export { addComment };
export { editComment };
export { removeComment };
export { thumbUpComment };
export { thumbDownComment };