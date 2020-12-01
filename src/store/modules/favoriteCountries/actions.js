export function addCountryToList(country) {
  return {
    type: '@country/ADD_TO_LIST',
    payload: { country },
  };
}
export function updateCountryToList(country) {
  return {
    type: '@country/UPDATE_TO_LIST',
    payload: { country },
  };
}
