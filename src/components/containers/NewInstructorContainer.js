import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewInstructorView from '../views/NewInstructorView';
import { addInstructorThunk } from '../../store/thunks';


class NewInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          department: "",
          imageUrl: "",
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
            
        };
        
        let newinstructor = await this.props.addInstructor(instructor);

        this.setState({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department,
            imageUrl: this.state.imageUrl,
            redirect: true, 
            redirectId: newinstructor.id,
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        //go to single course view of newly created course
          if(this.state.redirect) {
            return (<Redirect to={`/instructors/${this.state.redirectId}`}/>)
          }
          return (
            <NewInstructorView 
              handleChange = {this.handleChange} 
              handleSubmit={this.handleSubmit}      
            />
          );
      }
}

const mapDispatch = (dispatch) => {
    return({
        addInstructor : (instructor) => dispatch(addInstructorThunk(instructor)),
    })
}

export default connect(null, mapDispatch)(NewInstructorContainer);