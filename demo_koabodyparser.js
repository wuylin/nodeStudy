//koa-bodyparser中间件

const Koa = require('koa');
const bodyparser = require('koa-bodyparser')
const app = new Koa();

app.use(bodyparser())

app.use(async(ctx)=>{ 
    if(ctx.url === '/' && ctx.method === 'GET'){
        let html = `
            <h1>这里使用ｐｏｓｔ请求发送一个表单</h1>
            <form action="/" method="post">
                <span>姓名</span><input type="text" name="name"/><br>
                <span>年龄</span><input type="text" name="age"/><br>
                <span>技术</span><input type="text" name="skill"/><br>
                <button type="submit">提交</button>
            </form>
        `
        ctx.body = html;
    }else if(ctx.url === '/' && ctx.method === 'POST'){
        let postData = ctx.request.body;
        ctx.body = postData
    }else{
        ctx.body = `<h1 style='color:red'>４０４啦　</h1>`
    }
});

app.listen(3000,()=>{
    console.log('服务已经启动')
})
