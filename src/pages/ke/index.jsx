import React from "react";
import { View, Image } from "@tarojs/components";
import Title from "../title/index";
import "./index.scss";

function Ke(props) {
    const { item, shou=undefined} = props;
    return (
        <View className='ke'>
            <View className='biao'>
                <Title title={item.title} />
                {
                    shou&&<View className='shou'>已收藏</View>
                }
            </View>
            <View className='ke1'>
                {
                    item.srcs.map(item1 => <View className='ke_1' key={item1.id}>
                        <Image src={item1.src1} className='ke_1_img'></Image>
                    </View>)
                }
            </View>
        </View>
    )
}

export default Ke;