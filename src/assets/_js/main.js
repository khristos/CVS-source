
(function() {

  function setHamburger() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#'+burger.dataset.target);
    burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello Bulma!');
  });

  if (document.readyState!='loading') {
    setHamburger();
    console.log('Hello CVS!');
  }
	// modern browsers
	else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', setHamburger());
    console.log('Hello CVS!');
  }

})();
