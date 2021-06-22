import React,{Component} from 'react'
import './index.scss';
export default class B extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div class="bwrap">
        <h2>B组件 - {this.props.title}</h2>
      </div>
    );
  }
}

