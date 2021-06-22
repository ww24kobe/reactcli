import React,{Component} from 'react'

export default class B extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        B组件 - {this.props.title}
      </div>
    );
  }
}

