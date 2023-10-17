/*******************
 * Intro-Level-1_14
 ******************/
console.log("%c Intro-Level-1_14", "color: green");

// let a = 100;
// let b = 3.14;
// let c = -15
// let d = "hello";
// let e = "false"
// let f = 1 + 7 + 3.14
// let g = 0;
// let h = -0;
// let i = NaN;
// let j = null;
// let k = false;

// console.log(Boolean(a) + " " + Boolean(b) + " " + Boolean(c) + " " + Boolean(d) + " " + Boolean(e) + " " + Boolean(f) + " " + Boolean(g) + " " + Boolean(h) + " " + i + " " + j + " " + Boolean(k));

// let a = Boolean(100);
// let b = Boolean(3.14);
// let c = Boolean(-15);
// let d = Boolean("hello");
// let e = Boolean("false");
// let f = Boolean(1 + 7 + 3.14);
// let g = Boolean(0);
// let h = Boolean(-0);
// let i = NaN;
// let j = null;
// let k = Boolean(false);

// console.log(a, b, c, d, e, f, g, h, i, j, k);
// console.log(Boolean(100), Boolean(3.14), Boolean(-15), Boolean("hello"), Boolean("false"), Boolean(1 + 7 + 3.14), Boolean(0), Boolean(-0), NaN, null, Boolean(false));


/*******************
 * Intro-Level-1_15
 ******************/
console.log("%c Intro-Level-1_15", "color: green");

// let num = 5;
// let anotherNum = 8;

// console.log(num == anotherNum);
// console.log(num > anotherNum);
// console.log(num < anotherNum);
// console.log(num >= anotherNum);
// console.log(num <= anotherNum);
// console.log(num >= anotherNum);
// console.log(num == "5");
// console.log(num != 8);
// console.log(num != "5");


/*******************
 * DOM-Level-1_1
 ******************/
console.log("%c DOM-Level-1_1", "color: green");

// let myText = "Hello again"
// let vorname = "Suat";
// let nachname = "Ucar";

// document.write("<h1>Hello World</h1>" + "<p>Have a nice day!</p>" + myText + "<br><br><br>");

// document.write("Hallo, ich bin " + vorname + " " + nachname)


/*******************
 * DOM-Level-1_2
 ******************/
console.log("%c DOM-Level-1_2", "color: green");

// document.body.querySelector("#info").innerHTML = "<h1>Hello World</h1>";
// document.body.querySelector("#info").innerHTML = "<h2>How are you?</h2>";
// document.write(document.body.querySelector("#info").innerHTML = "Hello World");
// document.body.querySelector("#container").innerHTML = "<p>start of the element</p>";
// document.write("end of the element");


/*******************
 * DOM-Level-1_3
 ******************/
// console.log("%c DOM-Level-1_3", "color: green");

// let gallery = document.body.querySelector("#gallery");

// gallery.innerHTML ='<figure><img src="https://picsum.photos/600/300?random=1" alt="Random Pic 1" /><figcaption>Fig.1</figcaption></figure><p>&nbsp;</p><p>&nbsp;</p><figure><img src="https://picsum.photos/600/300?random=2" alt="Random Pic 2" /><figcaption>Fig.2</figcaption></figure><p>&nbsp;</p><p>&nbsp;</p><figure><img src="https://picsum.photos/600/300?random=3" alt="Random Pic 3" /><figcaption>Fig.3</figcaption></figure>';


/*******************
 * DOM-Level-1_5
 ******************/

document.querySelector("#loc").textContent = document.URL;

let loc = document.body.querySelector("#loc");

function myFunction(){
    var style = loc.style.display;
        if(style == 'block')
        	{
            loc.style.display='none';
        	}
    	else{
            loc.style.display='block';
        	}
}