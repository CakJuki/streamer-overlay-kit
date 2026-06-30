// server.js
// Custom server: menjalankan Next.js dan Socket.io dalam satu proses.
// Dipakai supaya Panel dan Overlay bisa komunikasi real-time tanpa
// server terpisah.

const { createServer } = require("http");
const next = require("next");
const { Server } = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    handle(req, res);
  });

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("[socket] client terhubung:", socket.id);

    // Pesan TEST dari Tahap 2: Panel mengirim "test-message",
    // semua client lain (termasuk Overlay) menerimanya.
    socket.on("test-message", (data) => {
      console.log("[socket] test-message diterima:", data);
      io.emit("test-message", data);
    });

    socket.on("disconnect", () => {
      console.log("[socket] client terputus:", socket.id);
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Server siap di http://${hostname}:${port}`);
    });
});
