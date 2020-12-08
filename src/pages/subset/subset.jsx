import React, { Component } from "react";
import { View, Image, Button, Text, ScrollView } from "@tarojs/components";
import Ke from "../ke/index";
import "./subset.scss";
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";
import pic4 from "../../images/pic4.png";
import pic5 from "../../images/pic5.png";
import pic6 from "../../images/pic6.png";

class Subset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keList: [
                { id: 1, title: "Python入门课程", srcs: [{ id: 1, src1: pic1 }, { id: 2, src1: pic2 }, { id: 3, src1: pic3 },] },
                { id: 2, title: "Python大数据+人工智能", srcs: [{ id: 1, src1: pic4 }, { id: 2, src1: pic5 }, { id: 3, src1: pic6 },] }
            ]
        }
    }

    render() {
        const { keList } = this.state;
        return (
            <ScrollView className='sco' scrollY>

                <View className='subset'>
                    <View className='top' >
                        <View className='head'>
                            <View className='head_left'>
                                <Image src={pic2} className='im1' ></Image>
                            </View>
                            <View className='head_right'>
                                <View className='head_right_title' >PHP人工智能学习合集</View>
                                <View className='head_right_jie' >PHP人工智能介绍描述文字，PHP人工智能 介绍描述文字，PHP人工智能介，PHP人工 智能介绍描述文字。</View>
                                <View className='head_right_num' >共3个课程 | 时长13.5小时</View>
                            </View>
                        </View>
                        <View className='btn'>
                            <Button type='warn'><Text className='text' >收藏合集</Text></Button>
                        </View>
                    </View>
                    <View className='bottom' >
                        {
                            keList.map(item => <Ke item={item} key={item.id} />)
                        }
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Subset;