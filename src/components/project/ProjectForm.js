import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
function ProjectForm({btnText}){
    return(
        <form className={styles.form}>
            <div>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
            </div>
            <div>
            <Input type= "number" text="Orçamento do projeto" name="bugget" placeholder="Insira o orçamento total"/>
            
            </div>
            
            <Select name="category_id" text="selecione uma categoria."/>
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm