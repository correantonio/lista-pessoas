import React from "react";
import { FlatList, ListRenderItem, ListRenderItemInfo, SafeAreaView, Text, View } from "react-native";
import { Usuarios } from "@/components/Usuarios";
import { Usuario, usuariosLista } from "@/data/usuarios";


export default function HomeScreen() {
  function renderItem({item}: ListRenderItemInfo<Usuario>){
    return <Usuarios {...item}/>;
  };
  
  return (
    <SafeAreaView>
    <View style={{maxWidth: 350, alignSelf: "center"}}>
      <FlatList
        data={usuariosLista}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={renderItem}
      />
    </View>
    </SafeAreaView>
  )
}