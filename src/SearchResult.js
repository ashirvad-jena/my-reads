import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const SearchResult = ({ searchBooks, books, onSelected }) => {
	const updatedBooks = searchBooks.map((book) => {
		books.map((b) => {
			if (b.id === book.id) {
				book.shelf = b.shelf;
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
