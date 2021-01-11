import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const SearchResult = ({ searchBooks, books, onSelected }) => {
	// This is to mark the searched books already in the list with the correct category.
	const updatedBooks = searchBooks.map((book) => {
		books.map((b) => {
			if (b.id === book.id) {
				book.shelfId = b.shelfId;
			}
			return b;
		});
		return book;
	});
	return (
		<div className="search-books-results">
			<ol className="books-grid">
				{updatedBooks.map((book) => (
					<Book
						key={book.id}
						book={book}
						shelfId={book.shelfId ? book.shelfId : "none"}
						onSelected={onSelected}
					/>
				))}
			</ol>
		</div>
	);
};

SearchResult.propTypes = {
	books: PropTypes.array,
	searchBooks: PropTypes.array,
	onSelected: PropTypes.func,
};

export default SearchResult;
