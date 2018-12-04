"use strict";

var React = require('react');

var Header = React.createClass({
	render: function () {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid collapse navbar-collapse">
                    <a href="/" className="navbar-brand">
                        <img src="images/pluralsight-logo.png" alt="image"/>
                    </a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#authors">Authors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#about">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
		); 
	}
});

module.exports = Header;