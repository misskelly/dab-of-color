const updateExisting = async (path, id, body) => {
  const response = await fetch(
    `https://unicolors.herokuapp.com/api/v1/${path}/${id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to update ${path}: ${response.statusText}`);
  }
  return response.json();
};

export default updateExisting;
// export const patchPalette = palette => {
//   const options = {
//     method: 'PATCH',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(palette)
//   };
//   return fetch(
//     'https://palette-picker-dk.herokuapp.com/api/v1/palettes',
//     options
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response);
//       } else {
//         return response.json();
//       }
//     })
//     .catch(error => Error('Error editing palette'));
// };

// export const deleteProject = project => {
//   const options = {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };
//   return fetch(
//     `https://palette-picker-dk.herokuapp.com/api/v1/projects/${project.id}`,
//     options
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response);
//       } else {
//         return response.json();
//       }
//     })
//     .catch(error => Error(`Error deleting palettes: ${error}`));
// };

// export const deletePalette = palette => {
//   const options = {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };
//   return fetch(
//     `https://palette-picker-dk.herokuapp.com/api/v1/palettes/${palette.id}`,
//     options
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response);
//       } else {
//         return response.json();
//       }
//     })
//     .catch(error => Error(`Error deleting palettes: ${error}`));
// };
