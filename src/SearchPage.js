import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class SearchPage extends Component {
	render() {
		const {
			books,
			searchBooks,
			onClose,
			onTextChange,
			onSelected,
		} = this.props;
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/">
						<button className="close-search" onClick={onClose}>
							Close
						</button>
					</Link>
					<SearchBar onTextChange={onTextChange} />
				</div>
				<SearchResult
					books={books}
					searchBooks={searchBooks}
					onSelected={onSelected}
				/>
			</div>
		);
	}
}

SearchPage.propTypes = {
	books: PropTypes.array,
	searchBooks: PropTypes.array,
	onClose: PropTypes.func,
	onTextChange: PropTypes.func,
	onSelected: PropTypes.func,
};

export default SearchPage;
