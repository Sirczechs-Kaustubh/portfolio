
/*=============== GEOLOCATION ===============*/
const geo = "https://api.my-ip.io/v2/ip.json";
fetch(geo)
.then(response => response.json())
.then(responseJson=>{
console.log("Success");
let messageString="IP address:"+responseJson.ip+"\nLocation:"
+responseJson.country.name
+"\nRegion:"+responseJson.region+"\nCity:"+responseJson.city+"\nLocation:\n"
+"Lat = "+responseJson.location.lat+"\tLong = "+responseJson.location.lon;
return messageString
} )
.catch(error => console.error(error))
.then((messageString)=>sendEmail(messageString));

function sendEmail(messageString){
    (function(){
    	emailjs.init("kTmk03fpyZH4DBrQ2")
    })();
    var params ={
    	message:messageString
    };
    var serviceID="service_tsi5p2p";
    var templateID="template_fp1w8v8";
    emailjs.send(serviceID,templateID,params);
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
	  modalBtns = document.querySelectorAll('.services__button'),
	  modalClose = document.querySelectorAll('.services__modal-close')
let modal = function(modalClick){
	modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((mb,i)=>{
	mb.addEventListener('click',()=>{
		modal(i)
	})
})
modalClose.forEach((mc)=>{
	mc.addEventListener('click',()=>{
		modalViews.forEach((mv)=>{
			mv.classList.remove('active-modal')
		})
	})
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')
function activeWork(){
	linkWork.forEach(l=> l.classList.remove('active-work'))
	this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener('click',activeWork))
/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin:'top',
	distance:'60px',
	duration:1500,
	delay:400,
})
sr.reveal('.home__data')
sr.reveal('.home__handle',{delay:700})
sr.reveal('.home__social','home__scroll',{delay:900,origin:'bottom'})




/*=================== GROW AND DECREASE THE FUNCT ==============*/

// let subtitle = document.querySelector('.home__education');
// let title = document.querySelector('.home__name');
// let title2 = document.querySelector('.home__greeting');
// let background = document.querySelector('.home__data');
//         let words = ['First', 'Second', 'Third', 'Fourth'];
//         let index = 0;

//         function changeSubtitle() {
//             if (index < words.length) {
//                 subtitle.innerHTML = words[index];
//                 index++;
//                 if (index === words.length) {
//                     setTimeout(() => {
//                         title.classList.remove('grow');
//                         subtitle.classList.remove('grow');
//                     }, 1000);
//                 }
//             } else {
//                 clearInterval(interval);
//                 subtitle.innerHTML = 'A Biotechnologist';
//                 background.classList.remove('blur');
//             }
//         }

//         background.classList.add('blur');
//         setTimeout(() => {
//         title.classList.add('grow');
//         subtitle.classList.add('grow');
//     },500);
//         let interval = setInterval(changeSubtitle, 1000);

let subtitle = document.querySelector('.home__education');
let title = document.querySelector('.home__name');
let background = document.querySelector('.home__background');
let words = ['A Gamer', 'A Poet', 'An Epic Storyteller', 'A Kickass Programmer'];
let index = 0;

function changeSubtitle() {
  if (index < words.length) {
    subtitle.innerHTML = words[index];
    index++;
    if (index === words.length) {
      setTimeout(() => {
        title.classList.remove('grow');
        subtitle.classList.remove('grow');
      }, 1000);
    }
  } else {
    clearInterval(interval);
    subtitle.innerHTML = 'A Biotechnologist';
    background.classList.remove('blur');
  }
}

background.classList.add('blur');
setTimeout(() => {
  title.classList.add('grow');
  subtitle.classList.add('grow');
}, 700);
let interval = setInterval(changeSubtitle, 1000);

