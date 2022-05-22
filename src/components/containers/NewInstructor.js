import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewInstructorView from '../views/NewInstructorView';
import { addInstructorThunk } from '../../store/thunks';


class NewInstructor extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          department: "",
          instructorId: null, 
          redirect: false, 
          redirectId: null

        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let instructor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            lastname: this.state.department,
            
        };
        
        let newinstructor = await this.props.addInstructor(instructor);

        this.setState({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            lastname: this.state.department,
            redirect: true, 
            redirectId: newinstructor.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single course view of newly created course
      
    return (
        <h1>helo</h1>
    );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addInstructor: (instructor) => dispatch(addInstructorThunk(instructor)),
    })
}

export default connect(null, mapDispatch)(NewInstructor);