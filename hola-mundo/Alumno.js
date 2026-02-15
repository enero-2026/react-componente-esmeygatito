import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Alumno(props) {
  const [verDetalles, setVerDetalles] = useState(false);

  return (
    <View style={styles.card}>
      {}
      <Image 
        source={{ uri: `https://loremflickr.com/150/150/cat?lock=${props.matricula}` }}
        style={styles.foto} 
      />

      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>{props.nombre}</Text>
        
        {}
        {verDetalles && (
          <Text style={styles.matricula}>Matrícula: {props.matricula}</Text>
        )}
      </View>

      <TouchableOpacity 
        style={styles.boton} 
        onPress={() => setVerDetalles(!verDetalles)}
      >
        <Text style={styles.textoBoton}>
          {verDetalles ? 'Ocultar ↑' : 'Ver más ↓'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#98d8aa', 
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#436850', 
    width: '95%',
    alignSelf: 'center',
    // Sombra para que resalte
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30, // Círculo perfecto
    borderWidth: 2,
    borderColor: '#fbfada',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  nombre: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#12372a',
  },
  matricula: {
    fontSize: 12,
    color: '#436850',
    marginTop: 5,
  },
  boton: {
    backgroundColor: '#fbfada',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#12372a',
  },
  textoBoton: {
    fontSize: 12,
    fontWeight: '600',
    color: '#12372a',
  },
});