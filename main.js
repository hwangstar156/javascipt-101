const target=document.querySelector('.target');
const vertical=document.querySelector('.vertical');
const horizontal=document.querySelector('.horizontal');
const tag=document.querySelector('.tag');

document.addEventListener('mousemove', (event)=>{
    const yCoord=event.clientY;
    const xCoord=event.clientX;
    target.style.top=`${yCoord}px`;
    target.style.left=`${xCoord}px`;
    vertical.style.left=`${xCoord}px`;
    horizontal.style.top=`${yCoord}px`;
    tag.innerHTML=`${xCoord}px,${yCoord}px`;
    tag.style.left=`${xCoord}px`;
    tag.style.top=`${yCoord}px`;t
})