const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("open");
    });



    /* Image Carousel
   let currentSlide = 0;
const carouse = document.getElementById("carousel");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;
  updateCarouse();
}

function updateCarouse() {
  carouse.style.transform = `translateX(-${currentSlide * 100}%)`;
}

 */



  /*Universities */

  
  const universities = [
    { name: "Kazan Federal University", image: "images/kazan-fe/kazan.png", slug: "kazan" },
    { name: "Ural State Medical University", image: "images/ural/ural.png", slug: "ural" },
    { name: "North Caucasian Medical Academy", image: "images/north-cau/north-caucasian_logo.jpeg", slug: "northcaucasian" },
    { name: "Altai State Medical Academy", image: "images/alati/altai_logo.webp", slug: "altai" },
     { name: "Crimea Federal Medical Academy", image: "images/cremia/creamia-logo.webp", slug: "crimeaFederal" },
    /*
    { name: "Bashkir State Medical University", image: "images/bashkir.png", slug: "bashkir" },
    { name: "Ulyanovsk State University", image: "images/ulyanovsk.png", slug: "ulyanovsk" },
    { name: "Perm State Medical University", image: "images/perm.png", slug: "perm" },
    { name: "Crimea Federal University", image: "images/crimea.png", slug: "crimea" },
    { name: "Omsk State Medical University", image: "images/omsk.png", slug: "omsk" },
    { name: "Kursk State Medical University", image: "images/kursk.png", slug: "kursk" },
    { name: "Siberian State Medical University", image: "images/siberian.png", slug: "siberian" }
     */
  ];

  let shownCount = 0;
  const perLoad = 6;

  function loadMoreUniversities() {
    const container = document.getElementById("universityGrid");
    const slice = universities.slice(shownCount, shownCount + perLoad);

    slice.forEach(university => {
      const card = document.createElement("div");
      card.className = "university-card";
      card.innerHTML = `
        <img src="${university.image}" alt="${university.name}" />
        <h3>${university.name}</h3>
        <a href="details.html?university=${university.slug}" target="_blank">
  <button>View Details</button>
</a>
      `;
      container.appendChild(card);
    });

    shownCount += perLoad;
    if (shownCount >= universities.length) {
      document.querySelector(".load-more-btn").style.display = "none";
    }
  }

  // Load first 6 on page load
  window.onload = loadMoreUniversities;



  /* -------------------------------------------------------------------------------------------------- */

