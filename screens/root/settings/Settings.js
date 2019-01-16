import React from 'react';
import {Container, Text, Header, Button, Left, Right,Content,Icon,Body,Title} from 'native-base';
import {general} from "./../../../src/assets/styles"
import { Actions } from 'react-native-router-flux';
import Colors from './../../../components/utilities/Colors'
import OfflineNotice from '../../../components/utilities/OfflineNotice'
import Testit from './component/Testit'

export default class Settings extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title:'صفحه تنظیمات'
        };
    }

    updateTitle(title){
        this.setState({title})
    }

    render(){
        return(
            <Container style={[general.Container,{backgroundColor:Colors.colorPrimary}]}>
                <Header androidStatusBarColor={Colors.statusBarColor} style={{backgroundColor:Colors.colorPrimaryDark}}>
                    <Left style={{flexDirection:'row'}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-back' style={general.iconStyle}/>
                        </Button>

                        <Button transparent>
                            <Icon name='md-help' style={general.iconStyle}/>
                        </Button>


                    </Left>
                    <Right>
                        <Button transparent>
                            <Text style={general.appBarTitle_white}>صفحه ی تنظیمات</Text>
                            <Icon name='md-menu' style={{marginLeft:10}} onPress={()=>Actions.drawerOpen()}/>
                        </Button>
                    </Right>
                </Header>
                <OfflineNotice />
                <Content style={[general.Container]}>
                    <Text style={[general.appBarTitle_white,{margin:15}]}>{this.state.title}</Text>
                    <Testit title={this.state.title} updater={this.updateTitle.bind(this)}/>
                </Content>
                
            </Container>
        )
    }
}