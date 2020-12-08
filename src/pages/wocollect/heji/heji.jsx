import React from "react";
import { View, Image } from "@tarojs/components";
import "./heji.scss";

function Heji(props) {
    const { item } = props;
    return (
        <View className='ha'>
            <View className='heji'>
                <View className='imgv'>
                    <Image src={item.src} className='im1'></Image>
                </View>
                <View className='miao'>
                    <View className='tit'>{item.title}</View>
                    <View className='jianjie'>{item.jie}</View>
                    <View className='num' >共{item.num}个 | { item.time }小时</View>
                </View>
                <View className='shou'>已收藏</View>
            </View>
            <View className='kecheng'></View>
        </View>
    );
}

export default Heji;