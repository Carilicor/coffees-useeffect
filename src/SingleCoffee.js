import { useState } from "react"

export default function SingleCoffee({entireObject}) {
    const [favorite, setFavorite] = useState(false)
    let favoriteTest = false
    // const exampleProps = {
    //     description: 'yummy',
    //     name: 'Cafe Cubano',
    //     price: 'Mucho Mula',
    // }
    // const description = exampleProps.description  --longer version
    // const name = exampleProps.name
    // const price = exampleProps.price
    
    //const {description, name, price} = exampleProps //destructuring 

    
    //console.log('pros-here', name)
    return(
        
        //   <div className="menu-items__item" style={{backgroundColor: favorite ? 'red' : 'white'}}>
          <div className="menu-items__item" style={{backgroundColor: favoriteTest ? 'red' : 'white'}}>
            <img src={entireObject.image} 
              alt="" />
            <div>
              <h3>{entireObject.name}</h3>
              <span>{entireObject.price}</span>
                <p>{entireObject.description}</p>
             {/* <button onClick={() => setFavorite(true)}>Favorite</button> */}
             <button onClick={() => (favoriteTest = true)}>Favorite</button>
            </div>
          </div>
          
        
    )
}