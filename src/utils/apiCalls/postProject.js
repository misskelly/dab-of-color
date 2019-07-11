const postProject = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to add project: ${response.statusText}`);
  }
  return response.json();
};

export default postProject;
