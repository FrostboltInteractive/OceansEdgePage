//this is just for dev control

function updateLoop() {
    checkAPIServerRunning();
    checkDBServerRunning();
    updateGameServerTable();
    updateMachineTable();
    setTimeout(updateLoop, 60000);
}

function updateGameServerTable() {
    data = run("getServerList", "GET", true);
    console.log("Gameserver data:" + data);

    //update table
}

function updateMachineTable() {
    data = run("getMachineList", "GET", true);
    console.log("Machine data:" + data);

    //update table

}   

function checkAPIServerRunning() {  
    data = run("checkLife", "GET", true);

    //update the ui with the status
}

function checkDBServerRunning() {
    data = run("checkLifeDB", "GET", true);

    //update the ui with the status
}

async function runCmd() {
    var cmd = document.getElementById("cmd").value;
    if(cmd == "getServerList") {
        data = await run("getServerList", "GET", true);
        console.log("Command Data:" + data);
        document.getElementById("cmdData").innerHTML = data;
    } else if(cmd == "getMachineList") {
        return run("getMachineList", "GET", true);
    }
}

async function run(cmd, meth, dataRet) {
    const APIURL = "https://api.oceansedge.frostboltinteractive.com/"

    return fetch(APIURL + cmd, {
        method: meth,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data:', data);
        if (data.contents) {

            return JSON.parse(data.contents);
        } else {
            if(dataRet) {
                console.log("No data returned");
            }
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        throw error;
    });
}

