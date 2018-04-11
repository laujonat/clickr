import React from 'react';
import { Link } from 'react-router-dom';

class Headers extends React.Component {
  render() {
    let selected = this.props.selectedPane;
    let headers = this.props.panes.map((pane, index) => {
      let title = pane.title;
      let klass = "";
      if (index === selected) {
        klass = "current";
      }

      return (
        <li
          key={index}
          className={klass}
          onClick={this.props.onTabChosen.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });

    return (
      <ul className="feed-nav-link">
        {headers}
      </ul>
    );
 }
}



class FeedNav extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
       selectedPane: 0
     };
     this.selectTab = this.selectTab.bind(this);
    }

   selectTab(num) {
     this.setState({selectedPane: num});
   }

  render() {
    let pane = this.props.panes[this.state.selectedPane];
    return (
      <React.Fragment>
      <div className="feed-nav">
        <Headers
         selectedPane={this.state.selectedPane}
         onTabChosen={this.selectTab}
         panes={this.props.panes}>
       </Headers>
     </div>
     
    {pane.content}


    </React.Fragment>


    );
  }
}

export default FeedNav;
// <div className="feed-nav">
//   <ul className="feed-nav-link">
//     <li className="nav-link one"><Link to="/feed">All Activity</Link></li>
//     <li className="nav-link two"><Link to="/feed">People</Link></li>
//   </ul>
// </div>
