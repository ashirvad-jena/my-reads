import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./SearchPage";
import ShelvesContainer from "./ShelvesContainer";

/* // Uncomment to test with static values
const shelves = {
	"Currently Reading": [
		{
			id: 0,
			title: "To Kill a Mockingbird",
			author: "Harper Lee",
			imageUrl:
				"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
		},
		{
			id: 1,
			title: "Ender's Game",
			author: "Orson Scott Card",
			imageUrl:
				"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
		},
	],
	"Want to read": [
		{
			id: 2,
			title: "1776",
			author: "David McCullough",
			imageUrl:
				"http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
		},
		{
			id: 3,
			title: "Harry Potter and the Sorcerer's Stone",
			author: "J.K. Rowling",
			imageUrl:
				"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
		},
	],
	Read: [
		{
			id: 4,
			title: "The Hobbit",
			author: "J.R.R. Tolkien",
			imageUrl:
				"http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
		},
		{
			id: 5,
			title: "Oh, the Places You'll Go!",
			author: "Seuss",
			imageUrl:
				"http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
		},
		{
			id: 6,
			title: "The Adventures of Tom Sawyer",
			author: "Mark Twain",
			imageUrl:
				"http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
		},
	],
};
*/

const shelves = [
	{ id: "currentlyReading", name: "Currently Reading" },
	{ id: "wantToRead", name: "Want to Read" },
	{ id: "read", name: "Read" },
];

class BooksApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			searchBooks: [],
		};
		this.fetchAllBooks = this.fetchAllBooks.bind(this);
		this.parseResponse = this.parseResponse.bind(this);
		this.onSelected = this.onSelected.bind(this);
		this.onClose = this.onClose.bind(this);
		this.onTextChange = this.onTextChange.bind(this);
	}

	componentDidMount() {
		this.fetchAllBooks();
	}

	fetchAllBooks() {
		BooksAPI.getAll().then((data) => {
			const books = this.parseResponse(data);
			this.setState({
				books: books,
			});
		});
	}

	parseResponse(response) {
		console.log(response);
		const result = response.map((object) => {
			return {
				id: object.id,
				title: object.title,
				author: object.authors ? object.authors.join(", ") : "Unnamed",
				imageUrl: `url(${
					object.imageLinks
						? object.imageLinks.thumbnail
						: "book-pack.svg"
				})`,
				shelfId: object.shelf,
			};
		});
		return result;
	}

	onSelected(toShelfId, book) {
		// Remove the book from library if selected none.
		if (toShelfId === "none") {
			this.setState((previousState) => ({
				books: previousState.books.filter(
					(oldBook) => book.id !== oldBook.id
				),
			}));
		}
		// Update the server the selection. Send the 'none' too, as on refresh same shouldn't re-appear
		BooksAPI.update(book, toShelfId).then((response) => {
			this.fetchAllBooks();
		});
	}

	onClose = () => {
		this.setState({
			searchBooks: [],
		});
	};

	onTextChange = (query) => {
		if (query.length === 0) {
			this.setState({ searchBooks: [] });
			return;
		}
		BooksAPI.search(query).then((response) => {
			const books = this.parseResponse(response);
			this.setState({ searchBooks: books });
		});
	};

	render() {
		return (
			<div className="app">
				<Route exact path="/">
					<ShelvesContainer
						books={this.state.books}
						shelves={shelves}
						onSelected={this.onSelected}
					/>
				</Route>
				<Route path="/search">
					<SearchPage
						searchBooks={this.state.searchBooks}
						books={this.state.books}
						onSelected={this.onSelected}
						onClose={this.onClose}
						onTextChange={this.onTextChange}
					/>
				</Route>
			</div>
		);
	}
}

export default BooksApp;
