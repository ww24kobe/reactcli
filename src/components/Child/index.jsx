import React,{Component} from 'react'

export default class Child extends Component {
  constructor(props){
    console.log('Child-constructor')
    super(props)
    // 有状态
    this.state = {
      username: "小静"
    }
  }
  componentWillMount(){
    console.log('Child-componentWillMount')
  }

  componentDidMount(){
    console.log('Child-componentDidMount')
  }

  componentWillUpdate(){
    console.log('Child-componentWillUpdate')
  }


 
  render() {
    // 数据更新这里会重新渲染
    console.log('Child-render')
    return (
      <div>
        <span>Child子组件77son</span>
      </div>
    );
  }
}

