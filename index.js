const endDate="10 December 2023 2:00 PM"
document.querySelector("#end-date").innerHTML=endDate;
const inputs= document.querySelectorAll("input")


function clock(){
  const end=new Date(endDate);
  const now= new Date();
  const diff=(end-now)/1000;
  //covert into days
  inputs[0].value = Math.floor(diff/3600/24);
  console.log(diff);
  //convert into hours
  inputs[1].value = Math.floor(diff/3600)%24;
  //convert into minutes
  inputs[2].value = Math.floor(diff/60)%60;
  //convert into seconds
  inputs[3].value = Math.floor(diff) %60;
}
clock();
setInterval(()=>{
   clock();
},1000)