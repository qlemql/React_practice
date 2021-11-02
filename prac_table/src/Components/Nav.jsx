import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <NavigationBar>
            <NavList>
                <NavItem>
                    <NavBtn to="/main">
                        메인
                    </NavBtn>
                    <NavBtn to="detail">
                        상세페이지
                    </NavBtn>
                </NavItem>
            </NavList>
        </NavigationBar>
        </>
    )
}

const NavigationBar = styled.nav`
    width: 100%;
    height: 12vh;
    background-color:gray;
`;

const NavList = styled.ul`
    height:100%;
    display:flex;
    justify-content: flex-end;
    align-items: center;
`;

const NavItem = styled.li``;

const NavBtn = styled(Link)`
    padding: 30px;

    &:hover {
        color:blue;
    }
`;

export default Nav;