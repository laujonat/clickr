import React from 'react';

class TagsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    console.log("tag index item ");
    return (
      <li className="tag">
        <p>{this.props.tag.body}</p>
      </li>
    );
  }
}

export default TagsIndexItem;
