import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { editInstructor } from "../../store/actions/actionCreators";

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
          <Link to={`/instructors/${instructor.id}`}>
            <h1>{name}</h1>
          </Link>
          <p>{instructor.department}</p>
          <img src={instructor.imageUrl} alt='no available picture'></img>
          <br></br>
          {/* make this on click have a delete course functionality */}
          <button onClick={() => deleteInstructor(instructor.id)}>X</button>
          <Link to={`/editinstructor/${instructor.id}`}>
          <button onClick={() => editInstructor(instructor.id)}>Edit Instructor</button>
          </Link>
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