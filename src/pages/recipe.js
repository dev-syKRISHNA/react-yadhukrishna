import style from '@/styles/recipe.module.css'
import Input from '@/Components/input.js'
import RecipeCard from '@/Components/recipeCard'
import { useState } from 'react'

const recipes = [
    {
    title: 'Gobi Manchurian', 
    image:"/images/GobiManchurian.jpg", 
    description:"adacsvCulpa tempor veniam eiusmod ullamco cupidatat irure eu minim aliqua duis commodo minim excepteur tempor. Aliqua non consent ut labore do. Laborum dolor cillum amet dolore est id anim occaecat veniam duis ex. Irure cupidatat commodo esse proident laboris. Ipsum nisi cillum ex sint sit velit elit. Ex minim qui adipisicing culpa consequat proident aute aliquip dolore.Ex occaecat enim aliqua laborum. Tempor qui in consequat magna deserunt. Cillum commodo dolore do occaecat incididunt anim occaecat occaecat anim. Aute est consectetur minim occaecat et dolor velit. Eu sunt deserunt fugiat eiusmod. Ea excepteur irure laborum dolor duis ut magna. Dolore ad pariatur dolore consequat est ea pariatur aute ipsum mollit enim incididunt culpa ex.dvsdv"
    },
    {
        title: 'Mixed Veg Curry', 
        image:"/images/mixvegcurry.jpg", 
        description:'Ad Mollit sunt nostrud excepteur fugiat dolor et et enim aute ad veniam consequat elit irure. Dolore aute aute eu nostrud nisi cillum deserunt magna. Nisi exercitation do nulla qui esse occaecat exercitation do elit. dolor adipisicing quis.'
    },
    {
        title: 'Paneer Tikka', 
        image:"/images/PannerTikka.jpg", 
        description:'Do adipisicing aute dolore nostrud tempor minim. Deserunt eiusmod eiusmod do ea incididunt cupidatat veniam deserunt. Consequat occaecat aute cupidatat cillum nisi. Magna voluptate minim velit laboris enim eiusmod nisi eiusmod. Non sint dolor aliqua sunt nostrud minim eiusmod consequat Lorem sint. Id adipisicing sint velit aliqua sint do mollit in. Nulla sint esse sunt ea non dolore laboris id ullamco excepteur amet aliquip consequat.'
    }

]
const Recipe =() =>{

    const[recipe,setRecipe]=useState(recipes)
    const [value,setValue] = useState("")

    const onHandleChange =(e) =>{
        setValue(e.target.value)
        const searchedRecipe = recipes.filter(r=>r.title == value)
        setRecipe(searchedRecipe)
    }

    return (
    <div className={style.recipeContainer}>
        <h1>Find Your Recipe</h1>
        <Input onHandleChange={onHandleChange}/>
        <div className={style.recipeCardContainer}>
            {recipe.map(r =>(
                <RecipeCard recipe={r} />
            )) }
        </div>
    </div>
    )

}

export default Recipe