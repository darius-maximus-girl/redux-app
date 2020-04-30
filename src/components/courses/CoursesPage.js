import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

const CoursesPage = ({ courses, createCourse }) => {

    const [course, setCourse] = useState({
        title: ""
    })

    useEffect(() => {
        console.log(course)
    }, [course])

    const handleChange = (e) => {
        setCourse({ ...course, title: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createCourse(course);
        setCourse({ ...course, title: '' })
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={(e) => handleChange(e)} value={course.title} />
                <input type="submit" />
            </form>

            <ul>
                {courses.map(course => (
                    <li key={course.title}>{course.title}</li>
                ))}
            </ul>
        </div>
    );
};

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCourse: course => dispatch(courseActions.createCourse(course))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CoursesPage);