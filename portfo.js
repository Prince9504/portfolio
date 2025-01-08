/*----------Menu Show------- */
const showMenu = (toggleId, navID) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navID)

    if(toggle && nav)
    {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
//----------Active and Remove Menu--------
const navLink = document.querySelectorAll('.navlink')

function linkActian(){
    //----------------Active Link------------
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //-------------------- Remove menu mobile--------------
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}

navLink.forEach(n => n.addEventListener('click', linkActian))

// --------------Scroll reveal animation--------------
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// ---------Scroll Home----------
sr.reveal('.home_title',{}) 
sr.reveal('.btn',{delay: 200})
sr.reveal('.homeimg',{delay: 400}) 
sr.reveal('.home_socialicon',{interval: 200})

//---------------Scroll About---------
sr.reveal('.aboutimg',{}) 
sr.reveal('.aboutsbtitle',{delay: 200})
sr.reveal('.abouttxt',{delay: 400})

//---------------Scroll Skill---------
sr.reveal('.skillsbtitle',{}) 
sr.reveal('.skilltxt',{delay: 200}) 
sr.reveal('.skilldata',{interval: 200})
sr.reveal('.skillimg',{delay: 400})


//---------------Scroll Work---------
sr.reveal('.workimg',{interval: 200}) 

//---------------Scroll Contact----------
sr.reveal('.contactinput',{interval: 200})

