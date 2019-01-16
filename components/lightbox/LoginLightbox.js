import React from 'react';
import {Text, View} from 'native-base';
import BaseLightbox from './BaseLightbox';
import {general} from "./../../src/assets/styles"

export default class LoginLightbox extends React.Component{

    render(){
        return(
            <BaseLightbox verticalPercent={0.9} horizontalPercent={0.6}>
                <Text style={[general.appBarTitle_black,{margin:10}]}> ثبت نام در سامانه بازار اعضا</Text>
                <Text style={[general.textTitle_black,{margin:10}]}> در حال پیاده سازی ... </Text>
            </BaseLightbox>
        )
    }
}