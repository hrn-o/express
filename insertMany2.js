const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = "mongodb://2401100015nx:UC33nmiisai@ac-pspfan2-shard-00-00.o8bru2u.mongodb.net:27017,ac-pspfan2-shard-00-01.o8bru2u.mongodb.net:27017,ac-pspfan2-shard-00-02.o8bru2u.mongodb.net:27017/?ssl=true&replicaSet=atlas-c08tvx-shard-0&authSource=admin&appName=Cluster0";
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const notes = database.collection('notes');
// データを登録
const query = [
    { name: 'Yasushi', mail: 'osonoi@cu', tel: '1111' },
    { name: 'Koh', mail: 'kojima@cu', tel: '2222' },
    { name: 'Alice', mail: 'alice@example.com', tel: '3333' },
    { name: 'Bob', mail: 'bob@example.com', tel: '4444' },
    { name: 'Charlie', mail: 'charlie@example.com', tel: '5555' },
    { name: 'David', mail: 'david@example.com', tel: '6666' },
    { name: 'Eve', mail: 'eve@example.com', tel: '7777' },
    { name: 'Frank', mail: 'frank@example.com', tel: '8888' },
    { name: 'Grace', mail: 'grace@example.com', tel: '9999' },
    { name: 'Henry', mail: 'henry@example.com', tel: '0000' },  
];
const note = await notes.insertMany(query);
console.log(note);
// 最後にクロースする
await client.close();
}
run()