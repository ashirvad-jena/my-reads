import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
		};
		this.onTextChange = this.onTextChange.bind(this);
	}

	onTextChange(event) {
		const query = event.target.value;
		this.setState({ query: query }, () => {
			this.props.onTextChange(query);
		});
	}

	render() {
		return (
			<div className="search-books-input-wrapper">
				<input
					type="text"
					value={this.state.query}
					onChange={this.onTextChange}
					placeholder="Search by title or author"
				/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	onTextChange: PropTypes.func,
};

export default SearchBar;
