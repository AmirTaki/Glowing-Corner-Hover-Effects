const cards = document.querySelectorAll(".card");


cards.forEach((card) => {
    card.addEventListener("mousemove", (e)=> {
        const x = e.pageX - card.offsetLeft;
        const y = e.pageY - card.offsetTop;
    })
    
})