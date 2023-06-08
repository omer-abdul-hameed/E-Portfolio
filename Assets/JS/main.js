
//ScrollSpy external bootstrap script to link pages and show active page on current view port 
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '.navbar'
})

//Alternate scroll animation code
//-------------------------------------
//defining variable observer that is a callback function
const observer = new IntersectionObserver((entries) => {
    //Go over each entry 
    entries.forEach((entry) => {
        console.log(entry)
    //If an entry is intersecting in the view port then add class labeled show 
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
    //Else remove class labeled show        
        } else {
            entry.target.classList.remove('show');

        }
    });
});
//defining variable hiddenElements that contains all elements from the html class hidden
const hiddenElements = document.querySelectorAll('.hidden');
//invoking the function for each HTML class labeled hidden
hiddenElements.forEach((el) => observer.observe(el));