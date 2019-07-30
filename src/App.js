import React, { Component } from 'react';



class App extends Component {
	
	
	 render() {

    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>My Students</h1>
        {this.state.students.map((student) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{student.firstname} {student.surname} [{student.email} {student.cell} {student.photo}]</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { student.completed &&
                <span>
                Stage 3
                </span>
              }
              { !student.completed &&
                <span>
                  Stage 1
                </span>
              }              
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
	
	
	
	
  state = {
    students: []
  }
  componentDidMount() {
    fetch('http://localhost/slimphpapp/public/index.php/api/students')
    .then(res => res.json())
    .then((data) => {
      this.setState({ students: data })
      console.log(this.state.students)
    })
    .catch(console.log)
  }
  // [...]
}
export default App;