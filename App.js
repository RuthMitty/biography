import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import TextComponent from './components/TextComponent';
import GalleryComponent from './components/GalleryComponent';

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Mi biografía</Text>
        <Image style={styles.image} source={require('./assets/images/yop.jpeg')}/>
        <TextComponent />
        <GalleryComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#487eb0',
    padding: '10%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dfe6e9'
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    flex:1
  }
})

export default App;