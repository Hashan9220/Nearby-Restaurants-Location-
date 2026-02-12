# 📍 Nearby Restaurant App

A mobile application built with **React Native** that helps users find nearby restaurants using Google Maps, location services, and smart filtering options. Users can view restaurants on a map, sort them by rating or distance, and explore details easily.

---

## 🚀 Features

* 📌 Show nearby restaurants on Google Map
* 📍 Real-time user location detection
* ⭐ Sort by Rating
* 📏 Sort by Distance
* 🧭 Interactive map markers
* 🏪 Restaurant details view
* 🔍 Filter modal with radio buttons
* 📱 Clean and modern UI

---

## 🛠 Tech Stack

* **Frontend:** React Native
* **Language:** JavaScript / TypeScript
* **Maps:** Google Maps API
* **State Management:** React Hooks
* **Navigation:** React Navigation
* **UI Components:** Custom components
* **Database (optional):** SQLite

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nearby-restaurant-app.git

# Go to project folder
cd nearby-restaurant-app

# Install dependencies
npm install
# or
yarn install
```

---

## ▶️ Run the App

### Android

```bash
npx react-native run-android
```

### iOS

```bash
cd ios
pod install
cd ..
npx react-native run-ios
```

---

## 🔑 Environment Setup

Create a `.env` file in root directory:

```env
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

---

## 🗺 Google Maps Setup

1. Go to Google Cloud Console
2. Enable:

   * Maps SDK for Android
   * Maps SDK for iOS
   * Places API
3. Create API Key
4. Add API key to:

   * `AndroidManifest.xml`
   * `AppDelegate.m / AppDelegate.swift`

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── FilterModal.js
│   ├── RestaurantCard.js
│
├── screens/
│   ├── Home.js
│   ├── Welcome.js
│   ├── RestaurantDetails.js
│
├── data/
│   └── restaurantsData.js
│
├── navigation/
│   └── AppNavigator.js
│
└── utils/
    └── location.js
```

---

## 🎯 Filter Options

* 🔘 Sort by Rating
* 🔘 Sort by Distance

---

## 🧠 Future Improvements

* 🔐 User authentication
* ❤️ Favorite restaurants
* 🧭 Route navigation
* 📊 Analytics dashboard
* 🌐 Backend integration
* 🗄 Cloud database

---

## 📸 Screenshots

>  ![Image Alt](https://github.com/Hashan9220/Nearby-Restaurants-Location-/blob/b953cc20f2e85a1c6a3e65e2f6062c577794fabb/ss2.PNG)
> ![Image Alt](https://github.com/Hashan9220/Nearby-Restaurants-Location-/blob/86008ccbd583873937d3141b1feff0717599ac36/ss3.PNG)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your feature branch

   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch

   ```bash
   git push origin feature/new-feature
   ```
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Hashan Saminda**
Mobile Developer | React Native | Android | iOS

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

> Made with ❤️ using React Native
