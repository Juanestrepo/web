function changeImage(imageSrc) {
  document.getElementById('mainImage').src = imageSrc;
}

document.addEventListener("scroll", (e) => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

})