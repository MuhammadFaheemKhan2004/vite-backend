import fs from "fs/promises";
 const option = {
    encoding: 'utf8',
    }
try {
    const filename= 'test.txt';
    const data = 'It is WAD class';
    await fs.writeFile(filename, data, option);
    console.log('File written successfully');
    const readData = await fs.readFile('test.txt', option);
    console.log('File content:', readData);
}
catch (e) {
    console.error('Error :', e);
}  