import React from 'react';
import InnerCarousel from '../InnerCarousel';
import "./styles.scss"

class Carousel extends React.Component {

    render() {
    
        return(

            <div>
                <h2 className="title">{this.props.title}</h2>       
                <InnerCarousel products={this.props.products} />
            </div>
        )
    }
}

export default Carousel;