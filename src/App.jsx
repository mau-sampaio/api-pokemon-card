import { useState } from 'react';
import style from './app.module.css';
import { useEffect } from 'react';
import fotoAleatoria from './assets/pokeball.png'
import { TipoPokemon } from './components/Img';
import { Card } from './components/Card/Card';
import direito from './assets/direito.png'
import esquerda from './assets/esquerda.png'
import repetir from './assets/repetir.png'


function App() {
  const [pokemon, setPokemon] = useState({})
  const [id, setId] = useState(1)
  const [flip, setFlip] = useState(true)
  const carregarPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const dadosPokemon = await response.json();
    setTimeout(() => {
      setFlip(false)
      setPokemon({
        id: dadosPokemon.id,
        img: dadosPokemon.sprites.other.dream_world.front_default ?? dadosPokemon.sprites.other['official-artwork'].front_default ?? fotoAleatoria,
        nome: dadosPokemon.name,
        tipo: dadosPokemon.types[0].type.name,
      })
    }, 500)
  }
  useEffect(() => {
    carregarPokemon(id)
  }, [id])

  const changeCard = (callback) => {
    setId(callback)
    setFlip(true)
  }

  return (
    <div className={style.tela}>
      <Card tipo={pokemon.tipo} className={style.card} flip={flip}>
        <div className={style.pokemon}>
          <img src={pokemon.img} alt={pokemon.nome} />
          <h1>{pokemon.nome}</h1>
        </div>
        <div className={style.body}>
          <TipoPokemon tipo={pokemon.tipo} />
          <span>{pokemon.tipo}</span>
        </div>
      </Card>
      <div className={style.navB}>
        <button onClick={() => changeCard((value) => value <= 1 ? 1 : value - 1)}> <img src={esquerda} alt='voltar'></img> </button>
        <button onClick={() => changeCard(Math.floor(Math.random() * 1000) + 1)} > <img src={repetir} alt='aleatorio' ></img> </button>
        <button onClick={() => changeCard((value) => value > 1000 ? 1000 : value + 1)}> <img src={direito} alt='proximo'></img>  </button>
      </div>
    </div>
  )
}

export default App
