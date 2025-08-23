import React, { Component } from 'react'

interface State{
    name: string;
}

export default class Homework1 extends Component<{}, State>{
    constructor(props: {}) {
        super(props)
        this.state = {
            name:""
        }
}
    submitForm = (e:React.FormEvent) => {
        e.preventDefault()
        console.log(this.state)
    }
    handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name:e.target.value
        })
    }
  render() {
    return (
        <>
            <form onSubmit={this.submitForm}>
                <label htmlFor="" >Name</label>
                <input type="text"  onChange={this.handleInput}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
  }
}
