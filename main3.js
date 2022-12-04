//Q1-----------------------------------------------------------
var childWindow;

    
    var openBtn = document.getElementById("openBtn");
    openBtn.addEventListener("click" , function(){
   
      childWindow=  window.open("https://www.youtube.com/");

    })

    var closeBtn = document.getElementById("closeBtn");
    closeBtn.addEventListener("click" , function (){
    childWindow.close("https://www.youtube.com/");
  })
  
  //Q2---------------------------------------------------------
 
//   var startBtn = document.getElementById("startClock");
//   function showAlert(){
    
//     startBtn.addEventListener("click" , function(){
//         alert("start a clock");

//     })
//   }
// showAlert();
// function getTime(){
//     var date = new Date();

//     console.log( date.toLocaleTimeString());

// }

// setInterval(getTime , 1000);
//Q3--------------------------------------------------------------------------

function seeWindowParagraph(){
    var newWindow;
    setTimeout(function(){

        var newWindow = window.open("");

        var str = " <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum neque earum harum nostrum in iusto, reprehenderit beatae! Corporis autem nam facilis voluptas est enim sapiente tenetur debitis rerum vitae vero asperiores itaque, explicabo commodi suscipit, laboriosam repudiandae dolores! Nisi exercitationem ipsam nesciunt distinctio, dolores natus sit aliquid hic perspiciatis pariatur?</p>";
        
        newWindow.document.write(str);
        var charIterator = 0;
        // setInterval(function(){
        //    str[charIterator];
        //    charIterator++ ;
        //   newWindow.console.log(str[charIterator] ); 
        // }, 1000);

         
        var btn = "<button id = 'myBtn'> close window </button>";
          newWindow.document.write(btn);
          newWindow.document.getElementById('myBtn').addEventListener("click" , function(){
              newWindow.close("http://127.0.0.1:5500/js-day3/index3.html");
          })
        
    }, 3000);
}
//Q4--------------------------------------------------------------------------
function scrolling(){
    console.log(scrollY);
    if(scrollY > 777){

        alert("hi")
    }
}

//Q5---------------------------------------------------------------------------------
function startClock(){
var newWindow;
     newWindow = window.open("https://www.youtube.com/");
    newWindow.alert("hello message");
setTimeout(function(){
   newWindow.close("https://www.youtube.com/");
} , 5000);
}
//Q6-----------------------------------------------------------------------------------------

function showScroll(){
       var myWindow = window.open("" ,"height:1900" ,"width:1800");
        myWindow.document.body.style.overFlowY = "scroll"; 
}
        
    
   
