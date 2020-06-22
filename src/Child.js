import React, { useContext } from 'react' ;
import counterContext from './CounterContext';

const Child = (props) => {

    let countervalue = useContext(counterContext)
    console.log(countervalue)
    return (
        <div>
            <h2>This is First child using Counter Context</h2>
            <h2>Counter value is : {countervalue[0]}</h2>

            <button onClick = {() => {countervalue[1]([++countervalue[0]]) } }>Increament Context Counter</button>
        </div>
    ) ;
} 

export default Child ;