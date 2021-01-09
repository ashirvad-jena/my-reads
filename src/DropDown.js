import React, { Component } from "react";
import PropTypes from "prop-types";

class DropDown extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.shelfId,
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange = (event) => {
		// this.props.onSelected(event.target.value);
		console.log(event);
	};

	render() {
		return (
			<div className="book-shelf-changer">
				<select value={this.state.value} onChange={this.onChange}>
					<option value="move" disabled>
						Move to...
					</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		);
	}
}

DropDown.propTypes = {
	shelfId: PropTypes.string.isRequired,
	onSelected: PropTypes.func,
};

export default DropDown;
