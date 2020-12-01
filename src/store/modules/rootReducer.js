import { combineReducers } from 'redux';

import favoriteCountries from './favoriteCountries/reducer';
import countries from './countries/reducer';

export default combineReducers({ favoriteCountries, countries });
