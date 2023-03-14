const box = document.getElementsByClassName("bo");


window.addEventListener('load', () => {
    console.log('loaded');


    for (const myElements of box){
        myElements.classList.toggle('OpgaveSvar');
    };
});