import React, { Component } from "react";

const DropDown = () => {
	return (
		<div className="book-shelf-changer">
			<select>
				<option value="move" disabled>
					Move to...
				</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead" selected>
					Want to Read
				</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);
};

export default DropDown;
