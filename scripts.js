setInterval(()=>{
    const timi= document.querySelector("#clock");

const time=new Date();

const hour=time.getHours();
const miniute=time.getMinutes();
const second=time.getSeconds();

timi.innerHTML=`${hour} ${miniute} ${second} `;


},100);