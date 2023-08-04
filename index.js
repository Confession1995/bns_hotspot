const express = require("express");
const app = express();
const axios = require('axios');
app.get("/", (req, res) => {
    var result = res;
    axios.get('https://bns.qq.com/cp/a20230706xrsd/rank.json').then((res) => {
        var sumcount = 0;
        var one=0;
        var two=0;
        var three=0;
        // console.log(res)
        var list=res.data;
        for(var i=0;i<list.length;i++){
            sumcount=sumcount+Number(list[i].iTicket);
            if(i==0){
                one=list[i].iTicket;
            }
            if(i==1){
                two=list[i].iTicket;
            }
            if(i==2){
                three=list[i].iTicket;
            }
        }
        result.status(200).send(`
        <html>
        <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
          <head>
            <title>bns热榜总和</title>
          </head>
          <body style=" text-align: center; margin-top: 15%;">
            <h1>总金额:`+sumcount+`</h1><br><br>
            <h3>No.1 `+one+`&nbsp;&nbsp;No.2 `+two+`&nbsp;&nbsp;No.3 `+three+`</h3><br>
            <h6>本页面将于活动结束后下线</h6><br>
            <h7>本页面为排行榜数据仅统计上榜数据,未上榜富哥无法统计</h7>
          </body>
        </html>
      `);


    })




});
app.listen(80, () => {
    console.log("Server is running on port 80");
});