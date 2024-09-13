import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const contactEmail = document.querySelector('.contact-input-email');
const contactComment = document.querySelector('.contact-input-comments');
const contactForm = document.querySelector('.contact-form');
const label = document.querySelector('.form-field-label');
const modalBackdrop = document.querySelector(".modal-overlay");
const modalBackdropBg = document.querySelector('.modal-backdrop');
const modalTitle = document.querySelector(".modal-title");
const modalText = document.querySelector(".modal-message");
const modalBtn = document.querySelector('.modal-close-btn');
const body = document.body;


contactForm.addEventListener("submit", getContactInfo);


function getContactInfo(event) {
  
  event.preventDefault();

 
  const userEmail = event.target.elements.email.value.trim();
  const userComment = event.target.elements.comments.value.trim();

  
  const url = "https://portfolio-js.b.goit.study/api/requests";
  const data = {
    email: `${userEmail}`,
    comment: `${userComment}`,
  };

  
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      
      if (!response.ok) {
        return iziToast.error({
          title: "Error",
          message: `Sorry, try again!`,
          messageColor: "white",
          messageSize: "16",
          backgroundColor: "red",
          theme: "dark",
          position: "bottomRight",
        });
      }
 
      return response.json();
    })
    .then((data) => {

      
      
      modalBackdrop.classList.remove("visually-hidden");
      modalBackdrop.style.display = "block";
      modalBackdropBg.classList.remove("visually-hidden");
      body.classList.add("modal-open");
     
      modalTitle.textContent = data.title;
      modalText.textContent = data.message;
    
      contactForm.reset();
     
      label.textContent = "";
      
      contactEmail.style.borderBottomColor = "rgba(250, 250, 250, 0.20)";
    })


    
    .catch((error) => {
     
      return iziToast.error({
        title: "Error",
        message: `Sorry,  network is fall, check your modem and try again!`,
        messageColor: "white",
        messageSize: "16",
        backgroundColor: "red",
        theme: "dark",
        position: "bottomRight",
      });
    });
}


contactEmail.addEventListener("blur", checkEmail);

function checkEmail(event) {
 
  const userEmail = event.target.value.trim();
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (userEmail === "") {
    return;
  }
  if (emailRegex.test(userEmail)) {
    
    label.textContent = "Succes!";
    contactEmail.style.borderBottomColor = "#3CBC81";
    label.style.color = "#3CBC81";
  } else {
    
    label.textContent = "Invalid email, try again";
    contactEmail.style.borderBottomColor = "#E74A3B";
    label.style.color = "#E74A3B";
  }
}


contactComment.addEventListener("input", checkCommentLength);

function checkCommentLength(event) {
 
  const maxLength = parseInt(this.getAttribute("maxlength"));
  
  const userComment = event.target.value.trim();
 
  if (userComment > maxLength) {
    userComment = userComment.slice(0, maxLength); 
  }
 
  contactComment.style.whiteSpace = "nowrap";
  contactComment.style.overflow = "hidden";
  contactComment.style.textOverflow = "ellipsis";
}


modalBtn.addEventListener("click", closeModal);
modalBackdropBg.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc" || event.code === 27) {
    closeModal();
  }
});


function closeModal() {
  modalBackdrop.classList.add("visually-hidden");
  modalBackdrop.style.display = "none";
  modalBackdropBg.classList.add("visually-hidden");
  modalBackdropBg.style.display = "none";
  body.classList.remove("modal-open");
}



document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('.contact-header');

  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        header.classList.add('active'); 
        observer.unobserve(header); 
      }
    });
  }, {
    threshold: 0.5 
  });

  observer.observe(header);
});



// анимация заголовка //


document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.contact-header');
  
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header.classList.add('active'); 
          observer.unobserve(header); 
        }
      });
    }, {
      threshold: 0.5 
    });
  
    observer.observe(header);
  });