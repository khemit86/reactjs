import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
            </ul>
            {this.props.children}
         </div>
      )
   }
}
//export default App;

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}
//export default Home;

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}
//export default About;

class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}
//export default Contact;

export  {
	App,
	Home, 
	About, 
	Contact
}
/* export App;
export Home; */
/* export About;
export Contact; */

