const fs=require('fs')
fs.readFile('./Rfile.txt','utf-8',(e,d)=>{
    if(e) throw e;
    console.log(d.toString())
})
