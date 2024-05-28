import { View, Text, Image, StyleSheet } from "react-native"
import { Usuario } from "@/data/usuarios"

export function Usuarios({nome, image, telefone, email}: Usuario){
  return(
    <View style={styles.container}>
        <Image style={{width: 64, height: 64}}  source={image} />
        <View>
          <Text style={styles.titulo}> {nome} </Text>
          <Text style={styles.texto}> +{telefone} </Text>
          <Text style={styles.texto}> {email} </Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edeef3',
    padding: 16,
    flexDirection: "row",
    borderRadius: 8,
    gap: 8,
    marginBottom: 16
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  titulo: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 16,
    color: "#00000060"
  },
  texto: {
    fontSize: 16,
    fontWeight: 400,
    color: "#00000080"
  }
})