import React,{Component} from 'react'
import './index.scss';


import Child from "@/components/Child/index.jsx"
export default class B extends Component {
  constructor(props){
    console.log('父-constructor')
    super(props)
    // 有状态
    this.state = {
      username: "小静"
    }
  }
  componentWillMount(){
    console.log('父-componentWillMount')
  }

  componentDidMount(){
    console.log('父-componentDidMount')
  }

  componentWillUpdate(){
    console.log('父-componentWillUpdate')
  }
 
  changeUsername(e,newUsername){
    this.setState((state)=>{
      return {
        username: newUsername
      }
    })
  }

  onChangeHandle(value){
    this.setState((state)=>{
      return {
        username: value
      }
    })
  }
  render() {
    // 数据更新这里会重新渲染
    console.log('父-render')
    return (
      <div className="bwrap">
        <h2>B组件 - {this.props.title}</h2>
        <button onClick={(e)=>this.changeUsername(e,'小罗')}>改为小罗</button> <br/>
        用户名：<input type="text" onChange={(e)=>{this.onChangeHandle(e.target.value)}} value={this.state.username} /> <br/>
        你输入的名字： {this.state.username} <br/>
        <Child />
      </div>
    );
  }
}

