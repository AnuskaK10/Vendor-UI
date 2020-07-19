import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Drop from './components/dropmenu';
import AddItem from './components/AddItem';
import MenuItem from './components/MenuItem';



const App = () => {

  const [breakfast, setBreakfast] = useState([
    { text: 'French Toast',price:'350' ,key: '1' },
    { text: 'Pasta',price:'200', key: '2' },
    { text: 'Cornflakes with milk',price:'225', key: '3' },
  ]);

  const pressHandler = (key) => {
    setBreakfast(prevItems => {
      return prevItems.filter(item => item.key != key);
    });
  };

  const submitHandler = (text,price) => {
      setText('');
      setPrice('');
      setBreakfast(prevTodos => {
        return [
          { text,price, key: Math.random().toString() },
          ...prevItems
        ];
      });
        }
  

  return (
    <View style={styles.sectionContainer} >
      <Text style={styles.sectionTitle}>Welcome, Vendor!</Text>
      <Text style ={styles.sectionsubTitle}>Venue:-Dell INC 6</Text>
      <View style={styles.body}>
      <Drop/>
      </View>
      <View style={styles.body}>
          <AddItem submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={breakfast}
              renderItem={({ item }) => (
                <MenuItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      
    </View>
  
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.grey,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    marginTop:20,
    padding:40,
  },
  bodybutton: {
    marginTop:20,
    padding:40,
    color:'green',
  },
  sectionContainer: {
    marginTop: 62,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: 'green',
    justifyContent:'center',
  },
  sectionsubTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: Colors.black,
    justifyContent:'center',
  },
  buttonContainer:{
    flexDirection:'column',
    paddingTop:20,
    color:'green',

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
