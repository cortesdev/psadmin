"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var CourseStore = require('../../stores/courseStore');
var CourseActions = require('../../actions/courseActions');
var CourseList = require('./courseList');

 
var CoursePage = React.createClass({
	getInitialState: function() {
		return {
			courses: CourseStore.getAllCourses()
		};
	},

	componentWillMount: function() {
		CourseStore.addChangeListener(this._onChange);
	},

	componentWillunmount: function() {
		CourseStore.removeChangeListener(this._onChange);
	},
	
	_onChange: function() {
		//debugger;
		this.setState({ courses: CourseStore.getAllCourses() });
	},

	render: function() {
		return (
			<div>
				<h1>Courses</h1>
				<Link to="addCourse" className="btn btn-secondary">Add Course</Link>
				<CourseList courses={this.state.course} />
			</div>
		);
	}
});

module.exports = CoursePage;