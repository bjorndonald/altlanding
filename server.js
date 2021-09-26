// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express')
const sslRedirect = require('heroku-ssl-redirect').default

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = parseInt(process.env.PORT, 10) || 3000

app.prepare().then(() => {
  const server = express()

  // redirect to SSL
  server.use(sslRedirect())

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.

//     const server = express()

//     // redirect to SSL
//     server.use(sslRedirect())

//     server.all('*', (req, res) => {
//       return handle(req, res)
//     })

//     server.listen(port, err => {
//       if (err) throw err
//       console.log(`> Ready on http://localhost:${port}`)
//     })
//     //   const parsedUrl = parse(req.url, true)
//     //   const { pathname, query } = parsedUrl

//     //   if (pathname === '/a') {
//     //     app.render(req, res, '/a', query)
//     //   } else if (pathname === '/b') {
//     //     app.render(req, res, '/b', query)
//     //   } else {
//     //     handle(req, res, parsedUrl)
//     //   }
//     // }).listen(port, err => {
//     //   if (err) throw err
//     //   console.log(`> Ready on http://localhost:${port}`)
//   })
// })
