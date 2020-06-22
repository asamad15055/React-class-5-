import React, {useReducer}  from 'react' ;
import CounterReducer from './counterReducer' ;

const Child2 = () => {
    
    let [state , dispatch] = useReducer(CounterReducer , 0);
    console.log(state) ;
    return (
        <div>
            <h2>This is Second child using Counter Reducer</h2>
            <h3>Value of Reducer State is: {state} </h3>
            <button onClick = {() => dispatch('INCREMENT') }>Increament Reducer Counter</button>
        </div>
    );
}

export default Child2 ;