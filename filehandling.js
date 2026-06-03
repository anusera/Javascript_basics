import fs from 'fs';

fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Read Error:", err.message);
        return; 
    }

    console.log("File Data:", data);

    // This will only run AFTER the file is successfully read
    fs.writeFile('output.txt', 'Playwright Test Passed!', (err) => {
        if (err) {
            console.log("Write Error:", err);
            return;
        }
        console.log('File written successfully');
    });
});