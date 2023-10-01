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
    min-height: 10px;
    box-shadow: 0 6px 10px 4px rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.2);

`;
  
export const NavLink = styled(Link)`
    text-decoration: none;
    background-color: #b6cde0;
    color: #000;
    font-size: 16px;
    
`;
  
  
export const NavMenu = styled.div`
    background-color: #b6cde0;
    color: #000;
    padding: 5px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    min-height: 10px;
`;
