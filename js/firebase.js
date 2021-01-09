var firebaseConfig = {
    apiKey: "AIzaSyB7Q_anLqU1vdsOIQuu8Jv-GZ9H_DhKbao",
    authDomain: "postmates-301014.firebaseapp.com",
    projectId: "postmates-301014",
    storageBucket: "postmates-301014.appspot.com",
    messagingSenderId: "862634108411",
    appId: "1:862634108411:web:25d457b48fd61bc65b575e",
    measurementId: "G-5Z37N3JF8J"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
console.log(db)

let newMessage = db.collection('contact')


let sendButton = document.querySelector('.sendMessage')

sendButton.addEventListener("click", () => {
    let emri = document.querySelector('#name').value
    let emaili = document.querySelector('#email').value
    let mesazhi = document.querySelector('#message').value
    

    if(emri == "" || emaili == "" || mesazhi == ""){
        document.getElementById('ajaxsuccess').innerHTML = "Ju lutem plotësoni të gjitha fushat"
        document.getElementById('ajaxsuccess').style.display = "block" 
    }
    else{
        newMessage.add({
            emri: emri,
            email: emaili,
            message: mesazhi,
            pergjigjur: false
        }).then(() => {
            document.getElementById('ajaxsuccess').style.color = "#4BB543"
            document.getElementById('ajaxsuccess').innerHTML = "Mesazhi u dërgua me sukses"
            document.getElementById('ajaxsuccess').style.display = "block"
            setTimeout(function(){location.reload()}, 2000);
        })
    }
})

newMessage.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        if(doc.data().pergjigjur == true){
            doc.ref.delete().then(() => {
                console.log("success")
            })
        }
    });
})

