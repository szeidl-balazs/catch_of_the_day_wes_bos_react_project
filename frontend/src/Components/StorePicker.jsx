import React from 'react';
import { getFunName } from './Helpers';

class StorePicker extends React.Component {


	myInput = React.createRef();

	//make a function to select store
	goToStore = (event) => {
		//stop the form from submitting
		event.preventDefault();
		//get the input value
		const storeName = this.myInput.current.value;
		//change the page to whatever
		this.props.history.push(`/store/${storeName}`)
	};

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input 
					type="text" 
					ref={this.myInput}
					required placeholder="Store Name" 
					defaultValue={getFunName()}					
				/>
				<button type="submit">{`Visit Store \u279c`}</button>
			</form>		
		);
	}
}

export default StorePicker;