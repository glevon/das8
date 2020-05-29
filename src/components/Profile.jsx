import React, { Component } from 'react'
import {connect} from "react-redux"


class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {
                                
                                Object.keys(this.props.showData.user).map((a,i)=>{
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
                        Object.values(this.props.showData.user).map((a,i)=>{
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
                
                {console.log(this.props.showData.user.id)};
            </div>
        )
    }
}
function mapstatetoprops(state) {
    return{
        showData:state.profileReducer
    }
    
}

export default connect(mapstatetoprops)(Profile)

