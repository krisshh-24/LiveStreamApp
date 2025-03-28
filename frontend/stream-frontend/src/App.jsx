import React, { useRef, useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
    const videoRef = useRef(null);
    const [streamKey, setStreamKey] = useState("");
    const [mediaStream, setMediaStream] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [isStreaming, setIsStreaming] = useState(false);

    useEffect(() => {
        // Get user media (camera + microphone)
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                setMediaStream(stream);
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((error) => console.error("Error accessing media:", error));
    }, []);

    const startStreaming = () => {
        if (!streamKey) {
            alert("Please enter a YouTube Stream Key!");
            return;
        }

        // Send stream key to backend to start FFmpeg process
        socket.emit("start-stream", streamKey);

        // Initialize media recorder
        const recorder = new MediaRecorder(mediaStream, {
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 250000,
        });

        recorder.ondataavailable = (event) => {
            socket.emit("binarystream", event.data);
        };

        recorder.start(25); // 25ms chunks
        setMediaRecorder(recorder);
        setIsStreaming(true);
    };

    const stopStreaming = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setIsStreaming(false);
        }

        // Send stop signal to backend
        socket.emit("stop-stream");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px",      minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          padding: "20px", }}>
            <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "10px", color: "#ff4d4d" }}>LiveFlow</h1>

            <p style={{ color: "#b3b3b3", marginBottom: "20px" }}>
        Stream anywhere in real-time.
      </p>
            <video ref={videoRef} autoPlay muted style={{ width: "60%", border: "2px solid black" }} />
            <div style={{ marginTop: "20px" }}>
                <input  style={{
            padding: "12px",
            borderRadius: "5px",
            border: "none",
            background: "#333",
            color: "#fff",
            textAlign: "center",
            width: "90%",
            fontSize: "16px",
            marginBottom: "15px",
          }}
                    type="text"
                    placeholder="Enter YouTube Stream Key"
                    value={streamKey}
                    onChange={(e) => setStreamKey(e.target.value)}
                    
                />
                <button style={{
              padding: "12px 24px",
              borderRadius: "5px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              margin:"10px",
              background: isStreaming ? "#ff4d4d" : "#555",
              color: "#fff",
            }}  onClick={startStreaming} disabled={isStreaming} >
                    Start Streaming
                </button>
                <button onClick={stopStreaming} disabled={!isStreaming}  style={{
              padding: "12px 24px",
              borderRadius: "5px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              background: isStreaming ? "#555" : "#e63946",
              margin:"10px",
              color: "#fff",
            }}>
                    Stop Streaming
                </button>
            </div>
        </div>
    );
}

export default App;
