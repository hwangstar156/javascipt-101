const btn=document.querySelector('button');
const rabbitLocation=document.querySelector('.rabbit');
btn.addEventListener('click',()=>{
    rabbitLocation.scrollIntoView({ behavior:'smooth', block: 'center'});
})