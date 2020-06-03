import React, { Component } from 'react'
import {connect} from "react-redux"
import {BrowserRouter,Route,Link} from "react-router-dom"
import AddTask from './AddTask'
import MyTasks from './MyTasks'
import showData from "../store/profile/action"




class Profile extends Component {
    constructor(props) {
        super(props)           
    }
    componentDidMount(){
            
        if(Object.keys(this.props.data.user).length === 0){
            this.props.history.push('/login')
        }
    }
    
    logout(){
        this.props.showData("logout")
        this.props.history.push('/login')
    }
    render() {
        return (
            <BrowserRouter>

            <div>
                <h1>Profile</h1>
                <button onClick = {this.logout.bind(this)} className="btn btn-danger">Logout</button>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            {
                                
                                Object.keys(this.props.data.user).map((a,i)=>{
                                    return(
                                        <th key={i}>
                                            {a}
                                        </th>

                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                    <tr>

                    {
                        Object.values(this.props.data.user).map((a,i)=>{
                            return(
                                <td key={i}>
                                    {a}
                                </td>

                            )
                        })

                    }
                    </tr>

                    </tbody>
                </table>

                <Link className="btn btn-info"  to="/profile/addtask">Add Task</Link>
                <Link className="btn btn-success" to="/profile/mytask" >My Task</Link>
                <Route path ="/profile/addtask" component= {AddTask} />
                <Route path ="/profile/mytask" component= {MyTasks} />
            </div>
            </BrowserRouter>

        )
    }
}
function mapstatetoprops(state) {
    return{
        data:state.profileReducer
    }
    
}
function mapdispatchtoprops(){
    return {
        showData
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops())(Profile)

