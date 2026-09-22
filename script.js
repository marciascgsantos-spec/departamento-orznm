const menuToggle=document.getElementById("menuToggle");
const menu=document.getElementById("menu");
menuToggle.addEventListener("click",()=>menu.classList.toggle("active"));
document.querySelectorAll("#menu a").forEach(link=>link.addEventListener("click",()=>menu.classList.remove("active")));
document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit",function(event){
  event.preventDefault();
  const nome=document.getElementById("nome").value;
  alert(`Obrigado, ${nome}! Sua mensagem foi preenchida com sucesso.`);
  this.reset();
});
