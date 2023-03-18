let box = document.querySelector('.box');

function createCard(image, title, date, id){
    box.innerHTML += `<div class="main-card d-flex flex-column align-items-center justify-content-center gap-2" data-aos="fade-up">
                    <img src="${image}"
                        alt="spider-man">
                    <p class="text-center text-light">${title}</p>
                    <p class="text-light">${date}</p>
                    <button class="btn btn-secondary info" data-id="${id}">More Info</button>
                </div>`; 
}

