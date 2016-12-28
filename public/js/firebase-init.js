// Initialize Firebase
var config = {
    apiKey: "AIzaSyCYTH6kgP4veDqE66hoPqeGjcn047tMMu4",
    authDomain: "pewi-2fd9d.firebaseapp.com",
    databaseURL: "https://pewi-2fd9d.firebaseio.com",
    storageBucket: "pewi-2fd9d.appspot.com",
    messagingSenderId: "734947320023"
};
firebase.initializeApp(config);
var database = firebase.database()
// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    tosUrl: '/'
};
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);

initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var providerData = user.providerData;

        $("#firebaseui-auth-container").addClass("hide")
        $("#sessions").removeClass("hide")
        $("#signOutBtn").removeClass("hide")

        user.getToken().then(function(accessToken) {
            get_session_list()
        });
    }
    }, function(error) {
    });
};

window.addEventListener('load', function() {
    initApp()
});