import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import TeatcherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs (){
  return (
    <Navigator
      tabBarOptions={{
        style:{
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle:{
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle:{
          fontFamily: 'Roboto',
          fontWeight: '700',
          marginLeft: 16,
          fontSize: 13,
        },
        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#EBEBF5',
        inactiveTintColor: '#C1BCCC',
        activeTintColor: '#32264D'
      }}
    >
      <Screen
        name="TeacherList" 
        component={TeatcherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({color, size, focused}) =>{
            return (
              <Icon name="book" size={size} color={focused ? '#8257E5' : color} />
            )
          }
        }}
        />
      <Screen 
        name="Favorites" 
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color, size, focused}) =>{
            return (
              <Icon name="heart" size={size} color={focused ? '#8257E5' : color} />
            )
          }
        }}/>
    </Navigator>
  );
}

export default StudyTabs