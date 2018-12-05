"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function () {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid collapse navbar-collapse">
                    <Link to="app" className="navbar-brand">
                        <img src="images/pluralsight-logo.png" alt="image"/>
                    </Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="app">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="authors">Authors</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
		); 
	}
});

module.exports = Header;