// int_clock var stores the amount of minutes passed now by minutes
// ty_arr/tw_arr stores prayer time names and the given amount of minutes for today and tomorrow, format: ty_arr[0][0] = name, ty_arr[0][1] = minutes

fetch("../data/data.json")
    .then(response => response.json())
    .then(data => {
        calculate(data)
    });

function calculate(d) {
    var date = new Date();
    var int_clock = date.getHours()*60 + date.getMinutes();
    var ty_arr = [[], [], [], [], [], [], []];
    var tw_arr = [[], [], [], [], [], [], []];
    var i = 0;
    for (const [key, value] of Object.entries(d.today)) {
        ty_arr[i][0] = key;
        int_time = value.split(':');
        ty_arr[i][1] = parseInt(int_time[0])*60 + parseInt(int_time[1]);
        i += 1;
    }
    var i = 0;
    for (const [key, value] of Object.entries(d.tomorrow)) {
        tw_arr[i][0] = key;
        int_time = value.split(':');
        tw_arr[i][1] = parseInt(int_time[0])*60 + parseInt(int_time[1]);
        i += 1;
    }
}