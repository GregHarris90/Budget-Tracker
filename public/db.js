let db;

// We request a database instance 'budget'
const request = window.indexedDB.open('budget', 1);

// 
request.onupgradeneeded = function (event) {
    console.log('Upgrade needed in IndexDB');

    const { oldVersion } = event;
    const newVersion = event.newVersion || db.version;

    console.log(`Database updated from version ${oldVersion} to ${newVersion}`);

    db = event.target.result;

    if (db.objectStoreNames.length === 0) {
        db.createObjectStore('BudgetStore', { autoIncrement: true });
    }
};