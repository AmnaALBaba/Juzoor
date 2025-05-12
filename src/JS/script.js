let links = document.querySelectorAll(".products .filter li");
// for (let i = 0; i < links.length; i++) {
//     links[i].onclick = function () {
//       // remove "active" from all links
//       for (let j = 0; j < links.length; j++) {
//         links[j].classList.remove("active");
//       }
//       // add "active" to the clicked one
//       this.classList.add("active");
//     };
//   }

links.forEach((p)=>{
    p.onclick = () => {
      document.querySelector(".products .filter li.active").classList.remove("active");
      p.classList.add("active");
      let tab = p.getAttribute("data-active");
      document.querySelector(".cards.active-tab").classList.remove("active-tab");
      document.querySelector(tab).classList.add("active-tab");
    
    }
  
  })