import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
    background-color: #b6cde0;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    min-height: 20px;

`;
  
export const NavLink = styled(Link)`
    text-decoration: none;
    background-color: #b6cde0;
    color: #000;
    font-size: 18px;
    
`;
  
  
export const NavMenu = styled.div`
    background-color: #b6cde0;
    color: #000;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    min-height: 25px;
`;
