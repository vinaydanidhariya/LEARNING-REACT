import { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {

    let [count, HandleCount] = useState(1)

    function Increment(){
        HandleCount(count+1)
    }
    function Decrement(){
        HandleCount(count-1)
    }
   
    return <>
        <Button onClick={Increment}>+</Button>
        <h1>{count}</h1>
        <Button onClick={Decrement}>-</Button>
    </>
}


export default Counter;

