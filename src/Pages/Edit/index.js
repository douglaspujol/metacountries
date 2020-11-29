import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';
import Input from '../../Components/Input/index';

function Edit() {
  const [teste, setTest] = React.useState();
  const [valuesForm, setValuesForm] = React.useState({});
  const navigate = useNavigate();

  function handleClick() {
    navigate('/sobre');
  }
  function onChange(e) {
    const { name, value } = e.target;
    setValuesForm({ ...valuesForm, [name]: value });
    setTest(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(valuesForm);
  }

  return (
    <Container>
      <div>
        <h1>Brazil</h1>
        <img src="https://restcountries.eu/data/bra.svg" alt="" srcSet="" />
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={onChange}
          label="Capital"
          id="capital"
          value={teste}
          placeholder="Digite a capital"
        />
        <Input
          onChange={onChange}
          label="Area"
          id="area"
          value="8515767"
          placeholder="Digite a Area"
        />
        <Input
          onChange={onChange}
          label="Population"
          id="population"
          value="206135893"
          placeholder="Digite a população"
        />
        <Input
          onChange={onChange}
          label="topLevelDomains"
          id="topLevelDomains"
          value=".br"
          placeholder="Digite o domínio"
        />

        <button type="submit">Salvar</button>
        <button type="button" onClick={() => handleClick()}>
          Voltar
        </button>
      </form>
    </Container>
  );
}

export default Edit;
