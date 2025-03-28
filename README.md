# LiveFlow - The Ultimate Streaming Solution

LiveFlow is a powerful, feature-rich streaming platform that enables users to broadcast live content seamlessly. Built with a modern tech stack, it provides high-quality, low-latency streaming with an intuitive user experience.

## 🚀 Features
- 🎥 **HD Quality** - Stream in high resolution without lag.
- ⚡ **Low Latency** - Experience real-time streaming with minimal delay.
- 🌍 **Multi-Platform Support** - Stream to YouTube, Twitch, and other platforms.
- 🎛️ **Easy Controls** - Start and stop streaming with a single click.
- 🎨 **Dark Mode UI** - Elegant design with a smooth user experience.

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Socket.io, Styled Components
- **Backend:** Node.js, Express, FFmpeg, Socket.io, PM2
- **Database:** MongoDB
- **Streaming:** FFmpeg, RTMP Protocol
- **Containerization:** Docker, Docker Compose

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/krisshh-24/LiveStreamApp.git
cd LiveStreamApp
```

### 2️⃣ Setup Environment Variables
Create a `.env` file inside the backend directory and add the required variables:
```env
PORT=3000
MONGO_URI=your_mongo_database_url
RTMP_URL=your_rtmp_server_url
```

### 3️⃣ Run with Docker
```sh
docker compose up --build
```

### 4️⃣ Run Locally (Without Docker)
#### Backend:
```sh
cd backend
npm install
npm start
```
#### Frontend:
```sh
cd frontend
npm install
npm run dev
```

## 📺 Usage
1. Open the LiveFlow app.
2. Enter your **YouTube Stream Key**.
3. Click **Start Streaming** to begin broadcasting.
4. Click **End Streaming** to stop the stream.

## 📜 License
This project is licensed under the MIT License.

## 💡 Future Enhancements
- 🖥️ **More Streaming Platforms** - Support for Facebook Live, Instagram Live.
- 🔴 **Live Chat Integration** - Engage with viewers in real-time.
- 🎵 **Audio-Only Mode** - Podcast-style streaming.

## 💬 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---
💙 Made with passion by [Krish Sagar](https://github.com/krisshh-24) 🚀

