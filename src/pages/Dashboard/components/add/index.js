import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import api from '../../../../services/api';

import { handleSubmit } from '../../../../utils/matches';

import {
  Container,
  SubContainer,
  ErrorContainer,
  FormContainer,
  Label,
  InputStyle,
  InputButton,
  Success,
  SuccessButton
} from './styles';

const isNull = p => p === null || p === undefined;

const getDate = () => {
  const date = new Date(Date.now());
  const month = date.getMonth() >= 10 ? date.getMonth() : `0${date.getMonth()}`;
  const day = date.getDay() >= 10 ? date.getDay() : `0${date.getDay()}`;
  return `${date.getFullYear()}-${month}-${day}`;
};

const Input = ({
  label,
  type,
  required = false,
  inline = true,
  ...otherOptions
}) => (
  <FormContainer inline={inline}>
    <Label>
      {label}
      {required ? <span>*</span> : ''}
    </Label>
    <InputStyle type={type || 'text'} required={required} {...otherOptions} />
  </FormContainer>
);

const AddComponent = () => {
  const { token } = useSelector(state => state.auth);

  const [errorState, setError] = useState(null);
  const [successForm, setSuccessForm] = useState(false);
  const [loadingState, setLoading] = useState(false);
  const [formState, setForm] = useState({
    name: '',
    rpg: '',
    thematic: '',
    site: '',
    description: '',
    dateL: getDate()
  });

  const onChange = e => {
    const name = e.target.name;
    const type = formState[name];
    if (!isNull(type)) {
      setForm({ ...formState, [name]: e.target.value });
    }
  };

  const handleForm = async () => {
    const { error } = await handleSubmit(formState);

    const sendError = (err, timeout = 2000) => {
      setError(err);
      window.scroll({ top: 0 });
      setTimeout(() => setError(null), timeout);
    };

    if (error) sendError(error);
    else {
      setLoading(true);
      await api
        .post('users/@me/forms', formState, {
          headers: {
            Authorization: token
          }
        })
        .then(() => {
          const containerElement = document.querySelector(
            '.form .form-container'
          );

          if (containerElement) {
            containerElement.remove();
            window.scroll({ top: 0 });
            setSuccessForm(true);
          } else window.location.reload();
        })
        .catch(() => sendError('Ocorreu um erro'));
    }

    setLoading(false);
  };

  const error = !isNull(errorState);
  return (
    <Container className="form">
      <ErrorContainer error={error}>
        {error ? <h2>{errorState}</h2> : null}
      </ErrorContainer>
      <SubContainer className="form-container">
        <Input
          placeholder="Insira o seu nome..."
          label="Seu Nome"
          name="name"
          onChange={onChange}
          required={true}
        />
        <Input
          placeholder="Insira o nome do RPG"
          label="Nome do RPG (4 - 18)"
          name="rpg"
          onChange={onChange}
          required={true}
          minlength="4"
          maxlength="18"
        />
        <Input
          placeholder="Insira a temática do RPG..."
          label="Temática do RPG"
          name="thematic"
          onChange={onChange}
          required={true}
        />
        <Input
          label="Site do RPG"
          placeholder="Insira o site do RPG..."
          name="site"
          onChange={onChange}
        />
        <Input
          className="max-container"
          label="Descrição do RPG (12 - 36)"
          placeholder="Insira a desrição do RPG..."
          name="description"
          onChange={onChange}
          required={true}
          minlength="12"
          maxlength="36"
        />
        <Input
          label="Data de Lançamento"
          name="dateL"
          type="date"
          data-date-format="DD MMMM YYYY"
          value={formState.dateL}
          onChange={onChange}
        />
        <InputButton onClick={handleForm}>
          {loadingState ? 'Carregando...' : 'Enviar'}
        </InputButton>
      </SubContainer>
      <Success active={successForm}>
        <h2> Criado com sucesso!</h2>
        <SuccessButton onClick={() => window.location.reload()}>
          Ok
        </SuccessButton>
      </Success>
    </Container>
  );
};

export default AddComponent;
