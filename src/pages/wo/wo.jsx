import React, { Component } from 'react';
import Taro from "@tarojs/taro";
import { View, Image } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui";
import photo from "../../images/photo.png"
import './wo.scss'
import iconBought from "../../images/iconBought.png";
import iconExchange from "../../images/iconExchange.png";
import iconMyfavorites from "../../images/iconMyfavorites.png";

export default class Wo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginList: [
        { id: 1, src: iconBought, title: '已购', url: '/pages/wocollect/wocollect' },
        { id: 2, src: iconMyfavorites, title: '收藏夹', url: '/pages/wocollect/wocollect' },
        { id: 3, src: iconExchange, title: '课程兑换', url: '/pages/wocollect/wocollect' }
      ]
    }
  }
  onRouterClickHandle({url}) {
    Taro.navigateTo({url});
  }
  render() {
    const { loginList } = this.state;
    return (
      <View className='wo'>
        <View className='head'>
          <View className='nei'>
            <View className='tu'>
              <Image src={photo} className='imga'></Image>
            </View>
            <View className='login'>登录/注册</View>
          </View>
        </View>

        <View className='list'>
          <AtList>
            {
              loginList.map(item => <AtListItem key={item.id} onClick={() => { this.onRouterClickHandle(item) }}
                title={item.title}
                arrow='right'
                thumb={item.src}
              />)
            }
          </AtList>
        </View>

      </View>
    )
  }
}
