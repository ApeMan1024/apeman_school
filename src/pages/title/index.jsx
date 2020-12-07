import React from "react";
import { View } from "@tarojs/components";
import "./index.scss";

//标题组件
function Title(props) {
    const { title } = props;
    return (
        <View className='title'>{title}</View>
    ); 
} 

export default Title;