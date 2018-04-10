import React from 'react';
import CommentListItem from './comment_list_item';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchComments(this.props.photoId)
      .then(() => this.setState({loading: false}));
  }

  render() {
    console.log("comment show");

    const commentListItem = this.props.comments.map(comment => {
      return (
        <CommentListItem
          key={comment.id}
          comment={comment}
        />
      );
    });

    return (
      this.state.loading ?
        <div>LOADING</div>
      :
      <div className="comments-view-container">
        <ul className="comments-list">
          {commentListItem}
        </ul>
      </div>
    );
  }
}

export default CommentList;
