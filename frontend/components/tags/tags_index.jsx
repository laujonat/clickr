import React from 'react';
import TagIndexItem from './tag_index_item';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);



  }

  render() {
    const tagsList = this.props.tags.map(tag => {
      return (
        <TagIndexItem key={tag.id} tag={tag} />
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
