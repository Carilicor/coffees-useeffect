
import { useState, useEffect } from 'react';
import './App.css';
import SingleCoffee from './SingleCoffee';

function App() {
  const [data, setData] = useState([{ name: 'Colada', price: '40cents' }])
  

  useEffect(() => {
    getCoffee()
  }, [])



  const getCoffee = () => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(res => res.json()) // convert to json
      .then(data => setData(data)) //get formatted data
      .catch(err => console.error(err))

  }

  console.log('my data', data)
  return (
    <div className="App">
      <main>
        <h1>Coffes by Sample API</h1>
        <button onClick={() => getCoffee()}>Get me Coffee</button>
        <div className='menu-items'>
          {data.map(item => {
            console.log('each item', item)
            return <SingleCoffee entireObject={item} />
          })}

          {/* <SingleCoffee name='Black American Coffee' price='$$$$' description='yummy' />
          <SingleCoffee name='Cafe Cubano' price='Mucho Mula' description='so good' />
          <SingleCoffee />
          <SingleCoffee />
          <SingleCoffee />
          <SingleCoffee /> */}

          {/* <div className='menu-items'>
          <div className="menu-items__item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG" 
              alt="" />
            <div>
              <h3>1. Black American Coffee</h3>
              <p>Black coffee is as simple as it gets</p>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}

export default App;
