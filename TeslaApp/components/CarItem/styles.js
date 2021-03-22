import { StyleSheet, Dimensions } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
        //width: wp('100%'),
        //height: hp('100%')
    },
  
    titles: {
      marginTop: '30%', 
      width: '100%',
      alignItems: 'center',
    },
  
    title: {
      fontSize: 40,
      fontWeight: '500',
    },
  
    subtitle: {
      fontSize: 16,
      color: '#5c5e62'
    },

    subtitleCTA: {
      textDecorationLine: 'underline',
  },
  
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute',
    },

    buttonsContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%',
    }
});

export default styles;
