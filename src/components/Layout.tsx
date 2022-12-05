import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLayout = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StyledNavigationbar = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  position: fixed;
  top: 0px;
  padding: 10px 20px;
  color: white;
  background: #1f5f97;
  justify-content: center;
  a {
    color: white;
    font-weight: 900;
  }
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledLayout>
      <StyledNavigationbar>
        <Link to="/">TicTacToe</Link>
        <Link to="/tilt">Tilt</Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/other-hook">otherHook</Link>
        <Link to="/hoc-stuff">hoc</Link>
      </StyledNavigationbar>
      {children}
    </StyledLayout>
  );
};

export default Layout;
