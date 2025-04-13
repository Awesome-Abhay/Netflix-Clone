let timer;
window.addEventListener("scroll", () => {
    document.querySelector("#element").classList.remove("opacity");
    clearTimeout(timer);
    timer = setTimeout(() => {
        document.querySelector("#element").classList.add("opacity");
    }, 2000);
})

document.querySelector("#element").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
})

function movePlus(element, faqItem){
    if(faqItem.classList.contains('active')){            
        element.style.transform= 'rotate(45deg)';
    }else{            
        element.style.transform= 'rotate(90deg)';
    }
}


const faqArray= document.querySelectorAll(".faq-item");
faqArray.forEach((element)=>{
    element.addEventListener('click', (e)=>{        
        e.target.parentElement.classList.toggle("active");
        let plus= e.target.children[0];
        movePlus(plus, e.target.parentElement);
        
    })
})

const plusSvg= document.querySelectorAll(".plus");

plusSvg.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        let svg=e.target.closest('svg');
        e.stopPropagation();
        const faqItem= e.target.closest('.faq-item');
        faqItem.classList.toggle('active');
        movePlus(svg, faqItem);
        
    })
})