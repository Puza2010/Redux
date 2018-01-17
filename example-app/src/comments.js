import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, VOTE_UP, VOTE_DOWN} from './actions'

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];
		case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.comments.map(function(comment) {
                if(action.id === comment.id) {
                    comment.text = action.text;
                    return comment;
                }
                return comment;
            }
        )
        case VOTE_UP:
            return state.comments.map(function(comment) {
                if(action.id === comment.id) {
                    comment.votes += 1;
                    return comment;
                }
                return comment;
            }
        )
        case VOTE_DOWN:
            return state.comments.map(function(comment) {
                if(action.id === comment.id) {
                    comment.votes -= 1;
                    return comment;
                }
                return comment;
            }
        )
        default:
            return state;
    }
}

export default comments;