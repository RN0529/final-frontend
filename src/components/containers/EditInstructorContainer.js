import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditInstructorView from '../views/EditInstructorView';
import { editInstructorThunk } from '../../store/thunks';


class EditInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          department: "",
          imageUrl: "",
          id: this.props.match.params.id, 
          redirect: false, 

        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        if(this.state.firstname == '' || this.state.lastname == '')
        {
          alert('first name and last name fields cannot be empty')
          return;
        }

        let instructor = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            imageUrl: this.state.imageUrl,
            id: this.state.id,
            
        };
        
        let editedInstructor = await this.props.editInstructor(instructor);

        this.setState({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            imageUrl: this.state.imageUrl,
            redirect: true, 
            id: this.state.id,

        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        //go to single course view of newly created course
          if(this.state.redirect) {
            return (<Redirect to={`/instructors/${this.state.id}`}/>)
          }
          return (
            <EditInstructorView 
              handleChange = {this.handleChange} 
              handleSubmit={this.handleSubmit}
              instructor={this.props.instructor}      
            />
          );
      }
}

const mapDispatch = (dispatch) => {
    return({
        editInstructor : (instructor) => dispatch(editInstructorThunk(instructor)),
    })
}

export default connect(null, mapDispatch)(EditInstructorContainer);