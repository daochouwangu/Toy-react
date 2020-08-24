import {createElement, Component, render} from './toy-react.js'
class MyComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      a: 3,
      b: 2
    }
  }
  render() {
    return <div>
            <h1>component</h1>
            <button onClick={() => {this.setState({a: this.state.a+1,c:8})}}>add 1</button>
            <span>{this.state.a}</span><br/>
            <p>{this.state.b}</p>
            <span>{this.state.c?"hasC":"No c"}</span>
          </div>
  }
}
render(
<MyComponent id="myid" class="cls"></MyComponent>, document.body
)
