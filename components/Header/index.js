import { View, Image } from "react-native";
import styles from "../Header/styles";

const Header =(props)=>{
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <Image style={styles.menu} source={require('../../assets/menu.png')} />

        </View>
    )
}

export default Header