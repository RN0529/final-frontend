import { Link } from "react-router-dom";

const CourseView = (props) => {
  const { course } = props;
  return (
    <div>
      <h1>{course.title}</h1>
      
      <h2>Timeslot: {course.timeslot}</h2>
      <h2>Location: {course.location}</h2>
      <h2>Instructor: <Link to={`/instructor/${course.instructorId}`}>
      {course.instructor ? <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>: <h3>staff</h3>}
          </Link></h2>
      
    </div>
  );

};

export default CourseView;