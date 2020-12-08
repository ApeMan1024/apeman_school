import React, { Component } from 'react';
import { View, Image, Swiper, SwiperItem } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui';
import Ke from "../ke/index";
import './index.scss';
import lun1 from "../../images/lun1.jpg";
import lun2 from "../../images/lun2.jpg";
import lun3 from "../../images/lun3.jpg";
import lun4 from "../../images/lun4.jpg";
import lun5 from "../../images/lun5.jpg";
import lun6 from "../../images/lun6.jpg";
import syhejibg1 from "../../images/syhejibg1.png";
import syhejibg2 from "../../images/syhejibg2.png";
import syhejibg3 from "../../images/syhejibg3.png";
import syhejibg4 from "../../images/syhejibg4.png";
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";
import pic4 from "../../images/pic4.png";
import pic5 from "../../images/pic5.png";
import pic6 from "../../images/pic6.png";

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //搜索信息
      searchValue: "",
      imList: [
        { id: 1, imgSrc: lun1 },
        { id: 2, imgSrc: lun2 },
        { id: 3, imgSrc: lun3 },
        { id: 4, imgSrc: lun4 },
        { id: 5, imgSrc: lun5 },
        { id: 6, imgSrc: lun6 },
      ],
      heList: [
        { id: 1, ti2: "PHP", src: syhejibg1 },
        { id: 2, ti2: "Python", src: syhejibg2 },
        { id: 3, ti2: "JAVA", src: syhejibg3 },
        { id: 4, ti2: "Linux", src: syhejibg4 },
      ],
      keList: [
        { id: 1, title: "Python入门课程", srcs: [{ id: 1, src1: pic1 }, { id: 2, src1: pic2 }, { id: 3, src1: pic3 },] },
        { id: 2, title: "Python大数据+人工智能", srcs: [{ id: 1, src1: pic4 }, { id: 2, src1: pic5 }, { id: 3, src1: pic6 },] }
      ]
    }
    this.onSearchInputHandle = this.onSearchInputHandle.bind(this);
  }
  onSearchInputHandle(value) {
    this.setState({ searchValue: value });
  }
  render() {
    let { searchValue, imList, heList, keList } = this.state;
    return (
      <View>
        <AtSearchBar placeholder='推荐课程名称' className='bar' value={searchValue} onChange={this.onSearchInputHandle} />
        <Swiper className='swi' indicatorDots autoplay circular interval='3000'>
          {
            imList.map(item => <SwiperItem className='switem' key={item.id}>
              <Image src={item.imgSrc} className='im'></Image>
            </SwiperItem>)
          }
        </Swiper>
        <View className='heji'>
          {
            heList.map(item => <View className='he' key={item.id}>
              <View className='ti1'>合集</View>
              <View className='ti2'>{item.ti2}</View>
              <View>
                <Image src={item.src} className='sy'></Image>
              </View>
            </View>)
          }
        </View>
        {
          keList.map(item => <Ke item={item} key={item.id} />)
        }
      </View>
    );
  }

}
