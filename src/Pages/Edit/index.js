import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import { updateCountryToList } from '../../store/modules/favoriteCountries/actions';
import Input from '../../Components/Input/index';

function Edit() {
  const [countryEdit, setCountryEdit] = React.useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const countries = useSelector(state => state.favoriteCountries.myCountries);

  React.useEffect(() => {
    const findCountry = countries.find(country => country._id === id);
    setCountryEdit(findCountry);
  }, [countries, id]);

  function handleClick() {
    navigate('/');
  }
  function onChange(e) {
    const { name, value } = e.target;
    if (name === 'topLevelDomains') {
      setCountryEdit({ ...countryEdit, [name]: [{ name: value }] });
      return;
    }
    setCountryEdit({ ...countryEdit, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateCountryToList(countryEdit));
    navigate(`../../../favoritos/${id}`);
  }

  return (
    <Container>
      {countryEdit && (
        <>
          <div>
            <h1>{countryEdit.name}</h1>
            <img src={countryEdit.flag.svgFile} alt="" srcSet="" />
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              onChange={onChange}
              label="Capital"
              id="capital"
              value={countryEdit.capital}
              placeholder="Digite a capital"
            />
            <Input
              onChange={onChange}
              label="Area"
              id="area"
              value={`${countryEdit.area}`}
              placeholder="Digite a Area"
            />
            <Input
              onChange={onChange}
              label="Population"
              id="population"
              value={`${countryEdit.population}`}
              placeholder="Digite a população"
            />
            <Input
              onChange={onChange}
              label="topLevelDomains"
              id="topLevelDomains"
              value={countryEdit.topLevelDomains[0].name}
              placeholder="Digite o domínio"
            />

            <button type="submit">Salvar</button>
            <button type="button" onClick={() => handleClick()}>
              Voltar
            </button>
          </form>
        </>
      )}
    </Container>
  );
}

export default Edit;
