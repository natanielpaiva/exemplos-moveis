import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gyroscope } from 'react-native-sensors';

const GyroscopeExample = () => {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const subscription = gyroscope.subscribe(({ x, y, z }) => {
      setData({ x, y, z });
    });

    // Limpa a assinatura ao sair da tela
    return () => subscription.unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rotação no Eixo X: {data.x.toFixed(2)}</Text>
      <Text style={styles.text}>Rotação no Eixo Y: {data.y.toFixed(2)}</Text>
      <Text style={styles.text}>Rotação no Eixo Z: {data.z.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, margin: 10 },
});

export default GyroscopeExample;