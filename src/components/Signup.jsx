import React, { Component } from 'react'
import {connect} from "react-redux"
import changeData from '../store/signup/action'
import Axios from "axios"

class Signup extends Component {
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
    save(){
        this.state.error=""
        let userInfo=this.props.userData
        for(let i in userInfo){
            if(userInfo[i]===""){
                this.state.error="Please fill in all fields"
                this.setState({})

            }
        }
        if (this.state.error==="") {
            Axios.post("http://localhost:4000/signup",{user:userInfo})
            .then(r=>{
                // this.props.history.replace("/login")
                this.props.history.push("/login")

                // console.log(r.data);
            })
        }
        
    }
    render() {
        return (
            <div>
                <h4 className="text-danger ">{this.state.error}</h4>
                <div className="w-25 mx-auto alert-primary p-3">
                    <h1 className="text-center">Singup here!</h1>
                    Name:<input data-id="changeName" onChange={this.change.bind(this)}  value ={this.props.userData.name} type="text" className="form-control" />
                    Email:<input  data-id="changeEmail" onChange={this.change.bind(this)} value ={this.props.userData.email} type="email" className="form-control" />
                    Password:<input  data-id="changePassword"  onChange={this.change.bind(this)} value ={this.props.userData.password} type="password"  className="form-control" />
                    <button onClick={this.save.bind(this)}  className="btn btn-primary" >Save</button>
                </div>
            </div>
        )
    }
}

function mapstatetoprops(state) {
    return{
        userData:state.signupReducer
    }
    
}
function mapdispatchtoprops() {
    return{
        changeData

    }
    
}
export default connect(mapstatetoprops,mapdispatchtoprops())(Signup)
