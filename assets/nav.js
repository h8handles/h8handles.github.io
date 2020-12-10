const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
    //togle nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')

        //animate links
    navlinks.forEach((link, index) => {
        if(link.getElementsByClassName.animation){
            link.style.animation = '';

        } else {
            link.style.animation = `navlinkFade 0.5s ease fowards ${index / 5 + 3}s`;
        }
        
    });

    //burger animation
    burger.classList.toggle('toggle');

    });
    
}


    navSlide();