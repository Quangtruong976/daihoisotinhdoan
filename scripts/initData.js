// scripts/initData.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Thay bằng config Firebase của bạn
const firebaseConfig = {
  apiKey: "API_KEY_CỦA_BẠN",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Dữ liệu đại hội mẫu
const programData = [
  { time: "8:00 - 8:30", activity: "Khai mạc Đại hội", location: "Hội trường tỉnh đoàn" },
  { time: "8:30 - 9:00", activity: "Báo cáo tổng kết nhiệm kỳ", location: "Hội trường tỉnh đoàn" },
  { time: "9:00 - 10:00", activity: "Thảo luận văn kiện", location: "Phòng A" },
];

const delegatesData = [
  { name: "Nguyễn Văn A", unit: "Đoàn TNCS TP. Bảo Lộc" },
  { name: "Trần Thị B", unit: "Đoàn TNCS TP. Đà Lạt" },
];

async function init() {
  // Tạo collection "program"
  const programCol = collection(db, "program");
  for (const item of programData) {
    await addDoc(programCol, item);
    console.log(`Đã thêm: ${item.activity}`);
  }

  // Tạo collection "delegates"
  const delegatesCol = collection(db, "delegates");
  for (const item of delegatesData) {
    await addDoc(delegatesCol, item);
    console.log(`Đã thêm đại biểu: ${item.name}`);
  }

  console.log("Hoàn tất thêm dữ liệu!");
}

init().catch(console.error);
