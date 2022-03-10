const items = document.querySelectorAll(".projects .projects-container .project");

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom >= 
           (window.innerHeight ||
            document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth ||
        document.documentElement.clientWidth)
    );
};

const run = () =>
   items.forEach(item => {
       if (isInViewport(item)) {
           item.classList.add('show');
       }
   });

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);




// CURSOR

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  // console.log(e)
});
window.addEventListener("scroll", () => {
  const fromTop = cursor.getAttribute("data-fromTop");
  cursor.style.top = scrollY + parseInt(fromTop) + "px";
  console.log(scrollY);
});
window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
    void cursor.offsetWidth; // trigger a DOM reflow
    cursor.classList.add("click");
  } else {
    cursor.classList.add("click");
  }
});