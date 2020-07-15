import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div>
            <p>Titulo: {this.props.product.title} </p>
            <p>Precio: {this.props.product.price} </p>
            <img src={this.props.product.thumbnail} />
            </div>
        )
    }
}

export default Card;