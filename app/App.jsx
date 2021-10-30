import { Switch, Route, Redirect } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import { GlobalStyles } from './styles.js'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

const App = () => (
  <HelmetProvider>
    <GlobalStyles />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={About} />
      <Redirect to="/" />
    </Switch>
  </HelmetProvider>
)

export default App
