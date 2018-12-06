"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
 
var Footer = React.createClass({
	render: function () {
		return (
            <div className="container-fluid footer">
                <span>
                    cortesdev@2018 Pluralsight
                </span>
            </div>
        ); 
	}
});

module.exports = Footer;