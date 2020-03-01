import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import auth from '../../services/auth';
import User from '../../api/User';
import Discord from '../../api/Discord';

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

import Logo from '../../assets/img/logo.png';

import {
  Container,
  LogoStyle,
  Button,
  LoggedButtonDiv,
  LoggedButton,
  DropDown,
  DropdownItem
} from './styles';

const HeaderComponent = () => {
  const { isSigned, token } = useSelector(state => state.auth);
  const [user, setUser] = useState(null);
  const [dropdowActive, setDropdwonActive] = useState(false);

  const login = () => Discord.loginPopup();
  const dropdown = () => setDropdwonActive(!dropdowActive);

  function renderButton() {
    const discordUser = user;
    if (discordUser) {
      const DrodpwnIcon = dropdowActive ? IoMdArrowDropup : IoMdArrowDropdown;
      return (
        <LoggedButtonDiv>
          <LoggedButton onClick={dropdown}>
            {user.tag}
            <DrodpwnIcon />
          </LoggedButton>
          <DropDown active={dropdowActive}>
            <DropdownItem href="/dashboard">Dashboard</DropdownItem>
            <DropdownItem href="/logout">Sair</DropdownItem>
          </DropDown>
        </LoggedButtonDiv>
      );
    }
    return <Button onClick={login}>Login</Button>;
  }

  useEffect(() => {
    async function loadUserSate() {
      if (isSigned && auth.isAuthenticated(token)) {
        const user = await new User(auth.getParams(token)).getUser();
        setUser(user);
      }
    }

    loadUserSate();
  }, []);

  return (
    <Container>
      <LogoStyle href="/">
        <img src={Logo} />
      </LogoStyle>
      {renderButton()}
    </Container>
  );
};

export default HeaderComponent;
