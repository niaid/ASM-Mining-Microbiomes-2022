var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

function myFunction(myID) {
    /* Get the text field */
    var copyText = document.getElementById(myID);
  
    // /* Select the text field */
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.href);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.id);
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