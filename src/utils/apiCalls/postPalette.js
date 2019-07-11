

        const postPalettes = await palettes.forEach(pal => {
          const body = {
            name: pal.name,
            color_1: pal.color1,
            color_2: pal.color1,
            color_3: pal.color1,
            color_4: pal.color1,
            color_5: pal.color1,
            project_id: projectId
          } 
          postProject('palettes', body);

};

const postPalettes = async (palettes) => {
   palettes.forEach(pal => {
        const body = {
          name: pal.name,
          color_1: pal.color1,
          color_2: pal.color1,
          color_3: pal.color1,
          color_4: pal.color1,
          color_5: pal.color1,
          project_id: projectId
        }
        postProject('palettes', body);
  if (!response.ok) {
    throw new Error(`Failed to post: ${response.statusText}`);
  }
  return response.json();
};

export default postProject;
