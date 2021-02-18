import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

export default function Feed() {

  const list = [
    {
      name: 'Maira',
      avatar_url: 'https://randomuser.me/api/portraits/women/47.jpg',
      subtitle: 'online'
    },
    {
      name: 'José',
      avatar_url: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg',
      subtitle: 'offline'
    },
    {
      name: 'João',
      avatar_url: 'https://randomuser.me/api/portraits/men/91.jpg',
      subtitle: 'offline'
    },
    {
      name: 'Ana',
      avatar_url: 'https://uifaces.co/our-content/donated/XdLjsJX_.jpg',
      subtitle: 'online'
    },
  ]

  return (

    <View style={css.container}>

    <View>  
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>

    </View>

  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    margin: 5,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})