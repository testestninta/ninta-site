import React, { useState, useEffect } from 'react';

import { setTitle } from '../../utils/PageUtils';

import AddComponent from './components/add';
import RemoveComponent from './components/remove';
import ManageComponent from './components/manage';

import {
  IoIosAddCircle,
  IoIosRemoveCircle,
  IoIosConstruct
} from 'react-icons/io';

import {
  Container,
  NavgationBar,
  NavigationItem,
  ComponentStyle
} from './styles';

const DashboardPage = () => {
  setTitle('Ninta - Dashboard');

  const [componentType, setComponentType] = useState('add');

  useEffect(() => {
    const activeElement = document.querySelector('.dashboard .active-item');
    if (!activeElement) {
      document.querySelector('.dashboard .add').classList.add('active-item');
    } else {
      const element = document.querySelector('.dashboard');
      const elementActive = element.querySelector('.active-item');
      if (element.querySelector(`.${componentType}`)) {
        element.querySelector(`.${componentType}`).classList.add('active-item');
        elementActive.classList.remove('active-item');
      }
    }
  }, [componentType]);

  const imputComponentType = type => {
    if (type !== componentType) setComponentType(type);
  };

  const RenderComponent = () => {
    switch (componentType) {
      case 'add':
        return <AddComponent />;
      case 'remove':
        return <RemoveComponent />;
      case 'manage':
        return <ManageComponent />;
      default:
        return <AddComponent />;
    }
  };

  return (
    <Container className="dashboard">
      <NavgationBar>
        <NavigationItem
          onClick={imputComponentType.bind(this, 'add')}
          className="add"
        >
          <span>Adcionar</span>
          <IoIosAddCircle />
        </NavigationItem>
        <NavigationItem
          onClick={imputComponentType.bind(this, 'manage')}
          className="manage"
        >
          <span>Gerenciar</span>
          <IoIosConstruct />
        </NavigationItem>
        <NavigationItem
          onClick={imputComponentType.bind(this, 'remove')}
          className="remove"
        >
          <span>Remover</span>
          <IoIosRemoveCircle />
        </NavigationItem>
      </NavgationBar>
      <ComponentStyle>{RenderComponent()}</ComponentStyle>
    </Container>
  );
};

export default DashboardPage;
