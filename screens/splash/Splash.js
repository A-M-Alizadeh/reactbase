import React from 'react';
import {Container, Text, Spinner} from 'native-base';
import {StatusBar,Animated,Easing} from 'react-native';
import {general} from "./../../src/assets/styles"
import { Actions } from 'react-native-router-flux';
import OfflineNotice from './../../components/utilities/OfflineNotice'
import Colors from './../../components/utilities/Colors'
import {connect} from 'react-redux'
import axios from 'axios'
import APIPathHelper from './../../components/requesting/APIPathHelper';
import {setToken} from './../../components/redux/actions/loginActions'
import {Splash_STR} from './../../components/utilities/String'

class Splash extends React.Component{
    constructor(props){
        super(props);
        this.animatedValue= new Animated.Value(0);
    }

    componentWillMount(){
        this.animate();
    }

    animate(){
        this.animatedValue.setValue(0);
        Animated.timing(this.animatedValue,{
            toValue:1,
            duration : 500,
            easing : Easing.linear
        }).start(()=>this.animate())
    }

    render(){
        if(this.props.rehidrated === true){
            this.checkUserLogin();
        }
        
        const opacity = this.animatedValue.interpolate({
            inputRange: [0 ,0.5, 1],
            outputRange: [0.6 ,1, 0.6],
        });

        return(
            <Container style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:Colors.colorPrimaryDark}}>
            <StatusBar hidden/>
                
            <Animated.Image source={require('./../../src/assets/images/logo.png')} style={{margin:15,width:120,height:120,opacity}}/>
                <Text style={general.appBarTitle_white}>{Splash_STR.companyName}</Text>
                <Text style={general.headerTitle_white}>{Splash_STR.slogan}</Text>
                <Spinner color={Colors.accentColor}/>
            <OfflineNotice/>
            </Container>
        )
    }

    checkUserLogin(){
            let apiToken = this.props.jwtToken;
            console.log('quack quack');
            console.log(apiToken);
            if(apiToken === null)
                apiToken = '.';

            if(apiToken !== null){       
                console.log('ba baa baaa');   

                const AuthStr = 'Bearer '.concat(this.props.jwtToken);
                console.log(APIPathHelper.BASE_URL+APIPathHelper.Req_LoggedInModel.url);
                axios.get(APIPathHelper.BASE_URL+APIPathHelper.Req_LoggedInModel.url, { headers: { Authorization: AuthStr } })
                .then(response => { 
                    if(response.data !== '.'){
                        console.log('went through');
                        Actions.reset('root');
                    }
                })
                .catch((error) => {
                        console.log('error New Req ' + error);
                        console.log(error);
                        Actions.reset('auth');
                });
                

            }else{
                console.log('meu meu meu');
                Actions.reset('auth');
                console.log('mau mau mau');
            }
    }
}

const mapStateToProps = (state)=>{
    return{
        jwtToken : state.jwt.jwtToken,
        rehidrated : state.rehidrated
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        saveToken: jwtToken=>{
            dispatch(setToken(jwtToken))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Splash);