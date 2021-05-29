var imagens_para_banner = [
"/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg",
"/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg", 
"/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg", 
"/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg" , 
"/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg"
]

var tam_imagens_para_banner = imagens_para_banner.length;

var i =1;

document.addEventListener("DOMContentLoaded", function(event) {

    $("#select_idiomas").val($("html").attr("lang"));

    setInterval(function(){
       
        if(i<=tam_imagens_para_banner-1)      
         {
           Rodar_banner();
         }
         else   
         { 
            i=0;

           Rodar_banner();

         }  
        
           
           
    }, 3000)



});


function Rodar_banner(){
            
            //$("#banner").fadeOut("slow");


            //$("#banner").attr("visibility", 'visible').attr("display","block")
            
            $("#banner").fadeOut("fast").attr("src", "http://www.instagram.com" + imagens_para_banner[i]);
            $("#banner").fadeIn("slow")
           
            
            i++;
}

//<img src="https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png"/>
            