import React from 'react';
import Carousel from './components/Carousel';

class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        products: []
      }

    }

  async componentDidMount() {

    const getCarouselData = await fetch ('https://api.mercadolibre.com/sites/MLA/search?q=BUSQUEDA&limit=5');
    const getCarouselDataJson = await getCarouselData.json();

    this.setState ({ //ASINCRONICO
      products: getCarouselDataJson.results
    })

    //const getCarouselDataJson = getCarouselData.json();

    //console.log (getCarouselDataJson)
  }

   render () {
    console.log(this.state.products)

    //title
    //thumbnail imagen chica
    //price

    return(

      <div>
        <Carousel products={this.state.products} /> 
      </div>

    )
  }
}

export default App;
