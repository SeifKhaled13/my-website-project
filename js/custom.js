  (function ($) {
  
  "use strict";

    // AOS ANIMATIONS
    AOS.init();

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // NEWS IMAGE RESIZE
    function NewsImageResize(){
      $(".navbar").scrollspy({ offset: -76 });
      
      var LargeImage = $('.large-news-image').height();

      var MinusHeight = LargeImage - 6;

      $('.news-two-column').css({'height' : (MinusHeight - LargeImage / 2) + 'px'});
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 66
          }, 1000);
        }
      }
    });
    
  })(window.jQuery);



// GET USER'S FORM AND SEND TO THE CLIENT USING EMAIL JS

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;

      if (name && email && message) {
        // Initialize EmailJS with your user ID
        emailjs.init('user_1vPSCnRfsMtGe1qIJySUE');

        // Send email using EmailJS
        emailjs.send('service_x3t2vys', 'template_sagicch', {
          to_email: 'humpheryalph@gmail.com',
          from_name: name,
          from_email: email,
          message: message,
        }).then(
          function (response) {
            // Display success alert using SweetAlert
            Swal.fire('Message Sent', 'Your message has been sent successfully!', 'success');
          },
          function (error) {
            // Display error alert using SweetAlert
            Swal.fire('Not Sent', 'There was an error sending your message. Please try again later.', 'error');
          }
        );
      } else {
        // Display alert using SweetAlert for missing fields
        Swal.fire('Incomplete Form', 'Please fill in all the required fields.', 'warning');
      }
    });
  });