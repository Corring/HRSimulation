
    function home(){
        window.location.href='./mentor.html';
    }

    function customize(){
        x = window.confirm("Are you sure you want to saved the question the question pool?")
        if (x){
            window.alert("Question been saved.")
        }
        else{
            window.alert("Question not saved.")
        }
    }


    function openLeft_dh() {
        var w = window.innerWidth;
        console.log(w)
        if(w > 800){
            $("#left_dh").css({"width":"20%","transition":"0.3s"});
        }
        else{
            $("#left_dh").css({"width":"60%","transition":"0.3s"});
        }
        $("#mainContent").css({"ocupation":"50%"});
       
        $("#black_bg").css("display","block");
        // open the left tool bar, button appear
        $("#left_dh").append("<ol><li><button class='menuButton' id='process' style='margin-top: 60%;' onclick='home()'>Home</button></li>"+
        "<li><button class='menuButton' id='hint'>Contact Your Mentee</button></li>"+
        "<li><button class='menuButton' id='mentor' >View company handbook</button></li>"+
        "<li><button class='menuButton' id='logout' onclick='logout()'>Log Out</button></li></ol>");
        document.getElementById("totalMain").setAttribute("onclick","closeLeft_dh()");

   
    }
    function closeLeft_dh() {
        $("#left_dh").css({"width":"0","transition":"0.3s"});
        $("#black_bg").css("display","none");
        // close the left tool bar, button disappear
        leftMenu = document.getElementById('left_dh');
        while(leftMenu.firstChild){
            leftMenu.removeChild(leftMenu.lastChild);
        }
        document.getElementById("totalMain").removeAttribute("onclick");
    }

    function logout(){
        window.location.href='./login.html';
    }