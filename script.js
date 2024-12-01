//Animation about me 
var typed = new Typed('#text',{
  strings:['Analyst.','Full Stack Intern.'],
  typeSpeed:100,
  backSpeed:100,
  loop:true,
});

// SHOW SKILLS

// let skillBtn = document.querySelector('.skill_btn');
// let skillDet = document.querySelector('.about_bottom');

// skillBtn.addEventListener('click',() =>{
//   skillDet.classList.toggle('show_skills');
// });

// sticky nav
let nav = document.querySelector('nav');
window.addEventListener('scroll',() =>{
  if(window.scrollY > 100){
    nav.classList.add('sticky_nav');
  }
  else{
    nav.classList.remove('sticky_nav');
  }
});

// CONTACT ME SECTION 

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit',(event) => {
  event.preventDefault();
  const name=document.getElementById('name').value;
  const email=document.getElementById('name').value;
  const message=document.getElementById('name').value;

  //Here, you can implement your preferred method of sending the form data (e.g., 
  //using AJAX or a server-side script)
  console.log('Form data:', {name, email, message});
  alert('Your Message has been sent successfully!');
});



