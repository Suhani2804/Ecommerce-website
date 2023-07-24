import ProfileClassComponent from "./ProfileClassComponent";
import React from "react";

// const About = () => {
//   return (
//     <>
//       <h1>About Restaurant Page</h1>
//       <Profile name="Anshika Agarwal" />
//       <ProfileClassComponent name="Anshika Class Based" />
//     </>
//   );
// };

class About extends React.Component {
  constructor() {
    super();

    console.log("Parent constructor called");
  }

  componentDidMount() {
    console.log("Parent Component Mounted");
  }

  render() {
    console.log("Parent render called");
    return (
      <>
        <h1>About Restaurant Page</h1>
        {/* <Profile name="Anshika Agarwal" /> */}
        <ProfileClassComponent name="Anshika Class Based" />
      </>
    );
  }
}

export default About;