import Container from 'components/container'
import Hero from 'components/hero'
import Meta from 'components/meta'

const Home = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' pageDesc='ブログの記事一覧' />
      <Hero title='CUBE' subtitle='アウトプットしていくサイト' imageOn />
    </Container>
  )
}

export default Home
