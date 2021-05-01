let db;

// We request a database instance for 'budget'
const request = window.indexedDB.open('budget', 1);

// (request.onupgradeneeded)
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

// (request.onerror)
request.onerror = function (event) {
    console.log(`Error! ${event.target.errorCode}`);
};

// (function checkDatabase)
function checkDatabase() {
    let transaction = db.transaction(['BudgetStore'], 'readwrite');

    const store = transaction.object.Store('BudgetStore');

    const getAll = store.getAll();

    getAll.onsuccess = function () {
        if (getAll.result.length > 0) {
            fetch('/api/transaction/bulk', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((res) => {
                    if (res.length !== 0) {
                        transaction = db.transaction.objectStore('BudgetStore');

                        currentStore.clear();
                        console.log('Clearing the current store!');
                    }
                });
        }
    };
}

// (request.onsuccess)
request.onsuccess = function (event) {
    db = event.target.result;

    if (navigator.onLine) {
        console.log('The backend is online!');
        checkDatabase();
    }
};

// (const saveRecord)
const saveRecord = (record) => {

    const transaction = db.transaction(['BudgetStore'], 'readwrite');

    const store = transaction.objectStore('BudgetStore');

    store.add(record);
};

