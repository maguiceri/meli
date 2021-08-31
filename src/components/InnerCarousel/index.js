import React from 'react';
import Card from '../Card';
import "./styles.scss"

class InnerCarousel extends React.Component {

    render() {
 
        return(
            <div>
                {this.props.products.map((product, key) => {
                    return(
                        <Card key={key} product={product}/>
                    )
                }
                )}
            </div>
        )
    }

}

export default InnerCarousel;