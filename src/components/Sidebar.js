import * as React from "react";
import styled from "styled-components";
import Logo from "../images/icon.png";
import colors from "./Colors";

const LogoWrapper = styled.img`
  object-fit: contain;
  width: 40px;
  display: flex;
`;

const Wrapper = styled.aside`
  width: 200px;
  border-right: 1px solid ${colors.bright};
  padding: 15px 10px;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <LogoWrapper src={Logo} />
    </Wrapper>
  );
};

export default Sidebar;
