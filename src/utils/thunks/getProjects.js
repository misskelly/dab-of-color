import * as actions from '../../redux/actions';
import { fetchAll } from '../apiCalls/fetchAll';

const getProjects = () => async dispatch => {
  const url = path => `https://unicolors.herokuapp.com/api/v1/${path}`;
  try {
    dispatch(actions.isLoading(true));
    const projects = await fetchAll(url('projects'));
    const newPalettes = await fetchAll(url('palettes'));
    const cleanProjects = projects.map(project => ({
      id: project.id,
      name: project.name,
      palettes: newPalettes.find(palette => palette.project_id === project.id)
    }));
    dispatch(actions.setAllProjects(cleanProjects));
    dispatch(actions.isLoading(false));
  } catch (error) {
    dispatch(actions.hasErrored(error.message));
  }
};

export default getProjects;
