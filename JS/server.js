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

function updateMainServerIP() {
    const filePath = '../MainServerIP.txt';
    const newText = 'Your new text content';

    fetch('http://localhost:5000/update-text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ file_path: filePath, new_text: newText })
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