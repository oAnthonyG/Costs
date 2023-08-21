import { useParams } from 'react-router-dom';
import styles from './Project.module.css';
import { useEffect, useState } from 'react';

import Loading from '../layouts/Loading';

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    setTimeout(() =>{
      fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data)
      })
      .catch((err) => console.log(err))
    }, 500)
  }, [id])

  return (
    <>
      {project.name ? (<p>{project.name}</p>) : (
        <Loading />
      )}
    </>
  )
}

export default Project;