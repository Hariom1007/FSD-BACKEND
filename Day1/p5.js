const fs=require('fs');
const write=()=>{
    const data="hello hariom";
    fs.writeFile("./data.txt",data,(err)=>{
        if(err) console.log(err);
        else console.log("file upadated succesfully");
    });
}
write();