import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
function ProjectForm({ handleSubmit, btnText, projectData}){
    const [categories, setCategories] =useState([])
    const [project, setProject] = useState(projectData || {})
    useEffect(() =>{
        fetch("http://localhost:5000/categories",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setCategories(data)
    })
    .catch((err)=> console.log(err))
    //o FETCH busca da onde vem essa URL
    }, [])

    const submit =(e) =>{
        e.preventDefault()
        handleSubmit(project)
    }
    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value})
        
    }

    function handleCategory(e){
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text, 
        }
        
        })   
    }


  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}     
      />
      <Select name="category_id" text="selecione uma categoria." options={categories} handleOnChange={handleCategory}
            value={project.category ? project.category.id: ''}/>
            <SubmitButton text={btnText} />
    </form>
  )
}

export default ProjectForm





/*import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
function ProjectForm({ handleSubmit, btnText, projectData}){
    const [categories, setCategories] =useState([])
    const [project, setProject] = useState(projectData || {})
    useEffect(() =>{
        fetch("http://localhost:5000/categories",{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setCategories(data)
    })
    .catch((err)=> console.log(err))
    //o FETCH busca da onde vem essa URL
    }, [])

    const submit =(e) =>{
        e.preventDefault()
        handleSubmit(project)
    }
    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value})
        
    }

    function handleCategory(e){
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text, 
        }
        
        })   
    }


    return(
        <form onSubmit={submit} className={styles.form}>
            <div>
            <Input type="text" text="Nome do projeto" name="name" placeholder ="Insira o nome do projeto" handleOnChange={handleChange}
            value={projectData.name ? project.name: ''}/>
            </div>
            <div>
            <Input type= "number" text="Orçamento do projeto" name="bugget" placeholder="Insira o orçamento total" handleOnChange={handleChange}
            value={projectData.budget ? project.budget: ''}/>
            </div>
            
            <Select name="category_id" text="selecione uma categoria." options={categories} handleOnChange={handleCategory}
            value={project.category ? project.category.id: ''}/>
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm*/