const fs=require('fs');
fs.rmdir("mydir",(err)=>{
    if(err) console.log("error deleting directory:",err);
    else console.log("Directory deleted!");


})