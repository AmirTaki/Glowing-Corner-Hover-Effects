const cards = document.querySelectorAll(".card");


cards.forEach((card) => {
    card.addEventListener("mousemove", (e)=> {
        const x = e.pageX - card.offsetLeft;
        const y = e.pageY - card.offsetTop;

        card.style.setPropery("--x", x + 'px');
        card.style.setPropery("--y", y + 'px');
    })
    
})