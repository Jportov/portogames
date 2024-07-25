import heroImg from '../../assets/images/fundohogwarts.png'
import Button from '../Button'
import Tag from '../Tag'

import { BannerImg, Infos } from './styles'

const Hero = () => (
  <BannerImg style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Howgarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          por R$ 190,00
        </p>
        <Button
          variant="primary"
          type="button"
          title="Clique aqui para adicinar ao carrinho"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </BannerImg>
)

export default Hero
