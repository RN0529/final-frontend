import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  InstructorContainer,
  CourseContainer,
  AllInstructorsContainer,
  AllCoursesContainer,
  NewCourseContainer,
  EditInstructorContainer,
  

} from './components/containers';



// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those
// components here
import NewInstructorContainerTest from './components/containers/NewInstructorContainerTest' 
const App = () => {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/instructors" component={AllInstructorsContainer} />
        <Route exact path="/instructors/:id" component={InstructorContainer} />
        <Route exact path="/courses" component={AllCoursesContainer} />
        <Route exact path="/newcourse" component={NewCourseContainer} />
        <Route exact path="/newinstructor" component={NewInstructorContainerTest} />
        <Route exact path="/courses/:id" component={CourseContainer} />
        <Route exact path="/editinstructor/:id" component={EditInstructorContainer} />
        {/* <Route exact path="/editcourse/:id" component={EditCourseContainer} /> */}

      </Switch>        
    </div>
  );
}

export default App;

