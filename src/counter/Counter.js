import React from 'react'
import './Counter.css';
import { useSelector,useDispatch } from 'react-redux';
import {counterAction} from '../store/index';



const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector(state=>state.counter);
    const show = useSelector(state=>state.showCounter);
    console.log(counter);


    const incrementHandler = () =>{
        dispatch(counterAction.increment());
    }
    const decreaseHandler = () =>{
        dispatch(counterAction.decrement());
    }
    const toggleHandler = () => {
        dispatch(counterAction.toggle());
    }


    return (
        <div className="counter_body">
            <div className="counter_body--container">
                <div className="counter_body--container-content">
                    <div className="counter_body--container-content-counter">
                        {show&&<h1>{counter}</h1>}
                    </div>
                    <div className="counter_body--container-content-button">
                        <button onClick={incrementHandler}>increment</button>
                        <button onClick={decreaseHandler}>decrement</button>
                        <button onClick={toggleHandler}>toggle</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Counter
