import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    backgroundColor: '#F0F0F7',
    flex: 1,
  },
  teacherList:{
    marginTop: -40,
    padding: 16,
  },
  searchForm:{
    marginBottom: 24,
  },
  inputGroup:{
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  inputBlock:{
    width: '48%'
  },
  label:{
    color: '#D4C2FF',
    fontFamily: 'Roboto',
    fontWeight: '400'
  },
  input:{
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },
  submitButton:{
    backgroundColor: '#04D361',
   
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  submitButtonText:{
    color: '#FFF',
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 16,
  }

});