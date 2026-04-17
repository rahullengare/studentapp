import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
     <h3>About Page by Rahul</h3>
      <Link to='/'>go to dashboard</Link>
      <a href='google.com' target='_blank'>Google</a>
    </div>
  );
};

export default About;
