import React from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends React.Component{
    render(){

        const {userData} = this.props;
        console.log(userData);

        return(
            <>  
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3>Detail</h3>
                            </div>
                            <div className="card-body">
				                <form>
                                    <div>
                                        <label>Name</label>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-user"></i></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Email"/>
                                        </div>
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

const mapStateToProps = (state) => ({
    userData: state.userReducer.userData,
});

const mapDispatchToProps = (dispatch) => ({
	// addUserData: (user) => dispatch(addUserData(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);