import React,{ Component } from 'react';
import {FlatList} from 'react-native'
import {Text ,View} from 'native-base';
import HomeCardItem from './HomeCardItem';


class HomeHorizontalList extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <View>
                <Text style={{fontSize:20,color:'white',marginTop:5,marginRight:10,marginBottom:3}}>دپارتمان های ویژه</Text>

                    <FlatList
                    initialScrollIndex='2'
                    horizontal={true}
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
                    renderItem={({item}) => <HomeCardItem/>}
                    />
            </View>  
        )
    }
}


export default HomeHorizontalList;