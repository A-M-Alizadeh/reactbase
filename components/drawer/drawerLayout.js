import React from 'react';
import {Container, Content,Text,View, Item, Icon,Picker} from 'native-base';
import {Image} from 'react-native';
import {general} from "./../../src/assets/styles"
import { Actions } from 'react-native-router-flux';
import Color from './../utilities/Colors'

export default class DrawerLayout extends React.Component{
    constructor(props){
        super(props);
        console.log('hereeeeeee');
    }

    render(){
        return(
            <Container style={{flex:1,backgroundColor:'#455A64'}}>
            <Content>
                <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                <Image source={require('./../../src/assets/images/logo.png')} style={{margin:15,width:120,height:120}}/>
                </View>
                <View style={{flex:1,backgroundColor:'#FFB74D',padding:10}}>
                <Item style={{justifyContent:'flex-end'}} onPress={()=>Actions.login()}>
                    <Text style={[general.textTitle_black,{margin:10}]}>ورود به سامانه</Text>
                    <Icon name="md-log-in"/>
                </Item>
                <Item style={{justifyContent:'flex-end'}} onPress={()=>Actions.replace('home')}>
                    <Text style={[general.textTitle_black,{margin:10}]}>خانه</Text>
                    <Icon name="md-home"/>
                </Item>
                <Item style={{justifyContent:'flex-end'}} onPress={()=>Actions.reset('root')}>
                    <Text style={[general.textTitle_black,{margin:10}]}>تنظیمات</Text>
                    <Icon name="md-settings"/>
                </Item>
                <Picker
                    note
                    mode="dropdown"
                    >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                </Picker>
                </View>
                </Content>
            </Container>
        )
    }
}