import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  banner:{
    width: '100%',
    resizeMode: 'contain'
  },
  title:{
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    marginTop:80,
    fontFamily: 'Roboto',
  },
  titleBOld:{
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  buttonsContainer:{
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },
  button:{
    height:150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
  buttonPrimary:{
    backgroundColor: '#9871F5',
  },
  buttonSecondary:{
    backgroundColor: '#04D361',
  },
  buttonText:{
    fontFamily: 'Roboto',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
  },
  totalConnections:{
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: '#D4C2FF',
    lineHeight: 20,
    maxWidth: 150,
    marginTop: 40,
  } 
});