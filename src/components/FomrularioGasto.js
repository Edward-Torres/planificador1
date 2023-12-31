import React, { useState, useEffect }from 'react'
import { Text, SafeAreaView, View, TextInput, StyleSheet, Pressable } 
from 'react-native'
import { Picker } from '@react-native-picker/picker'
import globalStyles from '../styles'

const FomrularioGasto = ({setModal, handleGasto, gasto, setGasto}) => {
  const [nombre, setNombre]= useState('')
  const [cantidad, setCantidad]= useState('')
  const [categoria, setCategoria]= useState('')
  const [id, setId] = useState('')
  const [fecha, setFecha] = useState('')
 
  

  useEffect(()=>{
    if(gasto?.nombre){
      setNombre(gasto.nombre)
      setCantidad(gasto.cantidad)
      setCategoria(gasto.categoria)
      setId(gasto.id)
      setFecha(gasto.fecha)

    }
  },[gasto])
  return (
    <SafeAreaView style={styles.contenedor}>
      <View>
        <Pressable 
          onLongPress={() =>{
            setModal(false)
            setGasto({})
          }}
          style={styles.btnCancelar}
        >
            <Text style={styles.btnCancelarTexto}>Cancelar</Text>
        </Pressable>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.titulo}>{gasto?.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</Text>

        <View style={styles.campo}>
            <Text style={styles.label}>Nombre Gasto</Text>
            <TextInput
                style={styles.input}
                placeholder='Nombre del gasto. Ej: Comida'
                value={nombre}
                onChangeText={setNombre}
            />
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Cantidad Gasto</Text>
            <TextInput
                style={styles.input}
                placeholder='Cantidad del gasto. Ej: 300'
                keyboardType='numeric'
                value={cantidad}
                onChangeText={setCantidad}
            />
        </View>
        <View style={styles.campo}>
            <Text style={styles.label}>Categoria Gasto</Text>
            <Picker
              selectedValue={categoria}
              onValueChange={(value) =>{
                setCategoria(value)
              }}
            >
                <Picker.Item label="-- Seleccione --" value=""/>
                <Picker.Item label="Ahorro" value="ahorro"/>
                <Picker.Item label="Comida" value="comida"/>
                <Picker.Item label="Casa" value="casa"/>
                <Picker.Item label="Gastos" value="gastos"/>
                <Picker.Item label="Ocio" value="ocio"/>
                <Picker.Item label="Salud" value="Salud"/>
                <Picker.Item label="Suscripciones" value="suscripciones"/>
            </Picker>
        </View>
        <Pressable 
        style={styles.submitBtn}
        onPress={() => handleGasto({nombre, cantidad, categoria, id, fecha})}
        >
            <Text style={styles.submitBtnTexto}>{gasto?.nombre ? 'Guardar Gasto' : 'Agregar Gastos'}</Text>
        </Pressable>
      </View>

          
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor: '#1E40AF',
    flex: 1,
  },
  btnCancelar:{
    backgroundColor:'#db2777',
    padding:10,
    marginTop:30,
    marginHorizontal: 10,
  },
  btnCancelarTexto:{
    textAlign:'center',
    textTransform:'uppercase',
    fontWeight:'bold',
    color:'#fff'
  },
  formulario:{
    ...globalStyles.contenedor
  },
  titulo:{
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
    color: '#64748B'
  },
  campo:{
    marginVertical:10,
  },
  label:{
    color:'#64748B',
    textTransform:'uppercase',
    fontSize:16,
    fontWeight: 'bold'
  },
  input:{
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius:10,
    marginTop:10
  },
  submitBtn:{
    backgroundColor:'#3B82F6',
    padding: 10,
    marginTop: 10
  },
  submitBtnTexto:{
    textAlign:'center',
    color:'#FFF',
    fontWeight:'bold',
    textTransform:'uppercase'
  }
})

export default FomrularioGasto
