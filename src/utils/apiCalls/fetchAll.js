export const fetchAll = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(`Error fetching data: ${response.statusText}`);
  }
  const all = await response.json();
  return all;
};

export default fetchAll;
