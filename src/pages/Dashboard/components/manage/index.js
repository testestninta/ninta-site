import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '../../../../services/api';

import pendingStatus from '../../../../assets/img/status_pending.png';
import activeStatus from '../../../../assets/img/status_active.png';

import {
  Container,
  FormContainer,
  FormItemContainer,
  ImageStatus
} from './styles';

const resolveStatus = s => {
  switch (s) {
    case 'pending':
      return { active: false, image: pendingStatus };
    default:
      return { active: true, image: activeStatus };
  }
};

const ManageComponent = () => {
  const { token } = useSelector(state => state.auth);
  const [forms, setForms] = useState([]);

  useEffect(() => {
    async function getForms() {
      const userForms = await api
        .get('users/@me/forms', { headers: { Authorization: token } })
        .then(r => r.data.forms);

      setForms(userForms);
    }

    getForms();
  }, []);

  return (
    <Container>
      <FormContainer>
        {forms.slice(0, 10).map(f => {
          const { active, image } = resolveStatus(f.status);
          return (
            <FormItemContainer key={f._id} active={active}>
              <h1>{f.config.rpgName}</h1>
              <ImageStatus>
                <img alt="Logo" src={image} />
              </ImageStatus>
            </FormItemContainer>
          );
        })}
      </FormContainer>
    </Container>
  );
};

export default ManageComponent;
