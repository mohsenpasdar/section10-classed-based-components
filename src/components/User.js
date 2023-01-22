import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   useEffect(() => {
//     return () => {
//       console.log('unmount');
//     }
//   }, [props.name])
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
