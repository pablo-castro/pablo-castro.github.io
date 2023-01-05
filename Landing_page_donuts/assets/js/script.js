window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function() {
        if(document.querySelector(".menuSite").style.display == 'flex') {
            document.querySelector(".menuSite").style.display = 'none';
        } else {
            document.querySelector(".menuSite").style.display = 'flex';
        }
    });
};
