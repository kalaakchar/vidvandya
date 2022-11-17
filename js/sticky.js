window.addEventListener('scroll',function()
{
    
let navbar = document.getElementById('stick');
    if(window.pageYOffset>=80){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
});

