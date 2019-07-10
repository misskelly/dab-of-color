const getAll = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(`Error fetching data: ${response.statusText}`);
  }
  return response.json();
};

export default getAll;
