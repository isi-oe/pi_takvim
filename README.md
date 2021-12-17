# pi_takvim
Currently working on version 2!

Code is structured:
+ `getData.py` used to fetch data with a HTTP request. It fills the `data.json`.
+ `script.js` calculates the needed informations with the data provided, and gives it back to the html instance.
+ `index.html` front end.

Functions:
+ In `keys.json`, required prayer times can be marked with "1". Not required prayer times can be marked with "0".
+ In the file `api.txt`, the used API link can be pasted.
