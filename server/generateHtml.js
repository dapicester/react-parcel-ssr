import fs from 'fs'
import path from 'path'

import cheerio from 'cheerio'

const index = path.resolve(__dirname, '../app/index.html')
const html = fs.readFileSync(index).toString('utf-8')

export default function generateHtml(markup, styles) {
  const $template = cheerio.load(html)
  $template('head').append(styles)
  $template('#app').html(markup)
  return $template.html()
}
