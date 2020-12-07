import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { AtList, AtListItem } from "@tarojs/taro";
import photo from "../../images/photo.png"
import './wo.scss'

export default class Wo extends Component {

  render() {
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
            <AtListItem
              title='标题文字'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
          </AtList>
        </View>

      </View>
    )
  }
}
