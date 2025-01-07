const wf=require('fs')
const path=require('path')
wf.appendFile(path.join('./Rfile.txt'),' append yogithaa',(e)=>{
    if(e) throw e;
    console.log("append yogithaaaa")
})