import { Link } from "react-router-dom";

const AllCoursesView = (props) => {
  let {courses, deleteCourse} = props;
  //courses = [{id: 300, title: "hello"}]
  if (!courses.length) {
    return (
    <div>
      <Link to={`/`}>
            <h1>HomePage</h1>
          </Link>
      <p>There are no courses.</p>
      <Link to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div>
      <Link to={`/`}>
            <h1>HomePage</h1>
          </Link>
      {courses.map((course) => {
        let title = course.title;
        return (
          <div key={course.id}>
          <Link to={`/course/${course.id}`}>
            <h1>{title}</h1>
          </Link>
          <button onClick={() => deleteCourse(course.id)}>X</button>
          </div>
        );
      }
      )}
      <Link to={`/newcourse`}>
        <button>Add New Course</button>
      </Link>
    </div>
  );
};


export default AllCoursesView;