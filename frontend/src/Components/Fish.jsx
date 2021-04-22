import React from 'react';
import { formatPrice } from './Helpers';

class Fish extends React.Component {

//A function that onclick add a fish to order
	handleClick = () => {
		this.props.addToOrder(this.props.index)
	}

	render() {
		const { image, name, price, desc, status } = this.props.details;
		const isAvailable = status === 'available';
		return (
			<li className="menu-fish">
				<img src={image} alt={name} />
				<h3 className="fish-name">{name} <span>{formatPrice(price)}</span></h3>
				<p className="description">{desc}</p>
				<button disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? 'Add To Cart' : 'Sold Out'}</button>
			</li>
		);
	}
}

export default Fish;