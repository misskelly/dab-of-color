import postNew from '../apiCalls/postNew';
import getProjects from './getProjects';
import * as actions from '../../redux/actions';

export const currentProject = project => async dispatch => {
  try {
    dispatch(actions.isLoading(true));
    const { name, palettes } = project;
    let projectId;
    if (!project.id) {
      const projectBody = { name };
      const newProject = await postNew('projects', projectBody);
      projectId = newProject.id;
    } else {
      projectId = project.id;
    }
    const featured = {
      name,
      id: projectId,
      palettes
    };
    dispatch(getProjects());
    dispatch(actions.setCurrentProject(featured));
    dispatch(actions.isLoading(false));
  } catch (error) {
    dispatch(actions.hasErrored(error.message));
  }
};

export default currentProject;
