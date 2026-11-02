// מגישי טכנטאים: בלייב מור וחיים אשרף 50/5

//Task 4

const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'Text');

const files = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
  'file4.txt',
  'file5.txt',
  'file6.txt',
  'file7.txt',
  'file8.txt',
  'file9.txt',
  'file10.txt'
];

let textOut = '';

for (let i = 0; i < files.length; i++) {
  const filePath = path.join(dirPath, files[i]);
  const textIn = fs.readFileSync(filePath, 'utf-8');
  const arr = textIn.split(/\r?\n/);

  if (arr[arr.length - 1] === '') {
    arr.pop();
  }

  for (let j = 0; j < i + 1 && j < arr.length; j++) {
    textOut += arr[j] + '\n';
  }
}

fs.writeFileSync(path.join(__dirname, 'newFile.txt'), textOut);