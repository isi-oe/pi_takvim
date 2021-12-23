fetch("../data/data.json")
    .then(response => response.json())
    .then(data => {
        setInterval(function() {
            populate_arr(data);
        }, 1*1000);
    });

function populate_arr(d) {
    // document.getElementById("time").innerHTML = Object.entries(d.yesterday);
    // document.getElementById("left").innerHTML = "Test2";

    // console.log(getNext(d));
    getNext(d);
}   

function getNext(d) {
    var today = new Date();
    var time = today.getHours()*60 + today.getMinutes();
    var length = Object.entries(d.today).length;

    var next = 24*60+60;
    var i = 0;
    while(i < length) {
        var arr = d.today[i].split(":")

        if((parseInt(arr[0])*60 + parseInt(arr[1])) - time > 0) {
            if((parseInt(arr[0])*60 + parseInt(arr[1])) - time < next) {
                next = (parseInt(arr[0])*60 + parseInt(arr[1])) - time;
            }
        }
        i += 1;
    }
    console.log(next);
}

function getUTC() {
    var now = new Date();

    if(now.getHours() == 0) {
        return 24-now.getUTCHours();
    } else {
        return now.getHours()-now.getUTCHours();
    }
}