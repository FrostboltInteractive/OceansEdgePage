//this is just for dev control

function updateLoop() {
    checkMainServerRunning();
    updateServerTable();
    setTimeout(updateLoop, 60000);
}

function updateServerTable() {
    getServerList().then(data => {
        var table = document.getElementById('serverTable'); 
        while(table.childElementCount > 1) {
            table.removeChild(table.lastChild);
        }
        var tr = document.createElement('tr');
        for (var i = 0; i < data.length; i++) {
            var ip = data[i].ip;
            var port = data[i].port;
            var status = data[i].status;
            var region = data[i].region;
            var playerCount = data[i].playerCount;
            var shipCount = data[i].shipCount;
            var serverID = data[i].serverID;
            var machineID = data[i].machineID;
            var tdIP = document.createElement('td');
            var tdPort = document.createElement('td');
            var tdStatus = document.createElement('td');
            var tdRegion = document.createElement('td');
            var tdPlayerCount = document.createElement('td');
            var tdShipCount = document.createElement('td');
            var tdServerID = document.createElement('td');
            var tdMachineID = document.createElement('td');
            tdIP.innerHTML = ip;
            tdPort.innerHTML = port;
            tdStatus.innerHTML = status;
            tdRegion.innerHTML = region;
            tdPlayerCount.innerHTML = playerCount;
            tdShipCount.innerHTML = shipCount;
            tdServerID.innerHTML = serverID;
            tdMachineID.innerHTML = machineID;
            tr.appendChild(tdIP);
            tr.appendChild(tdPort);
            tr.appendChild(tdStatus);
            tr.appendChild(tdRegion);
            tr.appendChild(tdPlayerCount);
            tr.appendChild(tdShipCount);
            tr.appendChild(tdServerID);
            tr.appendChild(tdMachineID);
            table.appendChild(tr);
        }
        table.appendChild(tr);
    }).catch(error => {
        console.error('Error:', error);
    });
}

function checkMainServerRunning() {

}

function stopMainServer() {

}

function startMainServer() {

}

function getServerList() {
    const corsProxy = 'https://api.allorigins.win/get?url=';
    const targetUrl = encodeURIComponent('https://api.oceansedge.frostboltinteractive.com/getServerList');

    return fetch(corsProxy + targetUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.contents) {
            console.log('Data:', data.contents);
            return JSON.parse(data.contents);
        } else {
            throw new Error('No contents in response');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        throw error;
    });
}