import style from './card.module.css'
import cardback from '../../assets/cardback.jpg'

const cardColor = {
    bug: '#92bd2d',
    grass: '#5FBD58',
    dark: '#595761',
    dragon: '#0C69C8',
    electric: '#F2D94E',
    fairy: '#EE90E6',
    fighting: '#D3425F',
    fire: '#FBA54C',
    flying: '#A1BBEC',
    ghost: '#5F6DBC',
    ground: '#DA7C4D',
    ice: '#75D0C1',
    normal: '#A0A29F',
    poison: '#B763CF',
    psychic: '#FA8581',
    rock: '#C9BB8A',
    shadow: '#595761',
    steel: '#5695A3',
    water: '#539DDF',
}

export function Card({ tipo, children, flip, ...props }) {
    return <div className={style.container}>
        <div className={`${style.flip} ${flip ? style.back : ''}`}>
            <div style={{ backgroundColor: cardColor[tipo] }} {...props} >
                {children}
            </div>
            <div className={style.back} style={{ backgroundImage: `url(${cardback})` }}>

            </div>
        </div>
    </div>
}