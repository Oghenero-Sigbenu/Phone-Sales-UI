let hambuger = document.querySelector('.hambuger');
let nav = document.querySelector('.navItem')

hambuger.addEventListener('click', function(){
  hambuger.classList.toggle('down')
  hambuger.show(nav);
});