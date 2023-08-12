const carousel = document.querySelector('.carousel')
FirstImg = carousel.querySelectorAll('img')[0]
arrowIcons = document.querySelectorAll('.wripper i')

let isDragStart = false, prevPageX, prevScrollLeft


const LeftArrowVew = () => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'flex'
    arrowIcons[1].style.display = carousel.scrollLeft == 2435 ? 'none' : 'flex'
}

arrowIcons.forEach(item => {
    item.addEventListener('click', () => {
        let FirstImgWidth = FirstImg.clientWidth + 5
        carousel.scrollLeft += item.id === 'Left' ? -FirstImgWidth : FirstImgWidth 
        setTimeout(() => LeftArrowVew(), 60)
   })
});

const dragStart = (e) => {
    isDragStart = true
    prevPageX = e.pageX || e.touches[0].pageX
    prevScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add('dragging')
    let posiotionDeff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - posiotionDeff;
    setTimeout(() => LeftArrowVew(), 60)

}

const draggingStop = () => {
     isDragStart = false
     carousel.classList.remove('dragging')
}


carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('touchstart', dragStart)

carousel.addEventListener('mousemove', dragging)
carousel.addEventListener('touchmove', dragging)

carousel.addEventListener('mouseup', draggingStop)
carousel.addEventListener('touchend', draggingStop)
