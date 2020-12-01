export function result(countrys) {
  return {
    type: '@country/RESULT',
    payload: { countrys },
  };
}
