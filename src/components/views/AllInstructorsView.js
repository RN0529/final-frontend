import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllInstructorsView = (props) => {
  let {deleteInstructor} = props
  if (!props.allInstructors.length) {
    return <div>
      <Link to={`/`}>
            <h1>HomePage</h1>
          </Link>
      There are no instructors.
      <div></div>
      <Link to={`/newinstructor`}>
        <button>Add New Instructor</button>
      </Link>
    </div>;
    
  }

  return (
    <div>
      <Link to={`/`}>
            <h1>HomePage</h1>
          </Link>
      {props.allInstructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id}>
          <Link to={`/instructor/${instructor.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{instructor.department}</p>
          <img src={instructor.imageUrl} alt='no available picture'></img>
          <br></br>
          {/* make this on click have a delete course functionality */}
          <button onClick={() => deleteInstructor(instructor.id)}>X</button>
        </div>
        );

      })}
      <Link to={`/newinstructor`}>
        <button>Add New Instructor</button>
      </Link>
    </div>

    
  );
};

AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};

export default AllInstructorsView;