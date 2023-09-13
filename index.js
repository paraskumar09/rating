const ratings =document.querySelectorAll('.number');
const displayRating=document.querySelector('.selectedRating');
const submitButton=document.querySelector('.submit');
const thanks=document.querySelector(".container2");

let selectedrate=0;
let curr=ratings[0];

function rateClicked(key)
{
    curr.classList.remove("clicked");
    key.classList.add("clicked");
    console.log(key);
    selectedrate=key.id;
    curr=key
}

ratings.forEach(ele => {

    ele.addEventListener('click',()=>rateClicked(ele));
    
});

submitButton.addEventListener('click',()=>{

    if(selectedrate==0)
    {
        return ;
    }
    displayRating.textContent=selectedrate;
    // thanks.style.display="flex";
    thanks.style.transform='scale(1)';
})
