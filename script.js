const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll("#img");
var modalImg = document.querySelectorAll("#img01");
for (let i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}
// }
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// for (let i = 0; i < img.length; i++) {
//   img[i].onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//   }
// }