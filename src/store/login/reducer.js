let initState ={
    email:"",
    password:"",
}

export  function loginReducer(state=initState,action) {
    switch(action.type){
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