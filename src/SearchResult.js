import React, { Component } from "react";
import PropTypes from "prop-types";

class SearchResult extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="search-books-results">
				<ol className="books-grid"></ol>
			</div>
		);
	}
}

SearchResult.propTypes = {};

export default SearchResult;
