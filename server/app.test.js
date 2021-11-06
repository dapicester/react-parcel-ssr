import request from 'supertest'
import app from './app'

it('works', async () => {
  let response = await request(app).get('/')
  expect(response.statusCode).toBe(200)

  response = await request(app).get('/about')
  expect(response.statusCode).toBe(200)
})
