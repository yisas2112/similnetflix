import Button from '../Button'
import './index.scss'

const truncate = (text, max) => {
  return text.length > max ? text.substr(0, max) + '...' : text
}

const Banner = ({ poster }) => {
  return (
    <div id='Banner' style={{ backgroundSize: 'cover', backgroundImage: `url('http://image.tmdb.org/t/p/w500/${poster.backdrop_path}')` }}>
      <div>
        <h1>{poster.title || poster.name || poster.original_title}</h1>
        <Button content='Play' path='#/'/>
        <Button content='My List' path='#' />
        <h2>{truncate(poster.overview, 120)}</h2>
      </div>
      <div />
    </div>
  )
}

export default Banner