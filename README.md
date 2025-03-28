# LiveFlow

LiveStreamApp is a simple yet powerful live streaming platform that allows users to stream directly to platforms like YouTube using their stream keys. It is designed to be lightweight and scalable, leveraging **FFmpeg** and **RTMP** for efficient streaming.

## 🚀 Features

- 🎥 **Live Stream to YouTube** using a stream key.
- 🔴 **Start & End Streaming** with dedicated buttons.
- 🎨 **Dark Themed UI** with a modern and elegant look.
- 🏆 **HD Quality, Low Latency, and Multi-Platform Support**.
- 👥 **User Feed** section displaying ongoing streams.

## 🛠️ Tech Stack

### **Frontend**
- React.js
- Vite
- Styled Components (for styling)
- Socket.io-client

### **Backend**
- Node.js (Express)
- Socket.io
- FFmpeg (for stream processing)
- RTMP Server
- Docker (for containerization)

## 📦 Setup & Installation

### **Prerequisites**
Make sure you have the following installed:
- **Node.js** (v16+)
- **Docker & Docker Compose**
- **FFmpeg** (Ensure it’s added to your system path)

### **Step 1: Clone the Repository**
```sh
 git clone https://github.com/krisshh-24/LiveStreamApp.git
 cd LiveStreamApp
```

### **Step 2: Set Up Environment Variables**
Create a `.env` file in the `backend` directory and configure:
```
RTMP_URL=rtmp://a.rtmp.youtube.com/live2
PORT=3000
```

### **Step 3: Run the Application using Docker**
```sh
 docker-compose up --build
```
This will start both the **frontend** and **backend** containers.

### **Step 4: Access the App**
- **Frontend:** `http://localhost:5173`
- **Backend:** `http://localhost:3000`

## 📝 Usage
1. **Enter your YouTube Stream Key** in the input field.
2. Click **Start Streaming** to begin live streaming.
3. To stop streaming, click **End Streaming**.

## 🚀 Deployment
To deploy on a cloud platform, you can use:
- **Docker Swarm / Kubernetes** for scalability.
- **Vercel / Netlify** for frontend.
- **AWS / DigitalOcean** for backend & RTMP setup.

## 📸 Screenshots
![LiveStreamApp UI](./screenshots/ui.png)

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Future Enhancements
- 🎙️ **Mic & Camera Settings Customization**.
- 🎛 **OBS-like Controls for Streamers**.
- 📡 **Multi-platform Streaming (Twitch, Facebook Live, etc.)**.

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---
**Developed with ❤️ by Krish Sagar**

