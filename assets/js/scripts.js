var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}


  
function copyURI(evt) {
    evt.preventDefault();
    var link = evt.target.getAttribute('href');
    navigator.clipboard.writeText(link).then(() => {
      /* clipboard successfully set */
      alert('Copied link ' + link);
    }, () => {
      /* clipboard write failed */
    });
}