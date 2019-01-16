import React,{Component} from 'react';
import {Container, Text, Header,View, Button, Right, Form,Content,Input,Item,Icon,Spinner, Toast} from 'native-base';
import {formStyle,general} from "./../../src/assets/styles"
import {Actions} from 'react-native-router-flux'
import {Auth_Requests,UserData_Requests} from './../../components/requesting/Api';
import OfflineNotice from './../../components/utilities/OfflineNotice'
import Colors from './../../components/utilities/Colors'
import {connect} from 'react-redux'
import {setToken, setUserData, setDefaultSpec} from './../../components/redux/actions/loginActions'
import {Login_STR} from './../../components/utilities/String'
class Login extends Component{

    constructor(props){
        super(props);
        // this.changeNameeee = this.changeNameeee.bind(this);

        this.state=({
            isLoading:false,
            username:{
                value:'',
                error:''
            },
            password:{
                value:'',
                error:''
            },
            userData:{
                username:'',
                specialities:[]
            },
            defaultSpec:{
                id:null,
                itemInList:null,
            },
            // nameeee: '',
            // typing: false,
            // typingTimeout: 0
        });
    }

    // changeNameeee = (event) => {
    //     if (this.state.typingTimeout) {
    //        clearTimeout(this.state.typingTimeout);
    //     }
    
    //     this.setState({
    //        nameeee: event,
    //        typing: false,
    //        typingTimeout: setTimeout(function () {
    //         //    this.sendToParent(this.state.nameeee);
    //            console.log('has changed - requests gone');
    //          }, 1000)
    //     });
    // }

    isEmail = (email = null) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return regex.test(email);
        }

    handleSubmit(){
        // Actions.home({text: 'Hello World'});
        console.log(this.state);
        let {username,password} = this.state;
        if(username.value === ''){
            this.setState({
                username:{
                    value:'',
                    error:'فیلد نام کاربری نمیتواند خالی باشد.'
                }
            });
            return;
        }
        if(password.value === ''){
            this.setState({
                password:{
                    value:'',
                    error:'فیلد رمز عبور نمیتواند خالی باشد.'
                }
            });
            return;
        }
        if(!this.isEmail(username.value)){
            this.setState({
                username:{
                    value:username.value,
                    error:'فرمت نام کاربری صحیح نمیباشد.'
                }
            });
            return;
        }

        this.setState(prevState => ({
            isLoading: true
          }));

        var data = {username: this.state.username.value,password:this.state.password.value}

        Auth_Requests().login(data)
        .then(response=>{
            this.setState(prevState => ({
                isLoading: false
              }));
            //new
            this.props.saveToken(response.data.accessToken);
            UserData_Requests().loggedInModel().then(
                response=>{
                    this.state.userData.username = response.data.username;
                    this.state.userData.specialities = response.data.specialities;
                    this.props.saveUserData(this.state.userData);
                    

                    this.state.defaultSpec.id = response.data.specialities[0].value;
                    this.state.defaultSpec.itemInList = 0;
                    this.props.saveDefaultSpec(this.state.defaultSpec);
                    Actions.reset('root');
                }
            )
            
            //new
        })
        .catch(error=>{
            console.log(error);
            this.setState(prevState => ({
                isLoading: false
              }));
        })
    }

    render(){
        const usernameError = this.state.username.error;
        const passwordError = this.state.password.error;
        return(
            <Container style={{backgroundColor:Colors.colorPrimary}}>
            
                <Header androidStatusBarColor={Colors.statusBarColor} style={{backgroundColor:Colors.colorPrimaryDark}}>
                    <Right>
                        <Text style={general.appBarTitle_white}>{Login_STR.title}</Text>
                    </Right>
                </Header>
                <OfflineNotice />
                <Content>
                    <View style={{alignItems:'center',margin:10}}>
                        <Text style={general.appBarTitle_white}>{Login_STR.companyName}</Text>
                        <Text style={general.headerTitle_white}>{Login_STR.appName}</Text>
                    </View>

                    <View style={formStyle.formWrapper}>
                        <Form style={formStyle.form} >
                            <Item rounded style={formStyle.item} error={usernameError !== ''}>
                                <Input 
                                // onEndEditing={()=>{console.log('i think i found itttt')}}
                                //   onChange={()=>{console.log('i think i found itttt')}}
                                // onContentSizeChange={()=>{console.log('size changed')}}

                                value={this.state.username.value}
                                    placeholderTextColor='#F5F5F5' 
                                    style={formStyle.input} 
                                    placeholder={Login_STR.getUsername}
                                    onChangeText={username => this.setState({
                                        username:{value:username,error:''}
                                    })}
                                />
                                <Icon active name='md-mail'/>
                            </Item>
                            <Text style={[formStyle.error, this._checkDisplay(usernameError)]}>{usernameError}</Text>
                            
                            <Item rounded style={formStyle.item} error={passwordError !== ''}> 
                                <Input 
                                value={this.state.password.value}
                                    placeholderTextColor='#F5F5F5'
                                    style={formStyle.input} 
                                    placeholder={Login_STR.getPassword}
                                    secureTextEntry
                                    onChangeText={password => this.setState({
                                        password:{value:password,error:''}
                                    })}
                                />
                                <Icon active name='md-key' />
                            </Item>

                            {/* <Item rounded style={formStyle.item} error={passwordError !== ''}> 
                                <Input
                                    value={this.state.nameeee}
                                    placeholderTextColor='#F5F5F5'
                                    style={formStyle.input} 
                                    onChangeText={this.changeNameeee.bind(this)}
                                />
                            </Item> */}

                            <Text style={[formStyle.error, this._checkDisplay(passwordError)]}>{passwordError}</Text>

                            <Button full style={formStyle.submitBtn} onPress={this.handleSubmit.bind(this)}>
                                <Text style={formStyle.submitTxt}>{Login_STR.enter}</Text>
                                { this.state.isLoading ? <Spinner  size='small' color={Colors.colorPrimary}/> : null }
                            </Button>
                            
                            <View style={general.topLine}>
                                <Button hasText transparent>
                                    <Text style={general.smallText_white}>{Login_STR.forgetPassword} </Text>
                                </Button>
                            </View>

                        </Form>
                    </View>
                </Content>
            </Container>
        )
    }

    _checkDisplay(field){
        return {display : field ===''?'none':'flex'}
    }

}

const mapDispatchToProps = dispatch=>{
    return{
        saveToken: jwtToken=>{
            dispatch(setToken(jwtToken));
        },
        saveUserData: userData=>{
            dispatch(setUserData(userData));
        },
        saveDefaultSpec: defaultSpec=>{
            dispatch(setDefaultSpec(defaultSpec));
        },
    }
}

export default connect(null,mapDispatchToProps)(Login);