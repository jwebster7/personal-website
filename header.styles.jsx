import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const sharedTextStyles = css`
  padding: 0;
  margin: 0;
  font-size: 1.25rem;
  color: #fff5ee;
  text-decoration: none;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: 25px 50px; */
  /* width: 80%; */
  /* background: transparent; */
  font-family: "Roboto Mono", serif;
  /* font-weight: 500; */
`;

export const BrandContainer = styled.div`
  ${sharedTextStyles}
  font-size: 2rem;
  /* font-family: 'Open Sans', sans-serif; */
  /* font-family: 'Roboto Slab', serif; */
  font-family: "Open Sans", serif;
  font-weight: lighter;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavigationLinkContainer = styled(NavLink)`
  ${sharedTextStyles}
  margin-left: 50px;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  :active {
    color: #a198ab;
    /* text-decoration: underline #A198AB !important; */
  }

  :hover {
    /* font-size: 1.3rem; */
    color: #a198ab;
    /* text-decoration: underline #A198AB; */
  }
`;
