import React, { Component } from 'react'
import {connect} from "react-redux"
import changeData from "../store/addtask/action"
import Axios from 'axios'


class AddTask extends Component {
    change(e){
        let v=e.target.value
        let t=e.target.getAttribute("data-id")
        this.props.changeData(t,v)
    }
    add(){
        let task=this.props.taskData
        task.user_id =this.props.userData.user.id
        
        Axios.post("http://localhost:4500/addTask",{table:"tasks",data:task})
        .then(r=>{            

        })
    }
    render() {
        return (
            <div className="w-25 mx-auto ">
                Name:<input data-id="changeName" onChange={this.change.bind(this)} value={this.props.taskData.name} type="text" className="form-control" />
                Description:<input data-id="changeDesc" onChange={this.change.bind(this)} value={this.props.taskData.description} type="text" className="form-control" />
                Dedline:<input data-id="changeDedline"  onChange={this.change.bind(this)} value={this.props.taskData.dedline} type="date"  className="form-control" />
                <button onClick={this.add.bind(this)}   className="btn btn-primary" >Add Task</button>

            </div>
        )
    }
}

function mapstatetoprops(state) {
    return{
        taskData:state.addTaskReduser,
        userData:state.profileReducer
    }
    
}
function mapdispatchtoprops() {
    return{
        changeData,
    }  
}
export default connect(mapstatetoprops,mapdispatchtoprops())(AddTask)
