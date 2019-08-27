import React from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class Login extends React.Component{


    onSubmit = () => {
        this.props.history.push('/dashboard');
    }

    render(){

        const responseFacebook = (response) => {
            console.log(response);
        }

        return(
            <>  
                <Header location={this.props.location}/>
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header row">
                                <div className="col">
                                    <h3>Sign In</h3>     
                                </div>
                                <div className="col justify-content-end social_icon" style={{textAlign: 'end'}}>
                                    <span>
                                        <i className="fa fa-facebook-square"></i>
                                            {/* <FacebookLogin
                                                appId="2171782856414546" 
                                                autoLoad={true}
                                                fields="name,email,picture"
                                                callback={responseFacebook}
                                                render={renderProps => (
                                                    <button onClick={renderProps.onClick}>This is my custom FB button</button>
                                                  )}
                                            /> */}
                                        
                                    </span>
                                    <span><i className="fa fa-google"></i></span>
                                </div>
                            </div>
                            <div className="card-body">
				                <form onSubmit={this.onSubmit}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="password"/>
                                    </div>
                                    <div className="row align-items-center remember">
                                        <input type="checkbox" />Remember Me
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Login" className="btn float-right login_btn" />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer" style={{color: '#fff'}}><Link to="/register">Don't have account?</Link></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;