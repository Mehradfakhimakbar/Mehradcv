function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  document.body.appendChild(star);

  star.style.left = Math.random() * window.innerWidth + "px";
  
 
  const size = Math.random() * 5 + 5;
  star.style.width = size + "px";
  star.style.height = size + "px";

  
  const duration = Math.random() * 4 + 4;
  star.style.animationDuration = duration + "s";

  setTimeout(() => {
    star.remove();
  }, duration * 1000);
}

setInterval(createStar, 200); 
