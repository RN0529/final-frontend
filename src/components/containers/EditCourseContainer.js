import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCourseView from '../views/EditCourseView';
import { editCourseThunk } from '../../store/thunks';


class EditCourseContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: "", 
          timeslot: "",
          location: "", 
          instructorId: null, 
          redirect: false, 
          id: this.props.match.params.id,
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        if(this.state.title == '' || this.state.timeslot == '')
        {
            alert('title and/or timeslot cannot be empty');
            return;
        }
        let course = {
            title: this.state.title,
            timeslot: this.state.timeslot,
            location: this.state.location,
            instructorId: this.state.instructorId,
            id: this.state.id,
        };
        
        let editCourse = await this.props.editCourse(course);

        this.setState({
          title: this.state.title,
          timeslot: this.state.timeslot,
          location: this.state.location,
          instructorId: null, 
          redirect: true, 
          id: this.state.id,
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/courses/${this.state.id}`}/>)
        }
        return (
          <EditCourseView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}
            course={this.props.course}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        editCourse: (course) => dispatch(editCourseThunk(course)),
    })
}

export default connect(null, mapDispatch)(EditCourseContainer);