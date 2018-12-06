"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');

var CourseActions = {
	createCourse: function(course) {
		var newCourse = CourseApi.saveCourse(course);

		//Hey dispatcher, go tell all the stores that an Course was just created.
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_Course,
			course: newCourse
		});
	},

	updateCourse: function(course) {
		var updatedCourse = CourseApi.saveCourse(course);

		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_Course,
			course: updatedCourse
		});
	},

	deleteCourse: function(id) {
		CourseApi.deleteCourse(id);
		//debugger;
		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_Course,
			id: id
		});
	}
};

module.exports = CourseActions;