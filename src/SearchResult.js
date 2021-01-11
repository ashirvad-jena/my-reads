import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class SearchResult extends Component {
	render() {
		const updatedBooks = this.props.searchBooks.map((book) => {
			this.props.books.map((b) => {
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
							onSelected={this.props.onSelected}
						/>
					))}
				</ol>
			</div>
		);
	}
}

SearchResult.propTypes = {
	books: PropTypes.array,
	searchBooks: PropTypes.array,
	onSelected: PropTypes.func,
};

export default SearchResult;
