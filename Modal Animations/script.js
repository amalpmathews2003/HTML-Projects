btns=document.querySelectorAll('.button')
modal=document.getElementById("modal-container")
btns.forEach(btn => {
      btn.addEventListener('click',(e)=>{
            var id=e.target.id;
            document.querySelector('#modal-container').removeAttribute('class').classList.add(id);
            document.body.classList.add('modal-active')
      }) 
});
modal.addEventListener('click',(e)=>{
      e.target.addClass('out')
      document.body.classList.remove('modal-active')
})