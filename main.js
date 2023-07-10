const cards = document.querySelectorAll(".card");

// cart içeriği daha kısa olduğunda daha fazla keşfet yazısı yazmaması ve dizaynın bozulmaması için gerekenler
window.onload = function(){
    cards.forEach((card) => {
        let seeMoreBtn = card.querySelector(".see-more-btn");
        let textContent = card.querySelector(".card-content .text")

        if(textContent.scrollHeight == textContent.clientHeight)
        {
            seeMoreBtn.style.display ="none";
            textContent.style.height = "fit-content";
        }
        else{
            card.classList.add("gradient");
        }
    });
}

// Herbir kart üzerinde bulunan daha fazla keşfet butonuna tıkladığında çalışacak fonksiyon
cards.forEach((card)=> {
    let seeMoreBtn = card.querySelector(".see-more-btn");
    let textContent = card.querySelector(".card-content .text")


    seeMoreBtn.addEventListener("click",() =>{
        card.classList.toggle("active");
        card.classList.toggle("gradient");

        if(card.classList.contains("active")){
            seeMoreBtn.innerHTML = "Geri git"
            textContent.style.height = textContent.scrollHeight + "px";
        }
        else{
            seeMoreBtn.innerHTML = "Daha fazla keşfet";
            textContent.style.height ="100px";
        }
    })
})