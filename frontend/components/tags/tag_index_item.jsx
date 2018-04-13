import React from 'react';

class TagsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteTag() {
    this.props.deleteTag(this.props.tag.id)
      .then(() => this.props.fetchTags(this.props.tag.photo_id));
  }

  render() {
    let deleteBtn;
    if(this.props.currentUser.id === this.props.tag.user_id) {
      deleteBtn = <p onClick={() => this.deleteTag()} className="delete-tag">x</p>;
    }
    return (
      <li className="tag">
        {deleteBtn}
        <p>{this.props.tag.body}</p>
      </li>
    );
  }
}

export default TagsIndexItem;
