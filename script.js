
const container= document.getElementById('container')
const registeBtn= document.getElementById('register')
const logintBtn= document.getElementById('login')

registeBtn.addEventListener('click',()=>{
container.classList.add('active')
});
logintBtn.addEventListener('click',()=>{ 
    container.classList.remove('active')
});


