today = new Date();

tentamenweek = new Date("June 23, 2019");
msPerDay = 24 * 60 * 60 * 1000 ;
timeLeft = (tentamenweek.getTime() - today.getTime());

e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);
e_hrsLeft = (e_daysLeft - daysLeft)*24;
hrsLeft = Math.floor(e_hrsLeft);
minsLeft = Math.floor((e_hrsLeft - hrsLeft)*60);

document.write("<p> Je hebt nog </p> <h4>" + daysLeft + " dagen " + hrsLeft +" uur " + minsLeft + " minuten </h4>  <p> tot de tentamenweek van blok 3 </p>");

//add seconds