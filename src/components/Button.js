import React, { Component } from 'react'
import "./Button.css"

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    const { onClickHandler, value } = this.props;
    return (
      <div className='btn' onClick={() => this.setState({ count: this.state.count + 1 })}>
        {value} {this.state.count}
      </div>
    )
  }
}
export default Button;
// export default function Button(props) {
//   const { onClickHandler, value } = props;
//   return (
//     <div className='btn' onClick={onClickHandler}>{value}</div>
//   )
// }
