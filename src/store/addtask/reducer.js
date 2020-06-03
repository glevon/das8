let globalState ={
    name:"",
    description:"",
    deadline:"",
}

export  default function addTaskReduser(state=globalState,action) {
    switch(action.type){
        case "changeName":return{
            ...state,
            name:action.value
        }
        case "changeDesc":return{
            ...state,
            description:action.value
        }
        case "changeDedline":return{
            ...state,
            deadline:action.value
        }
        case "empty":return{
            ...state,
            name:"",
            description:"",
            deadline:"",
        }
    }
    return state
}

