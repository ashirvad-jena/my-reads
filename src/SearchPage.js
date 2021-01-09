import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "Android",
		};
		this.onTextChange = this.onTextChange.bind(this);
		this.searchBooks = this.searchBooks.bind(this);
	}

	componentDidMount() {
		this.searchBooks();
	}

	searchBooks() {
		console.log(this.state.query);
		BooksAPI.search(this.state.query).then((response) => {
			console.log(response);
		});
	}

	onTextChange(query) {
		console.log(query);
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">
						Close
					</Link>
					<SearchBar onTextChange={this.onTextChange} />
				</div>
				<SearchResult />
			</div>
		);
	}
}

export default SearchPage;
