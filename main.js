import {createElement, Component, render} from './toy-react.js'
class MyComponent extends Component{
  render() {
    return <div>
            <h1>component</h1>
            {this.children}
          </div>
  }
}
render(
<MyComponent id="myid" class="cls"><div>a</div><span>bc</span></MyComponent>, document.body
)
