// this function starts recording the time and date mentee started
function startTimer(){
    var user = document.getElementById("userName").value;
    var today=new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    var startTime = h+":"+m+":"+s
    console.log(h+":"+m+":"+s);
    //need to set "username" to "startTime" in local storage
    localStorage.setItem(startTime, document.getElementById("userName").value);
//THIS ADDS ZEROS IF IT IS A SINGLE DIGIT
function checkTime(i){
    if (i<10) {
        i="0" + i;
    }
    return i;
    }
window.location.href = "menteeHomePage.html";
}



// this function stops and records what time the user exits to the home page and calculates total time spent on the page
function stopTime(){
    var logout = confirm("Are you sure you want to sign out?")
    console.log(logout)
    if (logout == true){
        var user = localStorage.getItem('00:00:00');
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        h=checkTime(h)
        m=checkTime(m);
        s=checkTime(s);
        console.log(h+":"+m+":"+s);
        var endTime = h+":"+m+":"+s
        window.location.href = "home.html";
        //need to set "username" to "endTime" in local storage
        localStorage.setItem(endTime, user);

        var tableRowNumber 	= 1; // start after the heading, row 0
        var row = apprenticeInfo.insertRow(tableRowNumber);
        var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        cell0.innerHTML = user;
        cell1.innerHTML = today;
        cell2.innerHTML = startTime;
        cell3.innerHTML = endTime;

        tableRowNumber++;


    }else {
        return;
    }
    //THIS ADDS ZEROS IF IT IS A SINGLE DIGIT
    function checkTime(i){
      if (i<10) {
          i="0" + i;
      }
      return i;
      }
             
}