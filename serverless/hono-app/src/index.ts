import { Hono } from 'hono'

const app = new Hono()

app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have access");
  }
})
   
  app.post('/', async (c) => {
      //body, headers, query parameters, middlewares, connecting to a database

    const body = await c.req.json()
    console.log(body);
    console.log(c.req.header("Authorization"));
    console.log(c.req.query("param"));
  
    return c.json({ 
      message: 'Hello, World!',
      authorization: c.req.header("Authorization"),
      param: c.req.query("param")
    })
  })

export default app
