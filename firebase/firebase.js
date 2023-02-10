// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyA7l_m67Bc2VScWblwu97VG7kRzMXRSS4M",
  authDomain: "monodeca-tech.firebaseapp.com",
  databaseURL: "https://monodeca-tech-default-rtdb.firebaseio.com",
  projectId: "monodeca-tech",
  storageBucket: "monodeca-tech.appspot.com",
  messagingSenderId: "897105449293",
  appId: "1:897105449293:web:ae6a89dfb4725a01f0a704",
  measurementId: "G-0TSFXD17K8"
  
    };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  }).then(() => {
    swal("Congrats!","Message send successfully.","success")
  })
  .catch((error) => {
    alert(error)
  });
}