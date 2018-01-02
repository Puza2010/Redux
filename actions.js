import uuid from uuid;

{
    type: ADD_COMMENT,
    text: 'Comment added.'
}

{
    type: EDIT_COMMENT,
    id: 1,
    text: 'Edited comment'
}

{
    type: REMOVE_COMMENT,
    id: 1
}

{
    type: VOTE_UP,
    id: 1
}

{
    type: VOTE_DOWN,
    id: 1
}

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

function voteUp(id) {
    return {
        type: VOTE_UP,
        id
    }
}

function voteDown(id) {
    return {
        type: VOTE_DOWN,
        id
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text, id) => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(editComment(id));
const boundVoteUp = id => dispatch(voteUp(id));
const boundVoteDown = id => dispatch(voteDown(id));