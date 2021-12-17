fetch("../data/data.json")
    .then(response => response.json())
    .then(data => {
        setInterval(function() {
            populate_arr(data);
        }, 1*1000);
    });

function populate_arr(d) {
    var ty_arr = [[], [], [], [], [], [], []];
    var tw_arr = [[], [], [], [], [], [], []];
    var i = 0;
    for (const [key, value] of Object.entries(d.today)) {
        ty_arr[i][0] = key;
        ty_arr[i][1] = value;
        i += 1;
    }
    var i = 0;
    for (const [key, value] of Object.entries(d.tomorrow)) {
        tw_arr[i][0] = key;
        tw_arr[i][1] = value;
        i += 1;
    }

    calculate(ty_arr, tw_arr);
}

function calculate(ty, tw) {
    var date = new Date();
    var int_clock = date.getHours()*60 + date.getMinutes();
    var minimum = 24*60;
    var next;
    var next_time;
    var time;
    var i = 0;
    while(i < 7) {
        time_arr = ty[i][1].split(':');
        time = parseInt(time_arr[0])*60 + parseInt(time_arr[1]);
        if(time - int_clock < minimum && time - int_clock > 0) {
            minimum = time - int_clock;
            next = ty[i][0];
            next_time = ty[i][1];
        }
        i += 1;
    }
    if(minimum == 24*60) {
        var j = 0;
        while(j < 7) {
            time_arr = tw[j][1].split(':');
            time = parseInt(time_arr[0])*60 + parseInt(time_arr[1]);
            if(tw[j][1] - int_clock < minimum) {
                minimum = time - int_clock;
                next = tw[j][0];
                next_time = tw[j][1];
            }
            j += 1;
        }
    }
    beautify(next_time, next, minimum);
}

function beautify(nt, n, m) {
    str_time = n + " namazi saat " + nt + "'de";
    str_left = "Kalan: ";

    m_hour = Math.trunc(m/60);
    m_minute = m - Math.trunc(m/60)*60;
    str_minute = "";
    str_hour = "";

    if(m_minute/10 >= 1) {
        str_minute = (m_minute).toString();
    } else {
        str_minute = "0" + (m_minute).toString();
    }

    if(Math.trunc(m/60) >= 1) {
        if((Math.trunc(m/60))/10 >= 1) {
            str_left += (m_hour).toString() + ":" + str_minute;
        } else {
            str_left += "0" + (m_hour).toString() + ":" + str_minute;
        }
    } else {
        str_left += "00:" + str_minute;
    }

    document.getElementById("time").innerHTML = str_time;
    document.getElementById("left").innerHTML = str_left;
}