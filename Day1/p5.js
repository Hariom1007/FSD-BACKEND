const fs=require('fs');
const write=()=>{
    const data=" I am Hari om Upadhyay";
    fs.writeFile("./mydir/data.txt",data,(err)=>{
        if(err) console.log(err);
        else console.log("file upadated succesfully");
    });
}
write();