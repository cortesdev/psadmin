"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
 
var NotFoundPage = React.createClass({
    render: function() {
         return (
            <div>
                <h1>Page Not found</h1>
                <p>Make sure the path is correct</p>
                <Link to="app" className="brn btn-primary btn-lg">Back to home</Link>
            </div>
        );

    }
});

module.exports = NotFoundPage;