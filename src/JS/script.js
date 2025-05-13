let links = document.querySelectorAll(".products .filter li");


links.forEach((p)=>{
    p.onclick = () => {
      document.querySelector(".products .filter li.active").classList.remove("active");
      p.classList.add("active");
      let tab = p.getAttribute("data-active");
      document.querySelector(".cards.active-tab").classList.remove("active-tab");
      document.querySelector(tab).classList.add("active-tab");
    
    }
  
  })