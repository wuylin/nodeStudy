//获取post请求的步骤
//1．解析ｃｔｘ中的原生nodex.js对象req
//2．将ｐｏｓｔ表单数据解析成querystring字符串
//3．将字符串装花城ＪＳＯＮ格式


//ctx.request 和 ctx.req　的区别
//ctx.request是koa中已经封装好的请求对象
//ctx.req是context提供的原生的node.js 的 HTTP请求对象，可以得到更多的内容．

//ctx.method属性可以获得请求的类型

const Koa = require('koa');
const app = new Koa();

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
        let postData = await parsePostData(ctx)
        ctx.body = postData
    }else{
        ctx.body = `<h1 style='color:red'>４０４啦　</h1>`
    }
});

function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try {
            let postData = '';
            ctx.req.addListener('data',(data)=>{
                postData += data;
            });
            ctx.req.on('end',()=>{
                let parseQuery = parseQueryStr(postData)
                resolve(parseQuery)
            })
        } catch (error) {
            reject(reeor)
        }
    })
}

function parseQueryStr(queryStr){
    let queryData = {};
    let queryStrList = queryStr.split('&');
    queryStrList.forEach(ele => {
        let queryEleArr = ele.split('=');
        queryData[queryEleArr[0]] = decodeURIComponent(queryEleArr[1])
    });
    return queryData
}

app.listen(3000,()=>{
    console.log('服务已经启动')
})
