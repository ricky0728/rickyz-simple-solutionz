const b=document.querySelector('.menu'),n=document.querySelector('nav');
b?.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
document.querySelector('#quote')?.addEventListener('submit',e=>{
 e.preventDefault(); const d=new FormData(e.currentTarget);
 const subject=encodeURIComponent('Free Quote Request - '+(d.get('type')||'Project'));
 const body=encodeURIComponent(`Name: ${d.get('name')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email')}\nProject Type: ${d.get('type')}\n\nProject Details:\n${d.get('details')}`);
 window.location.href=`mailto:rickyzsimplesolutionz@gmail.com?subject=${subject}&body=${body}`;
});