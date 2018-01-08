import {ADD_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {VOTE_UP} from './actions'
import {VOTE_DOWN} from './actions'

const initialState = {
    comments: [],
    users: []
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
            });
		case REMOVE_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id)
			});
		case EDIT_COMMENT:
			return Object.assign({}, state, {
                comments: state.comments.map(function(comment) {
                    if(action.id === comment.id) {
                        comment.text = action.text;
                        return comment;
                    }
                    return comment;
                })
			})
        case VOTE_UP:
            return Object.assign({}, state, {
                comments: state.comments.map(function(comment) {
                    if(action.id === comment.id) {
                        comment.votes += 1;
                        return comment;
                    }
                    return comment;
                })
            })
        case VOTE_DOWN:
            return Object.assign({}, state, {
                comments: state.comments.map(function(comment) {
                    if(action.id === comment.id) {
                        comment.votes -= 1;
                        return comment;
                    }
                    return comment;
                })
            })
        default:
            return state;
    }
}