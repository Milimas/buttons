var services = document.querySelectorAll("a");
for (i = 0; i < services.length; i++) {
  services[i].onmousemove = e => {
    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  };
}
