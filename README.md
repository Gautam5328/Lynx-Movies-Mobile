# Lynx Movies

## Introduction
Lynx is a high-performance, Rust-powered JavaScript framework designed for cross-platform mobile application development. This guide will walk you through setting up, running, and debugging a Lynx JS project.

## Prerequisites
Before you begin, ensure you have the following installed:

- **Node.js 18 or later** (Node.js 18.19+ required for TypeScript projects)
- **NPM or Yarn** (Package managers)
- **MacOS/Linux** (for iOS development, Xcode is required)
- **Android SDK** (for Android development)

## Installation
### 1. Create a New Lynx Project
Run the following command to generate a new Lynx project using Rspeedy, a Rust-powered build tool:

```sh
npm create rspeedy@latest
```

Follow the prompts to configure your project.

### 2. Navigate to the Project Directory
```sh
cd <project-name>
```

### 3. Install Dependencies
```sh
npm install
```

## Running the Development Server
Start the Lynx development server by running:
```sh
npm run dev
```

A QR code will appear in the terminal. Use Lynx Explorer to scan and preview your app.

## Previewing with Lynx Explorer
### For iOS:
1. Install Xcode from the Mac App Store.
2. Download **Lynx Explorer** for macOS (arm64/x86_64) from the official website.
3. Extract and install:
   ```sh
   mkdir -p LynxExplorer-arm64.app/
   tar -zxf LynxExplorer-arm64.app.tar.gz -C LynxExplorer-arm64.app/
   ```
4. Drag **LynxExplorer-arm64.app** into the iOS Simulator to install.

### For Android:
1. Download the **Lynx Explorer APK** and install it on your Android device.
2. Open **Lynx Explorer** and scan the QR code from the terminal.

## Building and Deploying the App
To build the project for production:
```sh
npm run build
```

For Android:
```sh
npm run build:android
```

For iOS:
```sh
npm run build:ios
```

## Debugging with Lynx DevTool
Lynx provides an official **DevTool** for debugging applications:

1. Download and install **Lynx DevTool** on your desktop.
2. Connect your device via USB.
3. Open **Lynx DevTool** and start debugging (inspect logs, network requests, performance optimization).

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

## License
This project is licensed under the [MIT License](LICENSE).

---

Happy coding with Lynx! 🚀

