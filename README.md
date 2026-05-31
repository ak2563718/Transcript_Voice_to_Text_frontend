# 🎙️ TranscribX Frontend

A modern voice-to-text transcription application built with Next.js. TranscribX allows users to record audio in real time, stream audio data through WebSockets, receive live transcriptions, and manage transcription history through an intuitive user interface.

---

## 🚀 Features

* 🎤 Real-time voice recording
* ⚡ Live transcription using WebSockets
* 🔐 Google OAuth Authentication
* 🗂️ Transcript history management
* 📥 Download recorded audio files
* 🔄 State management with Redux Toolkit
* 🌐 API communication using Axios
* 📱 Responsive and modern UI
* ⚡ Built with Next.js App Router

---

## 🛠️ Tech Stack

### Frontend Framework

* Next.js
* React
* TypeScript

### State Management

* Redux Toolkit
* React Redux

### Authentication

* Google OAuth

### Communication

* WebSocket
* Axios

### Styling

* Tailwind CSS

### Icons

* Lucide React

---

## 📂 Project Structure

```bash
src/
├── app/
├── components/
├── redux/
│   ├── feature/
│   ├── store.ts
│   └── hook.ts
├── services/
├── types/
└── utils/
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-frontend-repository-url>
```

Navigate into the project:

```bash
cd transcribx-frontend
```

Install dependencies:

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000

NEXT_PUBLIC_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
```

---

## ▶️ Running the Application

Development Server:

```bash
npm run dev
```

Production Build:

```bash
npm run build
npm start
```

---

## 🔄 Application Flow

1. User signs in using Google OAuth.
2. Audio is captured from the microphone.
3. Audio chunks are streamed through WebSocket.
4. Backend processes audio and generates transcripts.
5. Live transcript is displayed instantly.
6. Final transcript and audio are saved.
7. Users can view and manage transcription history.

---

## 📸 Screenshots

Add screenshots of:

* Home Page
* Recording Interface
* Live Transcript Screen
* Transcript History Page

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push changes

```bash
git push origin feature/new-feature
```

5. Create a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Akash Kumar

GitHub: https://github.com/ak2563718
