import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from './styles';

function Favorite() {
  const [favoriteCountry, setFavoriteCountry] = React.useState({
    _id: '51',
    name: 'Carregando',
    flag: { svgFile: '#' },
    capital: 'carregando capital',
    area: 'Carregando area',
    population: 'Carregando População',
    topLevelDomains: [
      {
        name: 'test',
      },
    ],
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const countries = useSelector(state => state.favoriteCountries.myCountries);
  React.useEffect(() => {
    const findCountry = countries.find(country => country._id === id);
    setFavoriteCountry(findCountry);
  }, [countries, id]);
  function handleClick() {
    navigate('/');
  }
  function handleEdit() {
    navigate(`/favoritos/${id}/edit`);
  }

  return (
    <Container>
      <h1>{favoriteCountry.name}</h1>
      <img src={`${favoriteCountry.flag.svgFile}`} alt="" srcSet="" />
      <p>Capital:{favoriteCountry.capital}</p>
      <p>Area: {favoriteCountry.area}</p>
      <p>Poulation: {favoriteCountry.population}</p>
      <p>topLevelDomains: {favoriteCountry.topLevelDomains[0].name}</p>
      <div className="actions">
        <button type="button" onClick={handleClick}>
          Voltar
        </button>
        <button type="button" onClick={handleEdit}>
          Editar
        </button>
      </div>
    </Container>
  );
}

export default Favorite;
