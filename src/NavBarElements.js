import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
    background-color: #120f0b;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    min-height: 25px;

`;
  
export const NavLink = styled(Link)`
    text-decoration: none;
    background-color: #120f0b;
    color: white;
    font-size: 18px;
`;
  
  
export const NavMenu = styled.div`
    background-color: #120f0b;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    min-height: 25px;
`;
