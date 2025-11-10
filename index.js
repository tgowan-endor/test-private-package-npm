// index.js
const privatePackage = require('@tgowan-endor/helloworld-npm');

if (privatePackage && privatePackage.success) {
    console.log("Successfully imported private package!");
} else {
    console.log("Failed to import private package.");
}