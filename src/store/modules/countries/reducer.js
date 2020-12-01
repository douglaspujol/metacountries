import produce from 'immer';

export const INITIAL_STATE = {
  countriesList: [],
};

export default function countries(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@country/RESULT': {
        const { countrys } = action.payload;
        draft.countriesList = countrys;
        break;
      }

      default:
    }
  });
}
