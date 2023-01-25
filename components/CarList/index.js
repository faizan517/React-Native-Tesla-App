import { View, Text, FlatList, Dimensions } from "react-native";
import styles from './styles';
import cars from './cars'; 
import CarItem from '../CarItem'

const CarList =(props)=>{
    return(
        <View styles={styles.container}>
            <FlatList 
            data={cars}
            renderItem={({item}) => <CarItem car={item} />}
            snapToAlignment={'start'}
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get('screen').height}
            decelerationRate={'fast'} />
        </View>
    )
} 

export default CarList;