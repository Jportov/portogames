import ProductList from '../../components/ProductList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import fifa from '../../assets/images/fifa.png'
import street from '../../assets/images/street.png'

const rpg: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Xbox Series S/X - PS5',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'Windows',
    infos: ['5%', 'R$ 290,00'],
    image: fifa
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA 23',
    system: 'Xbox Series S/X - PS5',
    infos: ['5%', 'R$ 290,00'],
    image: fifa
  }
]

const acao: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['31 / 12'],
    image: diablo
  },
  {
    id: 6,
    category: 'Aventura ',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars Jedi: Survivor',
    system: 'Windows',
    infos: ['09/12'],
    image: starWars
  },
  {
    id: 7,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    system: 'Windows',
    infos: ['05/12'],
    image: street
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'The Legend of Zelda - TOK',
    system: 'Switch',
    infos: ['18/05'],
    image: zelda
  }
]

const Categories = () => (
  <>
    <ProductList title="RPG" background="gray" games={rpg} />
    <ProductList title="Ação" background="black" games={acao} />
    <ProductList title="Aventura" background="gray" games={rpg} />
    <ProductList title="FPS" background="black" games={acao} />
  </>
)

export default Categories
