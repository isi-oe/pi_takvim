# pi_takvim
Simple web based application to show prayer time.

Code is structured:
+ `getData.py` used to fetch data with a HTTP request. It fills the `data.json`.
+ `calculate.js` calculates the needed informations with the data provided, and gives it back to the html instance.
+ `index.html` front end.