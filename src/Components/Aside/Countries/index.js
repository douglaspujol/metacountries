/* eslint-disable prettier/prettier */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from './styles';

function Countries() {
  const Listcountries = useSelector(state => state.favoriteCountries.myCountries);
  return (
    <Container>
      <h5>Seus países</h5>

      <nav>
        {Listcountries.length > 0 ? (
          Listcountries.map(country => (
            < React.Fragment key={`${country._id}`}>
              <NavLink key={`${country._id}`} to={`favoritos/${country._id}`}>
                <img src={country.flag.svgFile} alt="" srcSet="" />
                <h4>{country.name}</h4>
              </NavLink>
            </React.Fragment>
          ))
        ) : null}
      </nav>
    </Container>
  );
}

export default Countries;
