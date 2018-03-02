//  export default {


     
//   parseMessage: function(message){
// console.log(message.toString())

//     // var lookupTable = {
//     //   ai: function() {
//     //     return "asdf";
//     //   },
//     //   house: function() {
//     //     return "building";
//     //   },
//     //   aix: function() {
//     //     return "nothing";
//     //   }
//     // };
//     //   try{
//     //    console.log(JSON.parse(message))
//     //   }catch(e){

//     //   }
//     // lookupTable["ai"]();
//     // console.log(message.toString())
//     // var array = _.split(message.toString(), ",");
//     // // console.log(array[5])
//     // var batt = _.split(array[3], ":")[1];
//     // var lat = _.split(array[5], ":")[1];
//     // var lon = _.split(array[6], ":")[1];
//     // var time = _.split(array[7], ":")[1];
//     // var veh = _.split(array[1], ":")[1];

//           try{
//        console.log(JSON.parse(message))
//       }catch(e){
//           return
//       }
//       if(!message.tst){
//         message.tst = new Date()
//       }

     
//     function convertTimestamp(timestamp) {
//       var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
//         yyyy = d.getFullYear(),
//         mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
//         dd = ("0" + d.getDate()).slice(-2), // Add leading 0.
//         hh = d.getHours(),
//         h = hh,
//         min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
//         ampm = "AM",
//         time;

//       if (hh > 12) {
//         h = hh - 12;
//         ampm = "PM";
//       } else if (hh === 12) {
//         h = 12;
//         ampm = "PM";
//       } else if (hh == 0) {
//         h = 12;
//       }

//       // ie: 2013-02-18, 8:35 AM
//       time = yyyy + "-" + mm + "-" + dd + ", " + h + ":" + min + " " + ampm;

//       return time;
//     }
//     var t = convertTimestamp(time);
//     var messageObject = {
//     //   type: type,
//       tablet: message.tid,
//       batt: message.batt,
//       lat: message.lat,
//       lon: message.lon,
//       time: t
//     };
//      console.log(messageObject)
//     return messageObject
//   }
// };
