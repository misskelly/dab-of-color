import { getAllProjects, isLoading } from '../../redux/actions';
import fetchAll from '../fetchAll';

const getProjects = (projectUrl, paletteUrl) => {
  return async (dispatch) => {
    try{
      dispatch(isLoading(true))
      const projects = await fetchAll(projectUrl)
      const newPalettes = await fetchAll(paletteUrl)
      dispatch(isLoading(false))
      const cleanProjects = projects.map( project => {
        return {id: project.id, 
                name:project.name, 
                palettes: newPalettes.filter( palette => {
                  return palette.project_id === project.id})}
      })
      dispatch(getAllProjects(cleanProjects))
    } catch (error) {
      // dispatch(hasErrored(error.message))
    }
  }
}

export default getProjects;