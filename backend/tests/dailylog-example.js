import mongoose from 'mongoose';

// 1. connect to mongo
const MONGO_URI = "mongodb://root:root@localhost:27017/bulletjournal?authSource=admin"
await mongoose.connect(MONGO_URI)
console.log('Connected to mongodb')

// 2. define schema and model
const DailyLogSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    content: { type: String, required: true },
    tags: [String],
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' }
});

const DailyLog = mongoose.model('DailyLog', DailyLogSchema)

// 3. create new entry
const newLog = new DailyLog({
    date: new Date(),
    content: 'Learn basic mongo',
    tags: ['nodejs'],
    priority: 'high'
});
await newLog.save();
console.log('Added logs', newLog);

// 4. Find entry
const logs = await DailyLog.find({ priority: 'high' });
console.log('Các log ưu tiên cao: ', logs)

// 5. cập nhật
await DailyLog.updateOne(
    { _id: newLog._id },
    { $set: { content: 'Learning basic mongo'}}
);
console.log("updated logs")

// 6. delete
await DailyLog.deleteOne({ _id: newLog._id })
console.log('delete Log')
// 7. Ngắt kết nối MongoDB
await mongoose.disconnect();
console.log('👋 Đã ngắt kết nối MongoDB');