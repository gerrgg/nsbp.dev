import * as React from "react";
import styled from "styled-components";
import colors from "../components/Colors";
import GithubIcon from "../images/github-icon.svg";

const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  padding: 15px 10px;
  border-bottom: 1px solid ${colors.bright};
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-left: auto;
  max-width: 50%;
`;

const Button = styled.a`
  margin-right: 10px;

  &:last-of-type {
    margin-right: 0;
  }
`;

const Icon = styled.img`
  height: 40px;
  width: 40px;
`;

const Header = () => {
  return (
    <Wrapper>
      <ButtonGroup>
        <Button href="https://github.com/gerrgg?tab=repositories">
          <Icon src={GithubIcon} />
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Header;
