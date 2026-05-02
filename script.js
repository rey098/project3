const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=> {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
elements.forEach(el => observer.observe(el));
const elements1 = document.querySelectorAll('.hidden1');

const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=> {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
elements1.forEach(el => observer1.observe(el));
document.addEventListener("click", function(){
    document.getElementById("bgm").play();
}, { once: true});