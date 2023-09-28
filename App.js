
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Image,
  Modal
} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FomrularioGasto from './src/components/FomrularioGasto';
import { generarId } from './src/helpers';
import ListadoGastos from './src/components/ListadoGastos';

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto ] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0)
  const [gastos, setGastos] = useState([])
  const [modal, setModal] = useState(false)

  const handleNuevoPresupuesto = (presupuesto) =>{
    if(Number(presupuesto) > 0){
      setIsValidPresupuesto(true)
    }else{
      Alert.alert('Error', 'El Presupuesto no puede ser igual o menor a 0', [{
        text:' OK'
      }])
    }
  }

  const handleGasto = gasto =>{
    if(Object.values(gasto).includes('')){
      Alert.alert(
        "Error",
        "Todos los campos son obligatorios"
      )
      return
    }
    //añadir el nuevo gasto al state:
    gasto.id = generarId()
    gasto.fecha = Date.now()

    setGastos([...gastos, gasto])
    setModal(!modal)
  }
  //vistas
  return (
    <View style={styles.contenedor} >
      <ScrollView>
        <View style={styles.header}>
          <Header/>
          
          {isValidPresupuesto ? 
            (<ControlPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
            />) : 
            (<NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            handleNuevoPresupuesto=
            {handleNuevoPresupuesto}
            />)
          }
        </View>
        {isValidPresupuesto &&(
          <ListadoGastos
            gastos={gastos}
          />
        ) }
      </ScrollView>
       {modal && (
        <Modal
          animationType='slide'
          visible={modal}
        >
          <FomrularioGasto
            setModal={setModal}
            handleGasto={handleGasto}
          />
        </Modal>  
       )}

       {isValidPresupuesto && (
        <Pressable
          style={styles.imgModal}
          onPress={() => setModal(!modal)}
        >
          <Image
            style={styles.imagen}
            source={require('./src/img/nuevo-gasto.png')}
          />  
        </Pressable>
      )}
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
    minHeight: 400
  },
  imagen:{
    width:60,
    height:60,
    position: 'absolute',
    bottom: 5,
    right: 22,
    left: 1
    },
    imgModal:{
      width:60,
      height:60,
      //backgroundColor:'#FD3248',
      position: 'absolute',
      top: 640,
      right:20
    }
});

export default App;
