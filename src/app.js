import { Component } from 'react';
import 'taro-ui/dist/style/index.scss' // 按需引入
import './app.scss';

class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }


  render() {
    return this.props.children
  }
}

export default App
