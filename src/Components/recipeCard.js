import styles from "./recipeCard.module.css"

const RecipeCard =(props)=>{
    return (
        <div className={styles.recipeCard}>
        <img className={styles.recipeImg} src={props.recipe.image}/>
        <h2 className={styles.recipeHeading}>{props.recipe.title}</h2>
        <p className={styles.recipeDescription}>{props.recipe.description}</p>
    </div>
    )
}

export default RecipeCard   