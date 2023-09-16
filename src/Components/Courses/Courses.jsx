import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = ({handleAddToCart}) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-3/4">
            {
                courses.map(course => <Course
                key={course.id}
                course={course}
                handleAddToCart={handleAddToCart}
                ></Course>)
            }
            
        </div>
    );
};

Courses.propTypes = {
    handleAddToCart: PropTypes.func
}

export default Courses;