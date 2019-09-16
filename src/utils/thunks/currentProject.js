import postNew from '../apiCalls/postNew';
import getProjects from './getProjects';
import * as actions from '../../redux/actions';

const savePalette = palette =>
  postNew('palettes', palette).then(res => console.log(res));

const cleanPalettes = (palettes, id) => {
  const cleaned = palettes.map(palette => {
    const clean = palette;
    clean.project_id = id;
    savePalette(clean);
    return clean;
  });
  return cleaned;
};

const currentProject = project => async dispatch => {
  try {
    dispatch(actions.isLoading(true));
    const projectBody = { name: project.name };
    const projectId = await postNew('projects', projectBody);
    cleanPalettes(project.palettes, projectId.id);
    const featured = {
      name: project.name,
      id: !project.id ? projectId.id : project.id,
      palettes: project.palettes
    };
    dispatch(getProjects());
    dispatch(actions.setCurrentProject(featured));
    dispatch(actions.isLoading(false));
    // save new unicorn
    // save palette to new unicorn
    // update current project in redux to include current info
    // display current info on dom

    // return actions.setCurrentProject(savedProject);
    // const currentPalettes =
  } catch (error) {
    dispatch(actions.hasErrored(error.message));
  }
};

export default currentProject;
