import {connect} from 'react-redux';
import CommentsList from '../components/CommentsList.js';

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);