/*---------------------
日付取得
---------------------*/

document.getElementById("js-date").innerHTML = getDate();

function getDate(){
    var now = new Date();
    var year = now.getFullYear();
    var mon = now.getMonth()+1;
    var day = now.getDate();

var s =year + "." + mon + "/" + day;
    return s;
}
