function ventModal(OPEN, MODAL_CONTAINER,CLOSE,MODAL){
  OPEN.addEventListener('click', () => {
  MODAL_CONTAINER.classList.add('show');
  MODAL.classList.add('visible');
});
CLOSE.addEventListener('click', () => {
  MODAL_CONTAINER.classList.remove('show');
  MODAL.classList.remove('visible');
});
$(MODAL_CONTAINER).on("click",function(e) {
      var container = $(".modal");
          if (!container.is(e.target) && container.has(e.target).length === 0) { 
            MODAL_CONTAINER.classList.remove('show');
            MODAL.classList.remove('visible');          
          }
  });
}
function ventModal2(OPEN, MODAL_CONTAINER,CLOSE,MODAL){
  OPEN.addEventListener('click', () => {
  MODAL_CONTAINER.classList.add('show');
  MODAL.classList.add('visible4');
});
CLOSE.addEventListener('click', () => {
  MODAL_CONTAINER.classList.remove('show');
  MODAL.classList.remove('visible4');
});
$(MODAL_CONTAINER).on("click",function(e) {
      var container = $(".modal2");
          if (!container.is(e.target) && container.has(e.target).length === 0) { 
            MODAL_CONTAINER.classList.remove('show');
            MODAL.classList.remove('visible4');          
          }
  });
}
function ventModal3(OPEN3, MODAL_CONTAINER3,CLOSE3,MODAL3){
  OPEN3.addEventListener('click', () => {
  MODAL_CONTAINER3.classList.add('show');
  MODAL3.classList.add('visible3');
});
CLOSE3.addEventListener('click', () => {
  MODAL_CONTAINER3.classList.remove('show');
  MODAL3.classList.remove('visible3');
});
$(MODAL_CONTAINER3).on("click",function(e) {
      var container = $(".modal3");
          if (!container.is(e.target) && container.has(e.target).length === 0) { 
            MODAL_CONTAINER3.classList.remove('show');
            MODAL3.classList.remove('visible3');          
          }
  });
}

function ventModal4(OPEN4, MODAL_CONTAINER4,CLOSE4,MODAL4){
  OPEN4.addEventListener('click', () => {
  MODAL_CONTAINER4.classList.add('show');
  MODAL4.classList.add('visible4');
});
CLOSE4.addEventListener('click', () => {
  MODAL_CONTAINER4.classList.remove('show');
  MODAL4.classList.remove('visible4');
});
$(MODAL_CONTAINER4).on("click",function(e) {
      var container = $(".modal4");
          if (!container.is(e.target) && container.has(e.target).length === 0) { 
            MODAL_CONTAINER4.classList.remove('show');
            MODAL4.classList.remove('visible4');          
          }
  });
}

function ventModalCont(openC,modal_containerC,closeC,modalC){
  openC.forEach(function (click) {
    click.addEventListener("click", function () {
      modal_containerC.classList.add('show');
      modalC.classList.add('visible3');
    })
  })
  closeC.addEventListener('click', () => {
    modal_containerC.classList.remove('show');
    modalC.classList.remove('visible3');    
  });
  $(modal_containerC).on("click",function(e) {
    var container = $(".modal3");
        if (!container.is(e.target) && container.has(e.target).length === 0) { 
          modal_containerC.classList.remove('show');
          modalC.classList.remove('visible3');          
        }
});
}