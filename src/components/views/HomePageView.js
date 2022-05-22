

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h6>Final Project</h6>
      <h1>Welcome to the Fullstack CRUD Application,</h1>
      <h1>The CUNYFirst Clone</h1>
      <Link to={'/instructors'} > All Instructors </Link>
      <h1> </h1>
      <Link to={'/courses'} > All Courses </Link>
      
    </div>
  );    
}




export default HomePageView;
