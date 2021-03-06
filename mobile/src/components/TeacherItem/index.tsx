import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';
import styles from './styles'


export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

export interface TeacherItemProps{
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, favorited}) =>{

  const [isFaviroted, setIsFavorites] = useState(favorited);

  function handleLinkToWhastapp(){
    api.post('connections', {
      user_id: teacher.id,
    }),
  
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)

  }

  console.log(Linking)

  async function handleToggleFavorite(){

    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];

    if (favorites){
      favoritesArray = JSON.parse(favorites)
    }
   
    if (isFaviroted) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) =>{
        return teacherItem.id === teacher.id
      });

      favoritesArray.splice(favoriteIndex, 1)
      setIsFavorites(false);
    }else {
      favoritesArray.push(teacher);
      setIsFavorites(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }

  return(
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{uri: teacher.avatar}}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacher.bio}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>Preço/Hora {'  '}
         <Text style={styles.priceValue}>{teacher.cost} {'  '}</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <RectButton 
            onPress={handleToggleFavorite}
            style={[
            styles.favoriteButton,
            isFaviroted ? styles.favorited : {}
            ]}>
            {isFaviroted 
              ? <Image source={unFavoriteIcon}/>
              : <Image source={heartOutlineIcon}/>
            } 
          </RectButton>
          <RectButton style={styles.contactButton} onPress={handleLinkToWhastapp}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;