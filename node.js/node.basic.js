
// const http = require('http')
// http.createServer(function(request, response){
//     response.writeHead(200, {'Content-Type' : 'text/html'});
//     response.end('<h1>Hello World..!</h1>');
// }).listen(3000,function(){
//     console.log('Server running at http://127.0.0.1:3000');
// });
/*
console.log('이름 : %s', '정정정')
console.log('생년월일 : %d월 %d일', 10, 14)
console.log('사는곳 : %s', '서울')
console.log('취미 : %s, %s, %s', '노래', '자전거', '요리')
*/

/*
var num = 0;
console.time('duration_sum')
for(i = 1; i <= 1000; i++){
    num += i 
}
console.timeEnd('duration_sum')
console.log('1부터 1000까지 더한 값 : %d', num)
*/



/*
console.log('argv 속성의 파라미터 수 : %d', process.argv.length)
process.argv.forEach(function(item, index){
    console.log(`${index} : ${item}`)
})
*/

/*
const {add, multiply} = require('./module1.js')
console.log('10 + 30 = %d', add(10, 30));
console.log('12 * 5 = %d', multiply(12, 5));
*/

/*
const {bigNum} = require('./module2.js')
console.log(`큰 수는 ${bigNum(100, 50)}입니다.`)
*/

/*
const {temAvg} = require('./module3.js')
let 온도 = [15.1, 15.4, 16.1, 17.5, 19.2]
console.log(`평균 온도는 ${temAvg(온도)}입니다.`)
*/

/*
const {bigOfRandom} = require('./module4.js')
let randoms = [];
for(i = 0; i < 10; i++){
randoms.push(Math.floor(Math.random() * 101))
console.log(randoms[i])
}
console.log(`제일 큰 수는 ${bigOfRandom(randoms)}입니다.`)
*/

/*
const crypto = require('crypto')
const shaHash = crypto.createHash('sha256')
shaHash.update('crypto_hash')

let output = shaHash.digest('hex')

console.log('crypto_hash :', output)
*/

/*
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "1234567890123456";
const input = "암호화할 문장";
// 암호화
const cipher = crypto.createCipheriv(algorithm, key, iv);
let cipheredOutput = cipher.update(input, "utf8", "base64");
cipheredOutput += cipher.final("base64");
// 복호화
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decipheredOutput = decipher.update(cipheredOutput, "base64", "utf8");
decipheredOutput += decipher.final("utf8");
// 출력
console.log("원래 문자열 : " + input);
console.log("암호화 : " + cipheredOutput);
console.log("암호화 해제 : " + decipheredOutput)
*/

const myURL = new URL("https://sub.example.com:8080/p/a/t/h?query=string#hash");
   console.log(myURL);
   console.log(myURL.hostname);
   console.log(myURL.port);
   console.log(myURL.pathname);
   console.log(myURL.search);
   console.log(myURL.hash);
   console.log(myURL.searchParams);