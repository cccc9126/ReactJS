import React, { Component } from 'react'
interface Color{
    color:string
}
export default class Homework3 extends Component<{}, Color> {
    constructor(props: {}) {
        super(props);
        this.state = {
            color:""
        }
    }
    temp: string = "";
    submitForm = (e:React.FormEvent) => {
        e.preventDefault()
        this.setState({color:this.temp})
        
    }
    handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        this.temp=e.target.value
    }
  render() {
    return (
        <>
            
            <form onSubmit={this.submitForm}>
                <h1>Date:{this.state.color}</h1><br />
                <label htmlFor="">Form</label><br />
                <input type="datetime-local" name="" id="" onChange={this.handleInput}/>
             <br />
                <button type="submit">submit</button>

            </form>

        </>
    )
  }
}
