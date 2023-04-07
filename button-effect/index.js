const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pagey - btn.offsetTop;
    console.log(x);

    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
});