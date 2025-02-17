const fs=require('fs');
const append=()=>{
    const data="I am Hari om Upadhyay";
    fs.appendFile('./data.txt',data,(err)=>{
        if(err) console.log("not updated");
        else console.log("file updated succesfully");

    })
}
append()