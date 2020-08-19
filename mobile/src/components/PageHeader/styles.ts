import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    backgroundColor: '#8257E5',
    padding: 40
  },
  topBar:{
    flexDirection: 'row',
     backgroundColor: '#8257E5',
     alignItems: 'center',
     justifyContent: 'space-between',
  },
  title:{
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});