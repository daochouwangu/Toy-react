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
            <span>{this.state.a}</span>
            {this.children}
          </div>
  }
}
render(
<MyComponent id="myid" class="cls"><div>a</div><span>bc</span></MyComponent>, document.body
)
