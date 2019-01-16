import React from 'react';
import {Text,Button, Input,Item,Label, View} from 'native-base';

export default class Testit extends React.Component{

    chnageParentTitle(e){
        const newtitle = e.value;
        console.log(newtitle);
        // this.props.updater(newtitle);
    }

    render(){
        return(
            <View>
                <Button rounded  warning ><Text>Hello Mother Fucker</Text></Button>
                
                <Item floatingLabel>
                <Input value={this.props.title} onChangeText={this.chnageParentTitle.bind(this)}/>
                </Item>

            </View>
        )
    }
}