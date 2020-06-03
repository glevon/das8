import React, { Component } from 'react'
import {connect} from "react-redux"
import Axios from 'axios'
import myTasks from '../store/mytasks/action'


class MyTasks extends Component {
    constructor(props) {
        super(props)   
        Axios.post("http://localhost:4500/tasks",{table:"tasks",data:{user_id:this.props.userData.user.id}})
        .then(r=>{
            this.props.myTasks("addtasks", r.data)
            
        })
        
    }
    componentDidMount(){
        if(Object.keys(this.props.userData.user).length == 0){
            this.props.history.push('/login')
        }
    }
    delete(){

    }
    
    render() {
        return (
            <div>
                <h1>My Tasks</h1>
                {/* {console.log(this.props.tasksData.tasks)} */}
                {/* {console.log(this.props.tasksData.tasks[0])} */}
                {/* {console.log(this.props.tasksData.tasks[0].id)} */}
                {console.log(Object(this.props.tasksData.tasks[0]).id)}

                {/* {console.log(Object.keys(this.props.tasksData.tasks[0]))} */}

                }

                {/* {this.props.tasksData.tasks.map((a,i)=>{
                    return(
                        console.log(Object.keys(a))

                    )

                })} */}
                
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
                    
                    <tr>

                    {
                        Object.values(Object(this.props.tasksData.tasks[0])).map((a,i)=>(
                                <td key={i}>
                                    {a}
                                </td>

                            ))

                    }
                    </tr>

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
