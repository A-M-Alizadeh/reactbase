import React from 'react';
import {Container, Text, Header, Button, Left, Right,Content,Icon,Body,Title, View} from 'native-base';
import {formStyle,general} from "./../../../src/assets/styles"
import { Actions } from 'react-native-router-flux';
import {Demand_Requests} from './../../../components/requesting/Api';
import OfflineNotice from '../../../components/utilities/OfflineNotice'
import Colors from './../../../components/utilities/Colors'
import {connect} from 'react-redux'
import {setToken} from './../../../components/redux/actions/loginActions'
import {ToastMaker} from '../../../components/utilities/ToastMaker'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sendModel:{
                page:1,
                number:10,
                specialitiesId:[3]
            }
        }
    }

    // componentDidMount(){
    //     console.log(this.props.text);
    // }

    localRmvToken(){
        this.props.saveToken('.');
        ToastMaker().withoutAction('شما با موفقیت از برنامه خارج شدید','warning');
        // Actions.reset('auth');
    }
    requ(){
        console.log(this.props.defaultSpecID);
        console.log('----------------------------------------');
        Demand_Requests().reqList(this.state.sendModel)
        .then(response=>{
            console.log('current');
            console.log(response.data);
        })
        .catch(error=>{
            console.log(error);
        })

        // UserData_Requests().profile(2)
        // .then(response=>{
        //     console.log('current');
        //     console.log(response.data);
        // })
        // .catch(error=>{
        //     console.log(error);
        // })

    }

    goSetting(){
        Actions.push('settings')
    }

    render(){
        const {userData}=this.props;
        console.log(userData.username);
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
                
                <Content style={formStyle.form}>
                
                    <Button full style={formStyle.submitBtn} onPress={this.localRmvToken.bind(this)}>
                            <Text style={formStyle.submitTxt}>خروج</Text>
                    </Button>
                    <Button full style={formStyle.submitBtn} onPress={this.requ.bind(this)}>
                            <Text style={formStyle.submitTxt}>درخواست</Text>
                    </Button>
                    <Button full style={formStyle.submitBtn} onPress={this.goSetting.bind(this)}>
                            <Text style={formStyle.submitTxt}>Setting</Text>
                    </Button>
                </Content>
                
            </Container>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        jwtToken : state.jwt.jwtToken,
        rehidrated : state.rehidrated,
        userData : state.userDataReducer,
        defaultSpecID:state.defaultSpecReducer,
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        saveToken: jwtToken=>{
            dispatch(setToken(jwtToken))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);