import React from 'react'
import { Text, SafeAreaView, View, TextInput, StyleSheet, Pressable } 
from 'react-native'
import { Picker } from '@react-native-picker/picker'
const FomrularioGasto = () => {
  return (
    <SafeAreaView>
      <View>
        <Pressable>
            <Text>Cancelar</Text>
        </Pressable>
      </View>

      <View>
        <Text>Nuevo Gasto</Text>

        <View>
            <Text>Nombre Gasto</Text>
            <TextInput
                placeholder='Nombre del gasto. Ej: Comida'
            />
        </View>
        <View>
            <Text>Cantidad Gasto</Text>
            <TextInput
                placeholder='Cantidad del gasto. Ej: 300'
                keyboardType='numeric'
            />
        </View>
        <View>
            <Text>Categoria Gasto</Text>
            <Picker>
                <Picker.Item label="-- Seleccione --" value=""/>
                <Picker.Item label="Ahorro" value="ahorro"/>
                <Picker.Item label="Comida" value="comida"/>
                <Picker.Item label="Casa" value="casa"/>
                <Picker.Item label="Colegio Elias" value="colegio"/>
                <Picker.Item label="Tarjetas" value="tarjetas"/>
                <Picker.Item label="BJJ" value="bjj"/>
                <Picker.Item label="Ocio" value="ocio"/>
                <Picker.Item label="Suscripciones" value="suscripciones"/>

            </Picker>
        </View>
        <Pressable>
            <Text>Agregar Gastos</Text>
        </Pressable>
      </View>

          
    </SafeAreaView>
  )
}

export default FomrularioGasto
