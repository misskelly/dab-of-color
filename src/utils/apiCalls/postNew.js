const postNew = async (path, body) => {
  const response = await fetch(`https://unicolors.herokuapp.com/api/v1/${path}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to post: ${response.statusText}`);
  }
  return response.json();
};

export default postNew;