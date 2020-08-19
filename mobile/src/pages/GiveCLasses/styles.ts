import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  content:{
    flex: 1,
    justifyContent: "center",
  },
  title:{
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 160,
  },
  description:{
    marginTop: 24,
     color: '#D4C2FF',
     fontFamily: 'Roboto',
     fontWeight: '400',
     fontSize: 16,
     maxWidth: 240
  },
  okButton:{
    marginVertical: 40,
    backgroundColor: '#04D361',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

  },
  okButtonText:{
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#FFF',
    fontSize: 16,
  }
});