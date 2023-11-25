//--------------------------------------------------------------------------------------
function toggleBackImage(cardBody) {
    var frontImage = cardBody.querySelector('.front-image');
    var backImage = cardBody.querySelector('.back-image');

    if (frontImage.style.display === 'none') {
        // Front image is hidden, show it and hide the back image
        frontImage.style.display = 'block';
        backImage.style.display = 'none';
    } else {
        // Front image is visible, hide it and show the back image
        frontImage.style.display = 'none';
        backImage.style.display = 'block';
    }

    // Add rotation effect to the card body
    cardBody.classList.toggle('rotate');
}
//---------------------------------------------------------------------------------------
// Add event listener to the eye icon for expanding/collapsing the journal
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the eye icon for expanding/collapsing the journal
    document.querySelectorAll('.toggle-eye').forEach(function(eyeIcon) {
        eyeIcon.addEventListener('click', function() {
            console.log('Eye icon clicked!');
            // Toggle the "collapsed" class on the parent card
            this.closest('.journals-item').classList.toggle('collapsed');
        });
    });
});
//---------------------------------------------------------------------------------------
