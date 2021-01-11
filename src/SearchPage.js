import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const SearchPage = ({
	books,
	searchBooks,
	onClose,
	onTextChange,
	onSelected,
}) => {
	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link className="close-search" to="/" onClick={onClose}>
					Close
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
};

SearchPage.propTypes = {
	books: PropTypes.array,
	searchBooks: PropTypes.array,
	onClose: PropTypes.func,
	onTextChange: PropTypes.func,
	onSelected: PropTypes.func,
};

export default SearchPage;
