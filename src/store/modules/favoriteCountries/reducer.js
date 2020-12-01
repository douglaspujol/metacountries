import produce from 'immer';

export const INITIAL_STATE = {
  myCountries: [],
};

export default function favoriteCountries(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@country/ADD_TO_LIST': {
        const { country } = action.payload;
        const teste = draft.myCountries.find(e => e._id === country._id);
        if (teste) {
          return;
        }
        draft.myCountries.push(country);
        break;
      }
      case '@country/UPDATE_TO_LIST': {
        const { country } = action.payload;
        const findCountry = draft.myCountries.findIndex(
          obj => obj._id === country._id
        );
        draft.myCountries[findCountry] = country;
        break;
      }

      default:
    }
  });
}
