//SibarMINI
const couting = 0;
document.querySelector('#checkbox').addEventListener('click', function () {
        document.querySelector('body').classList.toggle("darkMode");
        document.querySelector('.theme--dark').classList.toggle("changeOp");
     
                if(document.querySelector('.darkMode') !== null  ){
                        document.getElementById("headerMain").style.background = " #072026";
                }else{
                        document.getElementById("headerMain").style.background = " #fff";
                }

});
// header
window.onscroll = function () {

       

                //code taoj hieu ung truot header khi scroll
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
                       if(document.querySelector('.darkMode') !== null){
                        document.getElementById("headerMain").style.background = " #072026";
                       }else{   
                        document.getElementById("headerMain").style.background = " #fff";
                        } 
                        document.getElementById("headerMain").style.boxShadow = " 0 5px 15px rgba(0,0,0,0.1)";
                        document.getElementById("headerMain").style.transform = "  translateY(0)";
                }  else{
                        document.getElementById("headerMain").style.background = " none";
                        document.getElementById("headerMain").style.boxShadow = "none";
                        document.getElementById("headerMain").style.transform = "  translateY(-5px)";
                }
        



        //code taoj hieu ung truot header khi scroll
     
}







