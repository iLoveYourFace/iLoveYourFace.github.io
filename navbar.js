window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("logo").style.lineHeight = "0px";
        if (window.innerWidth < 800) {
            document.getElementById("logo").style.fontSize = "1.8em";
        } else {
            document.getElementById("logo").style.fontSize = "1.8em";
        }

    } else {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("logo").style.fontSize = "2em";
    }
}