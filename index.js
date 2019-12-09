const Koa = require('koa')
let app = new Koa();
//ctx是koa的自带的对象
app.use(async(ctx)=>{
    ctx.body = 'hello world'
})
app.listen(3000);
console.log('app is listening 3000')