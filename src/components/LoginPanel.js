import React from 'react';
import { Link } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

class LoginPanel extends React.Component {
    constructor() {
        super()
        
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2600)
    }
    
    render() {
        
        const { isLoading } = this.state
        
        return (
            <div>
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
                    <div class="login-container">
                        <div className="spacer" />

                        <img className="login-element" src={"car.png"}></img>


                        <div className="login-element">
                            <Link to="/home" className="btn btn-dark btn-lg login-element px-4">
                                RIT Student Login
                            </Link>
                        </div>
                        <div className="login-element">
                            <Link to="/adminlogin" className="btn btn-dark btn-md">
                                Admin Login
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default LoginPanel; 