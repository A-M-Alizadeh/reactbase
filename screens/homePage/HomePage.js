import React,{ Component } from 'react';
import {FlatList} from 'react-native'
import {Container, Text, Header, Button, Left, Right,Content,Icon,Body,Title, View, Row,List} from 'native-base';
import {formStyle,general} from "./../../src/assets/styles"
import { Actions } from 'react-native-router-flux';
import OfflineNotice from '../../components/utilities/OfflineNotice'
import Colors from './../../components/utilities/Colors'
import TopSlider from './components/TopSlider';
import MiddleItems from './components/MiddleItems';
import HomeCardItem from './components/HomeCardItem';
import HomeHorizontalList from './components/HomeHorizontalList';
import HomeSpecialPlans from './components/HomeSpecialPlans';


class HomePage extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Container style={{backgroundColor:Colors.colorPrimary}}>
                <Header androidStatusBarColor={Colors.statusBarColor} style={{backgroundColor:Colors.colorPrimaryDark}}>
                
                    <Left>
                        <Button transparent>
                            <Icon name='md-help' style={general.iconStyle}/>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Text stsyle={general.appBarTitle_white}>صفحه اصلی</Text>
                            <Icon name='md-menu' style={{marginLeft:10}} onPress={()=>Actions.drawerOpen()}/>
                        </Button>
                    </Right>
                </Header>
                <OfflineNotice />
                
                <Content >

                    <TopSlider/>

                    <MiddleItems/>

                    <HomeHorizontalList/>

                    <HomeHorizontalList/>

                    <HomeHorizontalList/>

                    <HomeSpecialPlans/>
                    
                </Content>
                
            </Container>
        )
    }
}


export default HomePage;