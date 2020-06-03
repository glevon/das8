import React, { Component } from 'react'
import Axios from "axios"
import {connect} from "react-redux"
import changeData from '../store/login/action'
import showData from '../store/profile/action'


class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error:""
        }
    }

    change(e){
        this.props.changeData(e.target.getAttribute("data-id"), e.target.value)
        // this.props.dispatch({type:e.target.getAttribute("data-id"), value:e.target.value})
    }
    login(){
        this.state.error=""
        let userInfo=this.props.userData
        for(let i in userInfo){
            if(userInfo[i]===""){
                this.state.error="Please fill in all fields"
                this.setState({})

            }
        }
        if (this.state.error==="") {
            Axios.post("http://localhost:4500/login",{table:"user",user:userInfo})
            .then(r=>{
                if (r.data[0]===undefined) {
                    this.state.error="Incorrect input data"
                    this.setState({})
                }
                else{
                    // this.props.history.replace("/Profile", "Name = "+r.data[0].name +" Email = " +r.data[0].email+" Password = "+ r.data[0].password)
                    this.props.showData("save", r.data[0])                    
                    this.props.history.push("/profile")
                }
            })
        }
        
    }
    render() {
        return (
            <div>
                    <h4 className="text-danger text-center">{this.state.error}</h4>
                    <div className="w-25 mx-auto alert-success p-3">
                        <h1 className="text-center">Login</h1>
                        Email:<input  data-id="changeEmail" onChange={this.change.bind(this)} value ={this.props.userData.email} type="email" className="form-control" />
                        Password:<input  data-id="changePassword"  onChange={this.change.bind(this)} value ={this.props.userData.password} type="password"  className="form-control" />
                        <button onClick={this.login.bind(this)}   className="btn btn-primary" >Login</button>
                </div>
            </div>
        )
    }
}
function mapstatetoprops(state) {
    return{
        userData:state.loginReducer
    }
    
}
function mapdispatchtoprops() {
    return{
        changeData,
        showData
    }
    
}
export default connect(mapstatetoprops,mapdispatchtoprops())(Login)
