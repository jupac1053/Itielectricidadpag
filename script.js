
const adafruitIoUsername = 'Jupac1053';
const adafruitIoKey = 'Jupac-1053';
const adafruitIoUrl = `(https://io.adafruit.com/api/v2/Jupac1053/groups/default)`;

function sendData(device, state) {
  fetch(`${adafruitIoUrl}/api/v2/${adafruitIoUsername}/feeds/dispositivo${device}/data`, {
    method: 'POST',
    headers: {
      'X-AIO-Key': adafruitIoKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ value: state })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}
