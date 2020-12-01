/* eslint-disable  */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { addCountryToList } from '../../store/modules/favoriteCountries/actions';

function About() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [details, setDetails] = React.useState();

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
        Country(_id:"${id}") {
          _id
          name
          capital
          area
          population
          flag{
            svgFile
          }
          topLevelDomains {
            name
          }
        }
      }`,
          }),
        }
      );
      const { data } = await response.json();
      // eslint-disable-next-line no-debugger
      if (data.Country.length === 0) {
        navigate('/*');
      } else {
        setDetails(data.Country[0]);
      }
    }
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function handleClick() {
    navigate('/');
  }
  function handleSave() {
    dispatch(addCountryToList(details));
    navigate('/');
  }

  return (
    <Container>
      {!details ? (
        'carregando...'
      ) : (
          <>
            <h1>{details.name}</h1>
            <img src={`${details.flag.svgFile}`} alt="" srcSet="" />
            <p>Capital:{details.capital}</p>
            <p>Area: {details.area}</p>
            <p>Poulation: {details.population}</p>
            <p>topLevelDomains: {details.topLevelDomains[0].name}</p>
            <div className="actions">
              <button type="button" onClick={handleClick}>
                Voltar
            </button>
              <button type="button" onClick={handleSave}>
                Salvar
            </button>
            </div>
          </>
        )}
    </Container>
  );
}

export default About;
/**
 * {
    _id: '2',
    name: 'Carregando',
    flag: { svgFile: '#' },
    capital: 'carregando capital',
    area: 'Carregando area',
    population: 'Carregando População',
    topLevelDomains: [
      {
        name: 'carregando',
      },
    ],
  }
 */
