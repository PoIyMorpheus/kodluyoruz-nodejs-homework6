const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');

const app = new Koa();
const router = new Router();
const port = 3000

router.get('/', async function indexPage(ctx, next) {
    ctx.status = 200
    await next();
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./pages/index.html');
})

router.get('/about', async function aboutPage(ctx, next) {
    ctx.status = 200
    await next();
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./pages/about.html');
})

router.get('/contact', async function contactPage(ctx, next) {
    ctx.status = 200
    await next();
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./pages/contact.html');
})


app.use(router.routes())
app.listen(port)