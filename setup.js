const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const backendPath = path.join(__dirname, 'backend');
const frontendPath = path.join(__dirname, 'frontend');
const envPath = path.join(backendPath, '.env');

const envContent = `DB_URI=mongodb://127.0.0.1:27017/nest
JWT_SECRET=topsecret
JWT_EXPIRES=3d
PORT=4000
`;

fs.writeFileSync(envPath, envContent, 'utf8');
console.log('.env file created in backend directory.');

exec('npm install', { cwd: backendPath }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Backend npm install error: ${error.message}`);
    return;
  }
  console.log(`Backend dependencies installed.`);

  exec('npm run start:dev', { cwd: backendPath }, (err, out, errOut) => {
    if (err) {
      console.error(`Backend start error: ${err.message}`);
      return;
    }
    console.log(`Backend started:\n${out}`);
  });
});

exec('npm install', { cwd: frontendPath }, (error, stdout, stderr) => {
  if (error) {
    console.error(`Frontend npm install error: ${error.message}`);
    return;
  }
  console.log(`Frontend dependencies installed.`);

  exec('npm run dev', { cwd: frontendPath }, (err, out, errOut) => {
    if (err) {
      console.error(`Frontend start error: ${err.message}`);
      return;
    }
    console.log(`Frontend started:\n${out}`);
  });
});