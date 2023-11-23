const carousel = document.querySelector(".postcard-collections2 .wrapper .carousel");
const firstImg = carousel.querySelectorAll(".postcard-collections2 .wrapper img")[0];
const arrowIcons = document.querySelectorAll(".postcard-collections2 .wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    //showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

// Convert NodeList to array
const arrowIconsArray = Array.from(arrowIcons);

arrowIconsArray.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; //getting firt img width $ adding 14 margin value
        //if clicked icon is left, reduce width value from the carousel scroll left, else add to it
        carousel.scrollLeft += icon.id == "leftIconPostcardCollection" ? -firstImgWidth : firstImgWidth;

        setTimeout(() => {
            showHideIcons();
        }, 60);
    });
});

const autoSlide = () => {
    //if there is no image left to scroll then return from here
    if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth) return;

    positionDiff = Math.abs(positionDiff); //making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    //getting difference value that needs to add or reduce from carousel left to take the middle img centered
    let valDifference = firstImgWidth - positionDiff;
    if (carousel.scrollLeft > prevScrollLeft) {
        //if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    //if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    //updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    //scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    let currentPosition = e.pageX || e.touches[0].pageX;
    positionDiff = currentPosition - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    isDragging = false;
    if (!isDragging) return;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
