//Remove item from cart

const removeCardElement = document.getElementsByClassName('remove-item');
for(const i=0; i < removeCardElement.length; i++){
    const removeBtn = removeCardElement[i];
    removeBtn.addEventListener('click', function(event){
        const removeBtnClicked = event.target;
        removeBtnClicked.parentElement.parentElement.parentElement.remove();
    });
}