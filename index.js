const toggle = document.querySelector('.toggle-icon');
const active = document.querySelector('.nav-links');

toggle.addEventListener('click', () =>{
	active.classList.toggle('active');
})