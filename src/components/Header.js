import React from 'react'
import { SafeAreaView, Text, StyleSheet,View } from 'react-native'

const Header = () => {
  return (
    <SafeAreaView>
      <Text style={styles.texto}>Planificador de Gastos</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

    texto:{
        textAlign: 'center',
        fontSize: 30,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingTop: 20
    }
})

export default Header
