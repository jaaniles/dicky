function removeClass(element, className){
    document.getElementById(element).classList.remove(className)
}
function addClass(element, className){
    document.getElementById(element).classList.add(className)
}
function getUser(){
    var user = firebase.auth().currentUser
    if (!user){
        return false
    }
    return user
}
function signOut(){
    firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        $("#sessions_list").html()
        $("#sessions").addClass("hide")
        $("#signOutBtn").addClass("hide")
        $("#firebaseui-auth-container").removeClass("hide")

        closeSettings()
    })
}

function home(){
    window.location.href = "/"
}
function showAlert(text){
    $("#footerAlert").removeClass("hide")
    $("#alertText").html(text)
}
function hideAlert(){
    $("#footerAlert").addClass("hide")
}
function openActions() {
    $("#actions").css("width", "100%")
}
function closeActions() {
    $("#actions").css("width", "0%")
}
function openTask(){
    $("#task_overlay").css("width", "100%")
}
function closeTask(){
    $("#task_overlay").css("width", "0%")
}
function openSettings(){
    $("#settings_overlay").css("width", "100%")
}
function closeSettings(){
    $("#settings_overlay").css("width", "0%")
}

    /*--------------------------------------------*/
    /*
    var socket = io.connect(window.location.origin)
    document.addEventListener("DOMContentLoaded", function(event) { 
        //join(window.location.pathname.substring(1))
    });
    function add_player_to_session(user, sessionId){
        console.log(user.uid)
        database.ref("players/"+user.uid).set({
        }).then(function(){
            console.log("Joined session")
        })
    }
    socket.on("join_success", function(data){
        window.history.pushState("", "", data.sessionId);
    })
    function createAlert(text){
        var alert = '<div class="alert">'
        +text
        +'</div>'
        return alert
    }
    */
    /*--------------------------------------------*/