// Small interactivity: theme toggle and minimal behavior
document.addEventListener('DOMContentLoaded',function(){
  const btn=document.getElementById('themeToggle');
  if(btn){btn.addEventListener('click',()=>{document.body.classList.toggle('light');document.body.classList.toggle('dark');});}
});
