import React,{ Component } from 'react';
import {FlatList} from 'react-native'
import {Text ,View} from 'native-base';
import PlansCardItem from './PlansCardItems';


class HomeSpecialPlans extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <View>
                <Text style={{fontSize:20,color:'white',marginTop:5,marginRight:10,marginBottom:3}}>طرح های ویژه</Text>

                    <FlatList
                    initialScrollIndex='2'
                    horizontal={true}
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
                    renderItem={({item}) => <PlansCardItem/>}
                    />
            </View>  
        )
    }
}


export default HomeSpecialPlans;