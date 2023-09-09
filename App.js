
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto ] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)


  const handleNuevoPresupuesto = (presupuesto) =>{
    if(Number(presupuesto) > 0){
      setIsValidPresupuesto(true)
    }else{
      Alert.alert('Error', 'El Presupuesto no puede ser igual o menor a 0', [{
        text:' OK'
      }])
    }
  }
  return (
    <View style={styles.contenedor} >

      <View style={styles.header}>
        <Header/>
        
        {isValidPresupuesto ? 
          (<ControlPresupuesto
            presupuesto={presupuesto}
          />) : 
          (<NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          handleNuevoPresupuesto=
          {handleNuevoPresupuesto}
          />)
        }


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor: '#F5F5F5',
    flex: 1
  },
  header:{
    backgroundColor: '#3b82F6',

  },
});

export default App;
