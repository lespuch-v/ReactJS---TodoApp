import myTodoData from "./TodoData"
import "./App.css"
import logo from  "./logo.svg"
import React from "../node_modules/react"
import ComponentToDo from "./ComponentToDo"

class App extends React.Component {
  constructor(){
    super()
    this.state={
      itemData: myTodoData
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    const {name, value} = event.target
    console.log("Button Clicked")
    this.setState({
      [name]: value
    })
  }

  render(){
    const justItems = this.state.itemData.map(myNewitems => <ComponentToDo key={myNewitems.id} handleClick={this.handleClick} myNewitems={myNewitems} />)
    return(<div className="App-header">
      <img className="rct-logo" src={logo} alt="Logo" />
      <h1>ToDo App</h1>
      {justItems}
    </div>)
  }

}
export default App