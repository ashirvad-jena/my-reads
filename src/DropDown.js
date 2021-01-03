import React, { Component } from "react";
import PropTypes from "prop-types";

class DropDown extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange = (event) => {
		this.props.onSelected(event.target.value);
	};

	render() {
		const { categories } = this.props;
		const options = categories.map((category) => (
			<option
				value={category}
				selected={this.props.defaultSelection === category}
			>
				{category}
			</option>
		));
		return (
			<div className="book-shelf-changer">
				<select onChange={this.onChange}>
					<option value="move" disabled>
						Move to...
					</option>
					{options}
				</select>
			</div>
		);
	}
}

DropDown.propTypes = {
	defaultSelection: PropTypes.string.isRequired,
	categories: PropTypes.array.isRequired,
	onSelected: PropTypes.func,
};

export default DropDown;
