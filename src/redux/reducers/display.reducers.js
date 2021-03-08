import { StaticRouter } from 'react-router';
import {ADD_TODO} from './../action/display.action.js';

 const startState = {todo : [{id: 1, buah: "jeruk (starting state)"}] };


const Buah = (state = startState , action) => {

    console.log("reducers state : " ,state)



    switch(action.type){

        case ADD_TODO:

            console.log("state " , state )
            console.log("state " , state.todo[0].id )
            console.log("state " , state.todo[0])
            console.log("state " , state.todo.length)
            console.log("action " , action )
            console.log("action data " , action.data )
            console.log("action data id " , action.data.id )
     
        // 1 2 4 5 .. 6

       // 0 1 2
       // 1 2 3

       // 0 1 2
       // 1 3 4

        action.data.id = (state.todo.length-1)+2

        
            return {
                todo : [...state.todo , action.data],
                
            }   


        default:
            console.log("default returning : " ,state)
            return state
    }

}

export default Buah;