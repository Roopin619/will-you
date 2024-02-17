function moveButton() {
    var button = document.querySelector('.move-aside');
    var rect = button.getBoundingClientRect();
    console.log(window.innerWidth);
    console.log("button : ", rect.right);
    var randomX = Math.floor(Math.random() * (window.innerWidth / 2));
    var randomY = Math.floor(Math.random() * (window.innerHeight / 2));

    if (rect.right + randomX + button.offsetWidth > window.innerWidth) {
        randomX = -(randomX);
    }
    if (rect.top + randomY + button.offsetHeight > window.innerHeight) {
        randomY = -(randomY);
    }

    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function handleYes() {
    var heading = document.getElementById('heading');
    var plissImage = document.getElementById('pliss-img');
    var yesImage = document.getElementById('yes-img');
    var yesNoBtnsContainer = document.getElementById('yes-no-btns-container');
    var dateBtn = document.getElementById('date-btn');

    heading.textContent = "Yeeyy ! Finally";
    plissImage.style.display = 'none';
    yesImage.style.display = 'inline-block';
    yesNoBtnsContainer.style.display = 'none';
    dateBtn.style.display = 'inline-block';
}

function redirectToCafeLink() {
    window.location.href = "https://staybloom.com/chapters/cafes-in-delhi";
}