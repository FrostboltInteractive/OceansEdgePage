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
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://api.oceansedge.frostboltinteractive.com/getServerList';

    fetch(corsProxy + targetUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error:', data.error);
        } else {'Success:', data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}