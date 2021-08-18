import * as React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import "normalize.css";
import "../../styles.css";
import colors from "../components/Colors";
import Sidebar from "../components/Sidebar";

const Main = styled.div`
  background: ${colors.darkest};
  height: 100vh;
  display: flex;
`;

const IndexPage = () => {
  return (
    <Main>
      <title>Home Page</title>
      <Sidebar />
      <Header />
    </Main>
  );
};

export default IndexPage;
