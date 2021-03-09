var mainLabels = document.getElementsByClassName('main-menu-labels');
var subLabels = document.getElementsByClassName('sub-menu');

mainLabels[0].addEventListener('mouseenter', 
    function() {
    subLabels[0].classList.remove('hide');
});

mainLabels[0].addEventListener('mouseleave', 
    function() {
    subLabels[0].classList.add('hide');
});

mainLabels[1].addEventListener('mouseenter', 
    function() {
    subLabels[1].classList.remove('hide');
});

mainLabels[1].addEventListener('mouseleave', 
    function() {
    subLabels[1].classList.add('hide');
});

mainLabels[2].addEventListener('mouseenter', 
    function() {
    subLabels[2].classList.remove('hide');
});

mainLabels[2].addEventListener('mouseleave', 
    function() {
    subLabels[2].classList.add('hide');
});