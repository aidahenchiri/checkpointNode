//task1
console.log("hello word")

//task 2
const http=require("http")   /* construire serveur*/
 http.createServer((request,response)=>{
   response.end(" hello Node!!!!") /* wa9at ya5dem serveur elle affiche message  hello ...*/
}).listen(3000)


// task3
// require files system
const fs=require("fs")
// require new file with fs
fs.writeFile("welcom.txt","hello node",function(error){
if (error) throw (error)
console.log ("file created successuf")
}
)
fs.readFile("welcom.txt","utf-8",function(error,data)
{
if(error){
    console.log(error)
}
return (console.log(data))
})


