//             hh * 60 + mm
const evning = 20 * 60 + 00;
const night =  23 * 60 + 30;
const day =  06 * 60 + 30;
const date = new Date(); 
const now = date.getHours() * 60 + date.getMinutes();


// code to find device id, uncomment to list
// let devices = await Homey.devices.getDevices();
//     _.forEach(devices, device => {
//         console.log("device id: " + device.id + "name: " + device.name);
// });

// dimmer bad oppe = 83786180-98f0-4b81-a585-6f4c2c25d975
// bad lamp = 1ad891ea-7c8d-41b3-b663-8421ed621b93

let lamp1 = await Homey.devices.getDevice({id: '83786180-98f0-4b81-a585-6f4c2c25d975'});
let lamp2 = await Homey.devices.getDevice({id: '1ad891ea-7c8d-41b3-b663-8421ed621b93'});

// the time is between 23:30 and 06:30
if(now <= day || now > night) { 
     lamp2.setCapabilityValue('dim', 0.01);
}
// the time is between 06:30 and 20:00
else if ( now <= evning && now > day ) 
{
    lamp1.setCapabilityValue('dim', 1.00);
    lamp2.setCapabilityValue('dim', 1.00);
    console.log('daytime')
}
// the time is between 20:00 and 23:30
else {
    lamp1.setCapabilityValue('dim', 0.2);
    lamp2.setCapabilityValue('dim', 0.2);
    console.log('evning')
}
return true