import React from 'react';
import TagIndexItem from './tag_index_item';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, deleteTag, fetchTags } = this.props;
    const tagsList = this.props.tags.map(tag => {
      return (
        <TagIndexItem deleteTag={deleteTag} fetchTags={fetchTags} currentUser={currentUser} key={tag.id} tag={tag} />
      );
    });
    return (
      <ul className="tags-list-container">
        {tagsList}
      </ul>
    );
  }
}

export default TagsIndex;
