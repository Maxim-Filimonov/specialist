import React, { Component, useState } from 'react'
import "./Button.css"


function test() {
  console.log(this)
}
// test.bind({ name: 'Specialiast' }})()
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: 'red',
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    const { onClickHandler, value } = this.props;
    return (
      <div className='btn' onClick={this.onClick}>
        {value} {this.state.count} {this.state.color}
      </div>
    )
  }
}
export default Button;
// export default function Button(props) {
//   const { onClickHandler, value } = props;
//   const [count, setCount] = useState(0);
//   const newCount = count * 10 + 15;
//   return (
//     <div className='btn' onClick={() => setCount(newCount)}>{value} {count}</div>
//   )
// }
