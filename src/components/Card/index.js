import React from 'react';
import "./styles.scss"

class Card extends React.Component {
    render() {
        return (
            <div className="card">
            <p className="title">Titulo: {this.props.product.title} </p>
            <p className="price">Precio: {this.props.product.price} </p>
            <img className="img" src={this.props.product.thumbnail} />
            </div>
        )
    }
}

export default Card;