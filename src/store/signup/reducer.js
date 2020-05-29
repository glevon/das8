let initState ={
    name:"",
    email:"",
    password:"",
}

export default function signupReducer(state=initState,action) {
    switch(action.type){
        case "changeName":return{
            ...state,
            name:action.value
        }
        case "changeEmail":return{
            ...state,
            email:action.value
        }
        case "changePassword":return{
            ...state,
            password:action.value
        }
    }
    return state
}