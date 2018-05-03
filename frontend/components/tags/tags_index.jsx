import React from 'react';
import TagIndexItem from './tag_index_item';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.routeChanged();
  }

  renderErrors() {
    if(this.props.errors) {
      return (
        <ul className="errors_render">
          {this.props.errors.map((error, i) => (
            <li key={`${i}`}>{error}</li>)
          )}
        </ul>
      );
    }
  }

  render() {
    const { currentUser, deleteTag, fetchTags } = this.props;
    const tagsList = this.props.tags.map(tag => {
      return (
        <TagIndexItem deleteTag={deleteTag} fetchTags={fetchTags} currentUser={currentUser} key={tag.id} tag={tag} />
      );
    });
    return (
      <React.Fragment>
      <ul className="tags-list-container">
        {tagsList}
      </ul>
      {this.renderErrors()}
      </React.Fragment>
    );
  }
}

export default TagsIndex;
