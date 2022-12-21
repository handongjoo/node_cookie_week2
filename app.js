const express = require("express");
const cookieparser = require("cookie-parser");
const app = express();

app.use(cookieparser());

app.get("/set-cookie", (req, res) => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.
  
    res.cookie('name', 'sparta', {
      expires: expires
    });
    return res.status(200).end();
  });

app.get("/get-cookie", (req, res) => {
    const cookie = req.cookies;
    console.log(cookie); // { name: 'sparta' }
    return res.status(200).json({ cookie });
});

app.listen(5002, () => {
    console.log("서버가 켜졌어요!")
});