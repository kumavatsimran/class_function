import { Component } from "react";

export default class Class_Com extends Component{
    constructor(props){
        super()
        this.state={
            name:"simran"
        }
    }
    componentDidMount(){
        console.log("date is created...")
    }
    componentDidUpdate(){
        console.log("data updated...");
    }
    componentWillUnmount(){
        console.log("data remove...");
    }
    change=()=>{
        this.setState({
        name:"Hello React"
        })
    }

   render(){
    return(
        <>
        <h1>hello from class</h1>
        <p>{this.state.name}</p>
        <button onClick={this.change}> click to change</button>
        </>
    )
   }
}