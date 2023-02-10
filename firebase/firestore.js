//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyA7l_m67Bc2VScWblwu97VG7kRzMXRSS4M",
    authDomain: "monodeca-tech.firebaseapp.com",
    databaseURL: "https://monodeca-tech-default-rtdb.firebaseio.com",
    projectId: "monodeca-tech",
    storageBucket: "monodeca-tech.appspot.com",
    messagingSenderId: "897105449293",
    appId: "1:897105449293:web:ae6a89dfb4725a01f0a704",
    measurementId: "G-0TSFXD17K8"
  };
  
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  //Variable to access database collection
  const db = firestore.collection("messages");
  
  //Get Submit Form
  let submitButton = document.getElementById("submit");
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault();
  
    //Get Form Values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
  
    firestore
      .collection("fomData")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const fn = doc.data().fname;
          if (firstName === fn) {
            console.log("Already Exists");
          }
  
          // console.log("data", doc.data().fname);
        });
      });
    //Save Form Data To Firebase
    db.doc()
      .set({
        name: name,
        email:email,
        phone:phone,
        message:message,
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  
    //alert
    alert("Your Form Has Been Submitted Successfully");
  
    //clear form after submission
    function clearForm() {
      document.getElementById("contactForm").reset();
    }
    clearForm()
  });