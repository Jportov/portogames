import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { BannerImg, Infos } from './styles'
import { formataPreco } from '../ProductList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <BannerImg style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreco(game.prices.old)}</span>
          )}
          {game.prices.current && <>por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            variant="primary"
            type="button"
            title="Clique aqui para adicinar ao carrinho"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </BannerImg>
)

export default Hero
