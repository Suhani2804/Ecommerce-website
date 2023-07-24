import React from "react";

class ProfileClassComponent extends React.Component {
    constructor(props) {
      console.log(" Child constructor");
      super();
      this.state = {
        userInfo: [],
      };
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    async componentDidMount() {
      console.log("Child component did mount");
  
      const result = await fetch("https://api.github.com/users");
  
      const users = await result.json();
  
      this.setState({ userInfo: users });
  
      this.timer = setInterval(() => {
        console.log("timer is running");
      }, 1000);
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        console.log("component updated");
      }
  
      if (prevState.count1 !== this.state.count1) {
        console.log("component updated for count 1");
      }
    }
  
    componentWillUnmount() {
      console.log("timer", this.timer);
      clearInterval(this.timer);
      console.log("component is unmounted");
    }
  
    handleClick() {
      // Never mutate state variables directly
      this.setState({ count: this.state.count + 1, count1: 10 });
    }
  
    render() {
      console.log("Child Class render");
      const { name } = this.props;
      const { count, count1 } = this.state;
      return (
        <>
          <h1>Profile Class Based Component</h1>
          <h2>{name}</h2>
          <h2>Count:{count}</h2>
          <h2>Count1: {count1}</h2>
          {this.state.userInfo.length !== 0 && (
            <h3>{this.state.userInfo[0].avatar_url}</h3>
          )}
          <button onClick={this.handleClick}>Update Count</button>
        </>
      );
    }
  }
  
  export default ProfileClassComponent;