import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifAplication = () => {

    const [categories, setCategories] = useState([ 'Mario bross' ]);

    const onAddCategory = (newCategory) =>{

        if( categories.includes(newCategory) ) return;
       
        setCategories([newCategory, ...categories ]);
    }

  return (
    <>
        {/*Titulo */}
        <h1>GifAplication</h1>

        <AddCategory
              // setCategories={setCategories}
              onNewCategory={(value) => onAddCategory(value)}
        />

           
            {
                categories.map( ( category ) => (
                <GifGrid key={ category }
                category={ category }/>
                
            ))
        }
       
    </>
  )
}


