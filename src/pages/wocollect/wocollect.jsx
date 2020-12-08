import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtSearchBar } from 'taro-ui'
import Ke from "../ke/index";
import './wocollect.scss'
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";
import pic4 from "../../images/pic4.png";
import pic5 from "../../images/pic5.png";
import pic6 from "../../images/pic6.png";
import Heji from "./heji/heji";

export default class Wocollect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      tabList: [{ title: '课程' }, { title: '合集' }],
      searchVal: '',
      shouList: [
        { id: 1, title: "快速了解Python人工智能", srcs: [{ id: 1, src1: pic1 }, { id: 2, src1: pic2 }, { id: 3, src1: pic3 },], shou: true },
        { id: 2, title: "Python大数据+人工智能", srcs: [{ id: 1, src1: pic4 }, { id: 2, src1: pic5 }, { id: 3, src1: pic6 },], shou: true },
        { id: 3, title: "Python小白学爬虫与自动化", srcs: [{ id: 1, src1: pic4 }, { id: 2, src1: pic5 }, { id: 3, src1: pic6 },], shou: true }
      ],
      hejiList: [
        { id: 1, title: 'PHP人工智能学习合集', jie: 'PHP人工智能介绍描述文字，PHP人工智能 介绍描述文字，PHP人工智能介。', num: 6, time: '13.5', src: pic2 },
        { id: 2, title: 'PHP人工智能学习合集', jie: 'PHP人工智能介绍描述文字，PHP人工智能 介绍描述文字，PHP人工智能介。', num: 6, time: '13.5', src: pic2 },
        { id: 3, title: 'PHP人工智能学习合集', jie: 'PHP人工智能介绍描述文字，PHP人工智能 介绍描述文字，PHP人工智能介。', num: 6, time: '13.5', src: pic2 },
        { id: 4, title: 'PHP人工智能学习合集', jie: 'PHP人工智能介绍描述文字，PHP人工智能 介绍描述文字，PHP人工智能介。', num: 6, time: '13.5', src: pic2 },
      ]
    },
      this.onSearchChangeHandle = this.onSearchChangeHandle.bind(this);
  }
  handleClick(value) {
    this.setState({
      current: value,
      searchVal: ''
    })
  }
  onSearchChangeHandle(value) {
    this.setState({ searchVal: value });
  }
  render() {
    const { tabList, searchVal, shouList, hejiList } = this.state;
    return (
      <View className='wocollect'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <AtSearchBar placeholder='推荐课程名称' className='bar' value={searchVal} onChange={this.onSearchChangeHandle} />
            {
              shouList.map(item => <Ke item={item} shou={item.shou} key={item.id} />)
            }
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <AtSearchBar placeholder='推荐课程名称' className='bar' value={searchVal} onChange={this.onSearchChangeHandle} />
            <View className='hj' >
              {
                hejiList.map(item => <Heji key={item.id} item={item} />)
              }
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
