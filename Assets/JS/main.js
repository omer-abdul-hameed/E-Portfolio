
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

//Add event listeners for Mouse Over to transform profile pic
const profilePic = document.getElementById('pfp');
profilePic.addEventListener('mouseover', () => {
    profilePic.style.transition = 'transform 0.3s ease';
    profilePic.style.transform = 'scale(1.1)';
    console.log('Image hovered!');
});

profilePic.addEventListener('mouseout', () => {
    profilePic.style.transition = 'transform 0.3s ease';
    profilePic.style.transform = 'scale(1)';
    console.log('Image unhovered!');
});
//Added event listeners by using an array iterator method to iterate over the array of all the elements with the class of nav items to appy an event listener that has style changes. 
const navItems = document.getElementsByClassName('nav-item');
Array.from(navItems).forEach(navItem => {
    navItem.addEventListener('mouseover', () => {
        navItem.style.transition = 'transform 0.3s ease';
        navItem.style.transform = 'scale(1.4)';
        console.log('Nav item hovered');
    });

    navItem.addEventListener('mouseout', () => {
        navItem.style.transition = 'transform 0.3s ease';
        navItem.style.transform = 'scale(1)';
        console.log('Nav item unhovered');
    });
});
//Current issue find a way to remove the event listeners to incorporate an if else statement that will only add the event listener if the page.innerwindow is greater than or equal to 992px.






