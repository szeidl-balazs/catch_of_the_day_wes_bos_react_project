import React from 'react';
import { formatPrice } from './Helpers';

class Order extends React.Component {		

	render () {

		//identify orders
		const orderIds = Object.keys(this.props.order);

		//looping through the orders and calculate the total value count * fish.price
		const total = orderIds.reduce((prevTotal, key) => {
			//which fish ordered
			const fish = this.props.fishes[key];

			//how many fish ordered
			const count = this.props.order[key];

			//fish exists and available
			const isAvailable = fish && fish.status === 'available';

			if (isAvailable) {
				return prevTotal + (count * fish.price);
			} else {
				return prevTotal;
			}
		}, 0);

		return (
			<div className="order-wrap">
				<h2>Order</h2>
				<ul className="order">
					{
						orderIds.map(key => {
						
						//which fish ordered
						const fish = this.props.fishes[key];

						//how many fish ordered
						const count = this.props.order[key];

						//fish is available?
						const isAvailable = fish.status === 'available';

						//if a fish is not available => error else show fish name & order value

						if (!isAvailable) {
							return <li key={key}>{`Sorry ${fish ? fish.name : 'fish'} recently is not available`}</li>
						} else {
							return <li key={key}>{`${count} lbs ${fish.name} ${formatPrice(count * fish.price)}`}</li>
						}

						})
					}
				</ul>				
				<h3 className="total">{`Total: ${formatPrice(total)}`}</h3>
			</div>
		);
	}
}

export default Order;

	//reduce the code within render
	
	/*renderOrder = (key) => {
		//which fish ordered
		const fish = this.props.fishes[key];

		//how many fish ordered
		const count = this.props.order[key];

		//fish is available?
		const isAvailable = fish.status === 'available';

		if (!isAvailable) {
			return <li key={key}>{`Sorry ${fish ? fish.name : 'fish'} recently is not available`}</li>
		} else {
			return <li key={key}>{`${count} lbs ${fish.name} ${formatPrice(count * fish.price)}`}</li>
		}
	}*/


/*in the return

<ul className="order">{orderIds.map(this.renderOrder)}</ul>	
*/