//Contact form

var config = {
    apiKey: "AIzaSyCmEmu_mxBoKBVPcSP2qU7jLf8eWIo-2HU",
    authDomain: "bencontactform.firebaseapp.com",
    databaseURL: "https://bencontactform.firebaseio.com",
    projectId: "bencontactform",
    storageBucket: "bencontactform.appspot.com",
    messagingSenderId: "738260335209"
  };
  firebase.initializeApp(config);

//Reference messages collection

var messagesRef = firebase.database().ref('messages');

//Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form

function submitForm(e) {
    e.preventDefault();
    
    //Get Value
    
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    
    //Save Message
    
    saveMessage(name, company, email, phone, message);
    
    //Show alert
    
    document.querySelector('.alert').style.display = 'block';
    
    //Hide alert after 3 seconds
    
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    },4000);
    
    //Clear input when email is submitted
    
    document.getElementById('contactForm').reset();
    
}

//function to get form values

function getInputVal (id) {
    return document.getElementById(id).value;
}

//Save message to firebase

function saveMessage (name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}




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



