import React from 'react';
import { Redirect } from 'react-router-dom'
import ScaleLoader from 'react-spinners/ScaleLoader';

class AdminLogin extends React.Component {
  constructor() {
    super()
    
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      isLoading: true
    }

    this.testEmail = "admin@tigerpool.com"
    this.testPassword = "admin123"
    this.emailValidator = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}'
  }

 handleSubmit(e) {
    e.preventDefault();
    if (RegExp(this.emailValidator).test(this.state.email)){
      if (this.state.email === this.testEmail && this.state.password === this.testPassword){
        this.setState({
          isLoggedIn: true
        });
      }
      else {
        alert("Submit clicked, but email is invalid")
      }
    }
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
       [e.target.name] : e.target.value,
    });
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2600)
  }
  
  
  render() {
    
    const { isLoggedIn } = this.state
    if ( isLoggedIn === true) {
      return <Redirect to="/admindash" />
    }
    
    const { isLoading } = this.state

    return (
      <div className="admin-login-container">
        {isLoading ? (
          <div className="loading">
            <ScaleLoader 
              sizeUnit={"px"}
              width={25}
              height={150}
              radius={15}
              margin={'3px'}
              color={'#E97305'}
            />
            <h3>Loading Tigerpool...</h3>
          </div>
        ) : (
          <div className="upcoming_trips_component">
            <div className="jumbotron">
              <h1 className="display-4 text-center">Admin Login</h1>
            </div>
            <form className="w-50 m-3 mx-auto" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input name="email" value={this.state.email} onChange={this.handleChange.bind(this)} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input name="password" value={this.state.password} onChange={this.handleChange.bind(this)} type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default AdminLogin;