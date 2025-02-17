const fs=require('fs');
fs.unlink("./mydir/data.txt",(err)=>{
    if(err){
        console.error('Error deleting file:${err}');
        return;}
        else console.log("file deleted succesfully");
    
});