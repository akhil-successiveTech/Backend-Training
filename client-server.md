## Client-Server Architecture (With Node.js)

The **Client-Server Architecture** is a model where two entities — the **client** and the **server** — communicate over a network.

### Client
- A client is a device or software (like a web browser or mobile app) that sends a request to the server.
- It interacts with the user and sends HTTP requests (like GET, POST) to the server.

### Server (Powered by Node.js)
- A server listens for incoming requests, processes them, and sends back the appropriate response.
- With Node.js, you can build lightweight, fast, and efficient servers that handle multiple requests using non-blocking, event-driven architecture.

### Example Flow:
- A user opens a web page in the browser (client).
- The browser sends a **GET** request to the server.
- Node.js server receives the request, processes it, and responds with data (HTML, JSON, etc.).
- The client displays the received response to the user.

### Why Use Node.js for Servers?
- Asynchronous and non-blocking I/O.
- Handles thousands of connections simultaneously.
- Ideal for real-time apps like chat applications and streaming platforms.