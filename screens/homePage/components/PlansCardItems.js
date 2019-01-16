import React,{ Component } from 'react';
import {Card, CardItem,View, Text,Right} from 'native-base';
import { Image } from 'react-native';

class PlansCardItem extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Card >
            <CardItem cardBody >
              <Image source={{uri: 'http://placeimg.com/640/480/any'}} style={{height: 120, width: 170,margin:1, flex: 1}}/>
            <View style={{height:'30%',position: 'absolute',left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'flex-end',backgroundColor:'rgba(0,0,0,0.5)'}}>
                <Text style={{color:'white',fontSize:15,margin:3}}>طرح شماره 1</Text>
            </View>
            </CardItem>
          </Card>
        )
    }
}
export default PlansCardItem;

