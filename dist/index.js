"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes_1.default);
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Helloo!!!!!!!');
});
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
//import * as express from 'express';: นำเข้าโมดูล express ซึ่งเป็นเฟรมเวิร์กสำหรับสร้างแอปพลิเคชันเว็บใน Node.js
//import * as bodyParser from 'body-parser';: นำเข้าโมดูล body-parser เพื่อช่วยในการแยกข้อมูลจากคำขอ (request) ที่เข้ามา
//const app = express();: สร้างอินสแตนซ์ของ Express ซึ่งจะทำหน้าที่เป็นเซิร์ฟเวอร์ของแอปพลิเคชัน
//app.use(bodyParser.json());: ใช้ body-parser เพื่อแยกข้อมูล JSON ที่มาจากคำขอ และเก็บข้อมูลเหล่านั้นไว้ใน req.body
//app.use(bodyParser.urlencoded({extended: false}));: ใช้ body-parser เพื่อแยกข้อมูลที่เป็น URL-encoded (เช่น ข้อมูลจากฟอร์ม HTML) และเก็บไว้ใน req.body
//const port = process.env.PORT || 3000;: กำหนดพอร์ตที่เซิร์ฟเวอร์จะฟังคำขอ ถ้าตัวแปรสภาพแวดล้อม PORT ถูกตั้งค่า มันจะใช้ค่าของตัวแปรนั้น มิฉะนั้นจะใช้พอร์ต 3000
//app.get('/', (req, res) => { ... }): กำหนดเส้นทาง (route) สำหรับคำขอ GET ที่ /. เมื่อมีคำขอ GET มาที่ URL นี้, เซิร์ฟเวอร์จะส่งข้อความ "Hello World!" กลับไป
//app.listen(port, () => { ... }): เริ่มเซิร์ฟเวอร์และให้ฟังคำขอบนพอร์ตที่กำหนด และพิมพ์ข้อความในคอนโซลเมื่อเซิร์ฟเวอร์เริ่มทำงาน
