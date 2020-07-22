 function toggle() {
     var btn = document.getElementById("abc");
     if (btn.innerHTML == "menu") {
         document.getElementsByTagName("ul")[0].style.left = "0px";
         btn.innerHTML = "close";
         btn.style.transform = "rotate(180deg)";
     } else {
         document.getElementsByTagName("ul")[0].style.left = "-300px";
         document.getElementById("abc").innerHTML = "menu";
         btn.style.transform = "rotate(0deg)";
     }
 }


 var index = 1; // Global Scope -----  2 points
 slideShow(index);
 //A custom function using parameter-5points
 function incrementSlides(n) {
     slideShow(index += n);
 }

 function currentSlides(n) {
     slideShow(index = n);
 }

 function slideShow(n) {
     var i;
     var slides = document.getElementsByClassName("mySlides"); //Use getElementsByClassName() -- 2 Points
     var circles = document.getElementsByClassName("circle");
     if (n > slides.length) {
         index = 1;
     }
     if (n < 1) {
         index = slides.length;
     }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (i = 0; i < circles.length; i++) {
         circles[i].className = circles[i].className.replace(" active", ""); // Built in Property for String Object---- 2 Points
     }
     if (slides.length > 0) {
         slides[index - 1].style.display = "block";
         circles[index - 1].className += " active";
     }
 }
 window.onload = function () { //Use a built‐in method for the window object -- 2 POINTS
     currentSlides(1);
 };

 $(document).ready(function () { //Use a built‐in method for the DOCUMENT object ---- 2 POINTS
     currentSlides(1);
     var quotes = [ // use an array -- 2 points
         {
             quote: " All you need is love. But a little chocolate now and then doesn't hurt. ",
             name: "Charles M. Schulz "
        },
         {
             quote: "Love is when you have a really amazing piece of cake, and it’s the very last piece, but you let him have it. ",
             name: "E. Lockhart"
 	    },
         {
             quote: "Flowers are like friends; They bring color to your world.",
             name: "Confucius"
 	    },
         {
             quote: "Earth laughs in flowers.",
             name: "Ralph Waldo Emerson"
 	    },
         {
             quote: "Flowers don’t tell, they show.",
             name: "Stephanie Skeem"
 	    },
         {
             quote: "Flowers are the music of the ground. From earth’s lips spoken without sound.",
             name: " Edwin Curran"
 	    },
         {
             quote: "Giving is the master key to success, in all applications of human life.",
             name: " Bryant McGill"
 	    },
         {
             quote: "For it is in giving that we receive.",
             name: "Francis of Assis"
 	    },
         {
             quote: "No one is useless in this world who lightens the burdens of another.",
             name: "Charles Dickens"
 	    },
         {
             quote: "We make a living by what we get. We make a life by what we give.",
             name: "Winston S. Churchill"
 	    },
         {
             quote: "When we give cheerfully and accept gratefully, everyone is blessed.",
             name: "Maya Angelou"
 	    },
         {
             quote: "Those who are happiest are those who do the most for others.",
             name: "Booker T. Washington"
 	    },
         {
             quote: "There is nothing better than a friend, unless it is a friend with chocolate.",
             name: "Linda Grayson"
 	    },
         {
             quote: "Chocolate says I am sorry so much better than words.",
             name: "Rachel Vincent"
 	    },
         {
             quote: "Anything is good if it's made of chocolate.",
             name: "Jo Brand"
 	    },
         {
             quote: "If there's no chocolate in Heaven, I'm not going.",
             name: "Jane Seabrook"
 	    },
         {
             quote: "If we could see the miracle of a single flower clearly our whole life would change.",
             name: "Buddha"
 	    },
         {
             quote: "A rose can never be a sunflower, and a sunflower can never be a rose. All flowers are beautiful in their own way, and that’s like women too.",
             name: " Miranda Kerr"
 	    },
         {
             quote: "Think of giving not as a duty but as a privilege.",
             name: "John D. Rockefeller Jr."
 	    },
         {
             quote: "If you love someone, the greatest gift you can give them is your presence.",
             name: "Thich Nhat Hanh"
 	    },
         {
             quote: "Some gifts are big. Other are small. But the ones that come from the heart are the best gifts of all.",
             name: "Tinku Razoria"
 	    },
         {
             quote: " Expressing gratitude to others is a gift to them. Experiencing gratitude is a gift to yourself.",
             name: "Michael Josephson"
 	    },
         {
             quote: " Sometimes the perfect gift is a cheerful smile",
             name: "George Carlin"
 	    },
         {
             quote: "The best gifts in the world are not in the material objects one can buy from the store, but in the memories we make with the people we love.",
             name: "Amanda"
 	    }
    ];
     $("#quoteButton").click(function (evt) { // use a click event-- 2 points
         var writter = $("#writter").text(); //Use 10 jQuery method ---- 15 Points (including all jquery methods in all js fileS)
         evt.preventDefault();
         var timeAnimation = 400;
         var randomNumber = Math.floor(Math.random() * quotes.length); // Use a built in method for Math object (Math.Random) -- 2points 
         for (i = 0; i <= quotes.length; i += 1) { // Use a For Loop - 5 Points
             var newQuote = quotes[randomNumber].quote;
             var newWritter = quotes[randomNumber].name;
             $("#newQuote").fadeOut(timeAnimation, function () {
                 $("#newQuote").html("");
                 $("#newQuote").append("<p class='p_scnd'>" + newQuote + "</p>" + '<p id ="writter">' + "-" + newWritter + "</p>");
                 $("#newQuote").fadeIn(timeAnimation);

             });
         };
     });

     function timer() {
         var current = new Date(); //Create a Date object -  5 Points
         var end_Time = new Date("10 August 2019 9:56:00 GMT+01:00");

         current = (Date.parse(current) / 1000);
         end_Time = (Date.parse(end_Time) / 1000);
         var time_Left = end_Time - current;

         var days = Math.floor(time_Left / 86400); // use inbuilt method for math object(Math.floor)-- 2 points
         var hours = Math.floor((time_Left - (days * 86400)) / 3600);
         var minutes = Math.floor((time_Left - (days * 86400) - (hours * 3600)) / 60);
         var seconds = Math.floor((time_Left - (days * 86400) - (hours * 3600) - (minutes * 60)));

         if (hours < "10") {
             hours = "0" + hours;
         }
         if (minutes < "10") {
             minutes = "0" + minutes;
         }
         if (seconds < "10") {
             seconds = "0" + seconds;
         }
         $("#days").html(days + "D");
         $("#hours").html(hours + "Hrs");
         $("#minutes").html(minutes + "Min");
         $("#seconds").html(seconds + "Sec");
     }
     setInterval(function () {
             timer();
         },
         1000);



     $("#box-2a > div:gt(0)").hide();
     $("#box-2b0 > div:gt(0)").hide();
     setInterval(function () {
             $("#box-2a > div:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#box-2a");
         },
         3000);
     setInterval(function () {
             $("#box-2b > div:first").fadeOut(1000).next().fadeIn(1000).end().appendTo("#box-2b");
         },
         3000);
 });