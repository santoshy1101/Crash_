// Create a Node.js script that reads and aggregates data from multiple files asynchronously using callbacks, then refactor using promises and async/await.

const fs = require('fs');
const axios = require('axios');

// Function to read data from a file asynchronously using callbacks
function readFileAsyncCallback(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, JSON.parse(data));
    });
}

// Function to aggregate data from multiple files using callbacks
function aggregateDataCallback(files, callback) {
    let aggregatedData = [];

    function readNextFile(index) {
        if (index === files.length) {
            callback(null, aggregatedData);
            return;
        }

        const filename = files[index];
        readFileAsyncCallback(filename, (err, data) => {
            if (err) {
                callback(err);
                return;
            }
            aggregatedData = aggregatedData.concat(data);
            readNextFile(index + 1);
        });
    }

    readNextFile(0);
}

// Example usage of aggregateDataCallback with callbacks
const files = ['file1.json', 'file2.json', 'file3.json'];
aggregateDataCallback(files, (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Aggregated data:', data);
});

// Function to read data from a file asynchronously using promises
function readFileAsyncPromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(JSON.parse(data));
        });
    });
}

// Function to aggregate data from multiple files using promises
async function aggregateDataPromise(files) {
    let aggregatedData = [];
    for (const filename of files) {
        const data = await readFileAsyncPromise(filename);
        aggregatedData = aggregatedData.concat(data);
    }
    return aggregatedData;
}

// Example usage of aggregateDataPromise with async/await
const filesToAggregate = ['file1.json', 'file2.json', 'file3.json'];
aggregateDataPromise(filesToAggregate)
    .then(data => console.log('Aggregated data:', data))
    .catch(err => console.error('Error:', err));

