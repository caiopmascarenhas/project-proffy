import React, {useState} from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';


function TeatcherList(){

  const [isFilterVisible, setIsFIlterVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([])
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(response =>{
      if(response){
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher:Teacher) => {
          return teacher.id;
        })
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handleToggleFIlterVisible(){
    setIsFIlterVisible(!isFilterVisible);
  }

  async function handleFIlterSubmit(){
    loadFavorites();
    const response = await api.get('classes', {
      params:{
        subject,
        week_day,
        time,
      }
    })
    setIsFIlterVisible(false)
    setTeachers(response.data);
  }

  useFocusEffect(()=>{
    loadFavorites();
  })


  return(
    <View style={styles.container}>
      <PageHeader title='Proffys disponíveis' headerRigth={(
        <BorderlessButton onPress={handleToggleFIlterVisible}>
          <Icon name="filter" size={20} color={'#FFF'}></Icon>
        </BorderlessButton>
        )
        }>
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              value={subject}
              onChangeText={text => setSubject(text)}
              style={styles.input}
              placeholder="Qual a máteria ?"
              placeholderTextColor='#C1BCCC'
              />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput 
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  style={styles.input}
                  placeholder="Qual o dia ?" 
                  placeholderTextColor='#C1BCCC'
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput 
                  value={time}
                  onChangeText={text => setTime(text)}
                  style={styles.input}
                  placeholder="Qual o horário ?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
            </View>
            <RectButton onPress={handleFIlterSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}  
      </PageHeader>
      <ScrollView style={styles.teacherList} contentContainerStyle={{
        paddingHorizontal: 16, paddingBottom: 16}}>
        {teachers.map(( teacher: Teacher) => {
          return( 
          <TeacherItem 
            key={teacher.id} 
            teacher={teacher} 
            favorited={favorites.includes(teacher.id)}
          />
        )})}
      </ScrollView>
    </View>
  );
}

export default TeatcherList;