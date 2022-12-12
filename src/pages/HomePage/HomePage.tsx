import React from "react";

import { HomePageContainer } from "./HomePage.styles";
import Directory from "../../components/Directory/Directory";

const Homepage: React.FC = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
