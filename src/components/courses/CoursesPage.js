import React, { useState, useEffect } from 'react';

const CoursesPage = () => {

    const [course, setCourse] = useState({
        title: ""
    })

    useEffect(() => {
        console.log(course)
    }, [course])

    const handleChange = (e) => {
        setCourse({ ...course, title: e.target.value });
    }

    return (
        <form>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input type="text" onChange={(e) => handleChange(e)} value={course.title} />
            <input type="submit" />
        </form>
    );
};

export default CoursesPage;