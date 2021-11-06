import { Helmet } from 'react-helmet-async'
import Page from '../components/Page'

const Home = () => (
  <Page>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div>This is the home page.</div>
  </Page>
)

export default Home
