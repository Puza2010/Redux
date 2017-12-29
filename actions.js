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

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(text) {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()       
    }
}

function voteUp(text) {
    return {
        type: VOTE_UP,
        id: uuid.v4(),
        votes: 10    
    }
}

function voteDown(text) {
    return {
        type: VOTE_DOWN,
        id: uuid.v4(),
        votes: 10    
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => dispatch(editComment(text));
const boundRemoveComment = text => dispatch(editComment(id));
const boundVoteUp = text => dispatch(voteUp(votes));
const boundVoteDown = text => dispatch(voteDown(votes));