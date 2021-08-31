import React from 'react';
import Carousel from './components/Carousel';
import "./App.scss"

class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        products: [],
        inputValue: ""
      }

    }
  
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  async handleClick() {
    const searchValue = this.state.inputValue
    const getCarouselData = await fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}&limit=5`);
    const getCarouselDataJson = await getCarouselData.json();

    this.setState ({                       
      products: getCarouselDataJson.results
      
    })
    
  }

   render () {
    return(

      <div className="add">
        <input className="input" type="text" onChange={(e) => this.handleChange(e)} placeholder="ingresa tu busqueda" />
        <button className="button" onClick={() => this.handleClick()}>Buscar</button>
        <Carousel title={this.state.inputValue} products={this.state.products} /> 
      </div>

    )
  }
}

export default App;
