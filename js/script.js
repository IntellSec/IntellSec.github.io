$(document).ready(function() {
      $('#sec-content').hide();
      $('#read-content').hide();
      $('#misc-content').hide();
      $('#prog-content').hide();

      $('#int-link').click(function(e) {
          e.preventDefault();
          $('#int-content').toggle(200);
      });
      $('#sec-link').click(function(e) {
          e.preventDefault();
          $('#sec-content').toggle(200);
      });
      $('#read-link').click(function(e) {
        e.preventDefault();
        $('#read-content').toggle(200);
    });
    $('#misc-link').click(function(e){
        e.preventDefault();
        $('#misc-content').toggle(200);
    });
    $('#prog-link').click(function(e) {
        e.preventDefault();
        $('#prog-content').toggle(200);
    })
    //   $('#close').click(function(e) {
    //       e.preventDefault();
    //       $('nav').toggle(500);
    //   })

   // displays menu items for mobile view
   $(".handle").on("click", function() {
   $("nav ul").toggleClass("showing");
   }); 
  })