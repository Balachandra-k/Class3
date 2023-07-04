import React,{useState}from "react";
import Button from "./sub/Button";
import "./calc.css"
import Screen from "./sub/Screen";

/*eslint no-eval: 0 */
function Calculator (props){

    const[inp,setInp] = useState('')
    const[out,setOut] = useState("0")

    //valueHnadler
    const valueHandler = (value) => {
        // console.log('value=',value)
        const str = inp + value;
        setInp(str)
    }
    
    const clearOut = (value) => {
        if(value === 'AC'){
            setOut('0')
            setInp(' ')
        }
    }
    /*clear only input*/
    const clearInp = (value) =>{
        if(value === "c"){
            setInp('')
        }
    }
    /*calculate the final output*/
    const calHandler = (val) =>{
        if(val === "="){
            if(inp === " "){
                setOut('0')
            }else{
                setOut(eval(inp))
            }
        }
    }

    
    
    return (
        <div>
            <h1 className="title">Calculator</h1>
            <div className="container">
                <Screen input={inp} setInput={setInp} class={'output'} result = {out}/>
                <div className="ops">
                <Button title = {"7"} handler = {valueHandler}class= {"btn"}/>
                <Button title = {"8"} handler = {valueHandler}class= {"btn"}/>
                <Button title = {"9"} handler = {valueHandler}class= {"btn"}/>
                    <Button title = {"/"} handler = {valueHandler}class= {"btn btn-warning"}/>

                    <Button title = {"4"}handler = {valueHandler}class= {"btn"}/>
                    <Button title = {"5"}handler = {valueHandler}class= {"btn"}/>
                    <Button title = {"6"}handler = {valueHandler}class= {"btn"}/>
                    <Button title = {"*"}handler = {valueHandler}class= {"btn btn-warning"}/>

                    <Button title = {"1"}handler = {valueHandler}class= {"btn"}/>
                    <Button title = {"2"}handler = {valueHandler}class= {"btn"}/>
                    <Button title = {"3"}handler = {valueHandler}class= {"btn"}/>
                    <Button title = {"_"}handler = {valueHandler}class= {"btn btn-warning"}/>

                    <Button title = {"."}handler = {valueHandler}class= {"btn btn-warning"}/>
                    <Button title = {"0"}handler = {valueHandler}class= {"btn "}/>
                    <Button title = {"%"}handler = {valueHandler}class= {"btn btn-warning"}/>
                    <Button title = {"+"}handler = {valueHandler}class= {"btn btn-warning"}/>

                    <Button title = {"AC"}handler = {clearOut}class= {"btn"}/>
                    <Button title = {"c"}handler = {clearInp}class= {"btn"}/>
                    <Button title = {"="} handler = {calHandler}class= {"btn btn-sucess"}/>

                </div>
            </div>
        </div>
    )
}
export default Calculator