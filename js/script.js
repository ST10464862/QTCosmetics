var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/* Lightbox for SkinCare  */
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// Search function for index page
function filterList() {
 var input, filter, ul, li, i, txtValue;
 input = document.getElementById('searchInput');
 filter = input.value.toUpperCase();
 ul = document.getElementById('myList');
 li = ul.getElementsByTagName('li');

 // Show the list if there's search input, otherwise hide it
 if (filter.length > 0) {
   ul.style.display = 'block';
 } else {
   ul.style.display = 'none';
 }

 // Loop through all list items, and hide those who don't match the search query
 for (i = 0; i < li.length; i++) {
   txtValue = li[i].textContent || li[i].innerText;
   if (txtValue.toUpperCase().indexOf(filter) > -1) {
     li[i].style.display = ""; // Show matching items
   } else {
     li[i].style.display = "none"; // Hide non-matching items
  

  // 1. Get the list item where you want to place the link
  const listItem = document.getElementById('myListItem1');

  // 2. Create the <a> element
  const newLink = document.createElement('a');

  // 3. Set the 'href' (the destination URL)
  newLink.href = 'Perfumes.html';

  // 4. (Optional) Set the 'target' to open in a new tab
  newLink.target = '_blank';

  // 5. Create the text content for the link
  const linkText = document.createTextNode('View Product');

  // 6. Append the text content to the link element
  newLink.appendChild(linkText);

   }
 }
}