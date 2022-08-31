import styles from './Container.module.css'


function Container(props){
    //Aplico no container, apenas as class que vem por props
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
        
    )
}
export default Container