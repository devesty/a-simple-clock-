let countingDownTo = new Date("dec 25, 2021 00:00:00");
 
// Get today's time and date
let now = new Date();
 
// Find the difference (result is the time remaining in milliseconds)
let timeRemaining = countingDownTo - now;
let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
// Hours remaining:
let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
// Minutes remaining:
let minutes = Math.floor(timeRemaining / (1000 * 60));
// Seconds remaining:
let seconds = Math.floor(timeRemaining / (1000));
let daysToDisplay = days;
// 1. subtract 24 hours for every day remaining from hours
let hoursToDisplay = hours - (days * 24);
// 2. Subtract 60 minutes for every hour remaining from minutes
let minutesToDisplay = minutes - (hours * 60);
// 3. Subtract 60 second for every minutes remaining from seconds
let secondsToDisplay = seconds - (minutes * 60);
function formatNumber(inputNumber) {
  let outputNumber = inputNumber.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
      })
  return outputNumber;
}
setInterval( function() {
 
  // First, set the time and date you want to countdown to
  let countingDownTo = new Date("dec 25, 2021 00:00:00");

  // Get today's time and date
  let now = new Date();

  // Find the difference (result is the time remaining in milliseconds)
  let timeRemaining = countingDownTo - now;

  // Now convert the milliseconds into:
  // Days remaining:
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  // Hours remaining:
  let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  // Minutes remaining:
  let minutes = Math.floor(timeRemaining / (1000 * 60));
  // Seconds remaining:
  let seconds = Math.floor(timeRemaining / (1000));

  // Now subtract greater unit from lesser units
  let daysToDisplay = days;
  // 1. subtract 24 hours for every day remaining from hours
  let hoursToDisplay = hours - (days * 24);
   // 2. Subtract 60 minutes for every hour remaining from minutes
   let minutesToDisplay = minutes - (hours * 60);
   // 3. Subtract 60 second for every minutes remaining from seconds
   let secondsToDisplay = seconds - (minutes * 60);

   // Time now ready to display!
   const countdown = document.getElementById('countdown');
   countdown.innerHTML = `
   <table>
       <tr>
           <td>
               <span id="days" class="number">${formatNumber(daysToDisplay)}</span><span class="colon">:</span>
           </td>
           <td>     <span id="hours" class="number">${formatNumber(hoursToDisplay)}</span><span class="colon">:</span>
           </td>
           <td>
               <span id="minutes" class="number">${formatNumber(minutesToDisplay)}</span><span class="colon">:</span>
           </td>
           <td>
               <span id="seconds" class="number">${formatNumber(secondsToDisplay)}</span>
           </td>
       </tr>
       <tr>
       <td>
       <span class="text colonright">Days</span>
   </td>
   <td>
       <span class="text colonright">Hours</span>
   </td>
   <td>
       <span class="text colonright">Minutes</span>
   </td>
   <td>
       <span class="text">Seconds</span>
   </td>
   </tr>
   </table>
   `
   }, 1000);

   function formatNumber(inputNumber) {
       let outputNumber = inputNumber.toLocaleString('en-US', {
           minimumIntegerDigits: 2,
           useGrouping: false
           })
       return outputNumber;
          }