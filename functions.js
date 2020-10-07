




 //Smooth Scrolling for navigation


    $(document).ready(function(){
        $('a[href*="#"]').on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop':  $target.offset().top 
            }, 800, 'swing', function () {
                window.location.hash = target;
            });
        });
    });


//Close the navigation when you click on X and links


$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

$('.close-nav').click(function() {
   $('#toggle').toggleClass('active');
   $('#overlay').toggleClass('open');
  });



//page loader

    var loaderOverlay = document.getElementById("page-loader");

    window.addEventListener('load', function () {
      loaderOverlay.style.display = 'none';
    });



