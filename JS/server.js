//this is just for dev control

function updateLoop() {
    checkMainServerRunning();
    updateServerTable();
    setTimeout(updateLoop, 1000);
}

function updateServerTable() {

}

function checkMainServerRunning() {

}

function stopMainServer() {

}

function startMainServer() {

}

function getServerList() {
    const filePath = '../MainServerIP.txt';

    fetch('api.oceansedge.frostboltinteractive.com/api/getServerList', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error:', data.error);
        } else {
            console.log('Success:', data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}