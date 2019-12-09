const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{ 
    let url = ctx.url;   //获取请求地址

    //从request获取GET请求
    let request = ctx.request;
    let req_query = request.query;   //返回的是格式化好的参数
    let req_querystring = request.querystring; 　　//返回的是一个对象字符串

    //从上下文ｃｔｘ中回去GET请求
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})
app.listen(3000)