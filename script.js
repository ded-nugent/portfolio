$(document).ready(function(){


    $(window).scroll(function(){
        $("#menu").css("opacity", 1 - $(window).scrollTop() / 250);
      });

    const textPath = document.querySelector("#text-path");
    const textPath2 = document.querySelector("#text-path2");
    const textPath3 = document.querySelector("#text-path3");

    const h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    document.addEventListener("scroll", e => {
    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    textPath.setAttribute("startOffset", (-percent * 40) + 1200)
    textPath2.setAttribute("startOffset", (percent * 40) - 2100)
    textPath3.setAttribute("startOffset", (-percent * 40) + 3600)
    });

});