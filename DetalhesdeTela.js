import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetalhesdeTela = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('./assets/idc.jpg')} 
          style={styles.image}
        />
        <Text style={styles.title}>IFC Ibirama</Text>
        <Text style={styles.description}>
          Descrição detalhada do campus aqui...
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export { DetalhesdeTela, styles };
