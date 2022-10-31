export default function SingleCoffee({name, price, description}) {
    
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
        
          <div className="menu-items__item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG" 
              alt="" />
            <div>
              <h3>{name}</h3>
              <span>{price}</span>
                <p>{description}</p>
              <p>Black coffee is as simple as it gets</p>
            </div>
          </div>
          
        
    )
}