import React from 'react';
import InnerCarousel from '../InnerCarousel';

class Carousel extends React.Component {

    render() {

        console.log (this.props.products)
        return(

            <div>
                <h2>Totoros</h2>
                <InnerCarousel products={this.props.products} />
            </div>
        )
    }
}

export default Carousel;