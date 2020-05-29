let profileData ={
    user:{
    }
}

export default function profileReducer(state=profileData,action) {
    switch(action.type){
        case "save":return{
            ...state,
            user:action.value
        }

    }
    return state
}