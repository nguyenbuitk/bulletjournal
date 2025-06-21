import mongoose from "mongoose";
const DailyLogSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    content: { type: String, required: true },
    tags: [String],
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' }
});
//                             Model name       Model Schema (cấu trúc dữ liệu)
//                                  |               |
// Lưu model lại vào                |               |
// Daily log để sử dụng sau này     |               |
const DailyLog = mongoose.model('DailyLog', DailyLogSchema)

export default DailyLog;
