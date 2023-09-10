import { styled } from "styled-components";

export const Navigation = styled.nav`
  /* display: flex;
  justify-content: center; */

  margin: 0 auto;

  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};

  margin-bottom: 60px;
  height: 50px;
`;


export const Logo = styled.span`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const NavMenuItem = styled.li`
  display: flex;
  align-items: center;
  width: 80px;
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
`;

export const ChangerTheme = styled.button`
  color: "white";
  border: none;
  background: transparent;
  cursor: pointer;
`;
