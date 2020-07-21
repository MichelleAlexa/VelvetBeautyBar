function openNav() {
   document.getElementById("mySidebar").style.width = "100%";
   document.getElementById("main").style.marginRight = "350px";
   document.getElementById("main").style.display = "none";
}

function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginRight = "0";
   document.getElementById("main").style.display = "block";
}

function closeToggle() {
   document.getElementById("mySidebar").style.display = "none";
   document.getElementById("main").style.display = "block";
   location.reload();
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
         dropdownContent.style.display = "none";
      } else {
         dropdownContent.style.display = "block";
      }
   });

   

}