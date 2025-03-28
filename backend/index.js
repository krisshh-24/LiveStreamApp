import http from "http";
import path from "path";
import { spawn } from "child_process";
import express from "express";
import { Server as SocketIO } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new SocketIO(server);

app.use(express.static(path.resolve("./public")));

let ffmpegProcess = null;

io.on("connection", (socket) => {
    console.log("Socket Connected", socket.id);

    socket.on("start-stream", (streamKey) => {
        console.log(`Starting stream for key: ${streamKey}`);

        const options = [
            "-i", "-",
            "-c:v", "libx264",
            "-preset", "ultrafast",
            "-tune", "zerolatency",
            "-r", "25",
            "-g", "50",
            "-keyint_min", "25",
            "-crf", "25",
            "-pix_fmt", "yuv420p",
            "-sc_threshold", "0",
            "-profile:v", "main",
            "-level", "3.1",
            "-c:a", "aac",
            "-b:a", "128k",
            "-ar", "44100",
            "-f", "flv",
            `rtmp://a.rtmp.youtube.com/live2/${streamKey}`,
        ];

        ffmpegProcess = spawn("ffmpeg", options);

        ffmpegProcess.stdout.on("data", (data) => {
            console.log(`ffmpeg stdout: ${data}`);
        });

        ffmpegProcess.stderr.on("data", (data) => {
            console.log(`ffmpeg stderr: ${data}`);
        });

        ffmpegProcess.on("close", (code) => {
            console.log(`FFmpeg process closed with code ${code}`);
            ffmpegProcess = null;
        });
    });

    socket.on("binarystream", (stream) => {
        if (ffmpegProcess) {
            ffmpegProcess.stdin.write(stream, (err) => {
                if (err) console.log("Stream Write Error:", err);
            });
        }
    });

    socket.on("stop-stream", () => {
        console.log("Stopping stream...");
        if (ffmpegProcess) {
            ffmpegProcess.stdin.end(); // Stop taking input
            ffmpegProcess.kill("SIGINT"); // Terminate FFmpeg
            ffmpegProcess = null;
        }
    });

    socket.on("disconnect", () => {
        console.log(`User ${socket.id} disconnected`);
    });
});

server.listen(3000, () => console.log("HTTP server is running on port 3000"));
