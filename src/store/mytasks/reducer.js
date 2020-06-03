let gState ={
    tasks:[]
}

export  default function myTaskReducer(state=gState,action) {
    switch(action.type){
        case "addtasks":return{
            ...state,
            tasks:action.value
        }
    }
    return state
}