//SibarMINI
document.querySelector('#checkbox').addEventListener('click',function(){
        document.querySelector('body').classList.toggle("darkMode");
        document.querySelector('.theme--dark').classList.toggle("changeOp");
      
});
// header

window.onscroll = function () {
        //code taoj hieu ung truot header khi scroll
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //     document.getElementById("headerMain").style.background = " #fff";
            document.getElementById("headerMain").style.background = " #072026";

            document.getElementById("headerMain").style.boxShadow = " 0 5px 15px rgba(0,0,0,0.1)";
            document.getElementById("headerMain").style.transform = "  translateY(0)";
        } else {
                document.getElementById("headerMain").style.background = " none";
                document.getElementById("headerMain").style.boxShadow = "none";
                document.getElementById("headerMain").style.transform = "  translateY(-5px)";
        }
    }

  