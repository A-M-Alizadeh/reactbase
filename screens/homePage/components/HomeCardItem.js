import React,{ Component } from 'react';
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right} from 'native-base';
import { Image } from 'react-native';

class HomeCardItem extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Card >
            <CardItem cardBody >
              <Image source={{uri: 'http://placeimg.com/640/480/any'}} style={{height: 120, width: null,margin:1, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                {/* <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button> */}
              </Left>
               <Body>
                {/* <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button> */}
              </Body>
              <Right>
                <Text>محصول شماره 1</Text>
              </Right>
            </CardItem>
          </Card>
        )
    }
}
export default HomeCardItem;









