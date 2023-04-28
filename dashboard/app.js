// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbarParts");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

function redirectToReactPage() {
    window.location.href = 'https://housesweeper.ca/signin';
  }

let section = document.querySelectorAll("section");
// console.log(section);
let navLink = document.querySelectorAll(" nav a ");
let linking = document.getElementsByTagName("a")

// console.log(linking);
window.onscroll = ()=> {
   section.forEach(sec=>{
    // console.log(sec);
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id")
    
    

    if(top >= offset && top < offset + height){
        navLink.forEach(links => {
            links.classList.remove("active");
            document.getElementById(id).classList.add("active")
            document.querySelector("nav a[href*=" + id + "]").classList.add("active");

            // if(id == linking){
            //     console.log(id)
            //     // document.getElementById(id).style.color = "blue"


            // }
           
            // debugger
            // document.querySelector('header nav a[href* =' + id + ']').classList.add("active");

        })
    }
   })
}