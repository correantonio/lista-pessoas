import { ImageProps } from "react-native";


export interface Usuario {
  id: number,
  nome: string,
  image: ImageProps["source"],
  telefone: string,
  email: string
}

const imagem1 = require("../assets/img/avatar-01.png")
const imagem2 = require("../assets/img/avatar-02.png")
const imagem3 = require("../assets/img/avatar-03.png")
const imagem4 = require("../assets/img/avatar-04.png")
const imagem5 = require("../assets/img/avatar-05.png")

export const usuariosLista: Usuario[] = [
  {
    id: 1,
    nome: "Antuino Combo",
    image: imagem1,
    telefone: "5513996547852",
    email: "antuinocombo@contato.com"
  },
  {
    id: 2,
    nome: "Sopra Kimber",
    image: imagem2,
    telefone: "551399654165165",
    email: "soprakimber@contato.com"
  },
  {
    id: 3,
    nome: "Mircus Sitriks",
    image: imagem3,
    telefone: "551419816519158",
    email: "mircussitriks@contato.com"
  },
  {
    id: 4,
    nome: "Soraia Spotik",
    image: imagem4,
    telefone: "55134353535355",
    email: "soraiaspotik@contato.com"
  },
  {
    id: 5,
    nome: "Montesque Sune",
    image: imagem5,
    telefone: "5513996547852",
    email: "montesquesune@contato.com"
  },
  {
    id: 6,
    nome: "Simpar Bild",
    image: imagem5,
    telefone: "5513996547852",
    email: "simparbild@contato.com"
  },
  {
    id: 7,
    nome: "Kimbersui Nantes",
    image: imagem5,
    telefone: "5513996547852",
    email: "kimbersuinantes@contato.com"
  }
]