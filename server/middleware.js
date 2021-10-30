import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet } from 'styled-components'

import App from '../app/App'
import generateHtml from './generateHtml'

const sheet = new ServerStyleSheet()

const middleware = (req, res) => {
  try {
    const app = (
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
    const markup = ReactDOMServer.renderToString(
      sheet.collectStyles(app)
    )
    const styleTags = sheet.getStyleTags()
    const html = generateHtml(markup, styleTags)
    res.send(html)
  } catch (error) {
    console.error(error)
    res.send(error.toString)
    res.status(500)
  } finally {
    sheet.seal()
  }
}

export default middleware
