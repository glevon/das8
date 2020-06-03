import React, { Component } from 'react'
import {connect} from "react-redux"
import Axios from 'axios'
import myTasks from '../store/mytasks/action'


class MyTasks extends Component {
    componentDidMount(){
        if(Object.keys(this.props.userData.user).length == 0){
            this.props.history.push('/login')
        }
        Axios.post("http://localhost:4500/tasks",{table:"tasks",data:{user_id:this.props.userData.user.id}})
        .then(r=>{
            this.props.myTasks("addtasks", r.data)

            
        })
    }
    delete(t_id){
        Axios.post("http://localhost:4500/delete", {table:"tasks", id:t_id})
        .then(r=>{
            console.log(r.data);
            this.componentDidMount();
            this.setState({});
        })

    }
    check(t_id,st){
        Axios.post("http://localhost:4500/changeStatus", {table:"tasks",id:t_id, data:{status:st}})
        .then(r=>{
            console.log(r.data);
            this.componentDidMount();
            this.setState({});
        })
        // console.log(t_id,st);
        

    }
    
    render() {
        return (
            <div>
                <h1>My Tasks</h1>
                {/* {console.log(this.props.tasksData.tasks)} */}
                {/* {console.log(this.props.tasksData.tasks[0])} */}
                {/* {console.log(this.props.tasksData.tasks[0].id)} */}
                {/* {console.log(Object(this.props.tasksData.tasks[0]).id)} */}

                
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {
                                Object.keys(Object(this.props.tasksData.tasks[0])).map((a,i)=>(
                                        <th key={i}>
                                            {a}
                                        </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                    {
                            Object(this.props.tasksData.tasks).map((a,i)=>(
                                <tr key={i} style={a.status?{textDecorationLine:"line-through"}:{textDecorationLine:"none"}}>
                                    {                                    
                                        Object.values(a).map((item,index)=>(
                                            <td key={index}>
                                                {item}
                                            </td>
                                        ))
                                    }
                                    <td>
                                        <input onClick={this.check.bind(this,a.id,1-a.status)} type="checkbox"  checked={a.status} className="form-check-input" value=""></input>
                                    </td>
                                    <td>
                                        <button onClick={this.delete.bind(this,a.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
function mapstatetoprops(state) {
    return{
        userData:state.profileReducer,
        tasksData:state.myTaskReducer,
    }
    
}
function mapdispatchtoprops() {
    return{
        myTasks,
    }  
}

export default connect(mapstatetoprops,mapdispatchtoprops())(MyTasks)
