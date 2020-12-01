/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../Input/index';
import { result } from '../../../store/modules/countries/actions';
import { Container } from './styles';

function Form() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  React.useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(
        'https://countries-274616.ew.r.appspot.com',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
      query {
        Country(filter:{name_starts_with:"${value}"}) {
          _id
          name
          capital
          flag{
            svgFile
          }
        }
      }`,
          }),
        }
      );
      const { data } = await response.json();
      const resultado = data.Country;
      dispatch(result(resultado));
    }
    fetchCountries();
  }, [value]);

  function onChange(e) {
    setValue(e.target.value);
  }

  return (
    <Container>
      <h1>PESQUISAR</h1>
      <Input
        id="buscar"
        label="Digite o nome do seu país."
        type="text"
        value={value}
        placeholder="termo da busca (ex: Brazil)"
        onChange={onChange}
      />
    </Container>
  );
}

export default Form;
