<div align="center">

# 🐧 Pingora

**A full-stack social network with real-time chat & notifications**
*Un réseau social full stack avec messagerie et notifications en temps réel*

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=flat&logo=socketdotio&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)

🇬🇧 [English](#-english) · 🇫🇷 [Français](#-français)

</div>

---

## 🇬🇧 English

🗓️ *Developed Oct 2024 – Jan 2025 · published on GitHub in 2026*

### 💡 About
Pingora is a social network where users can post, comment, chat in real time and get instant notifications.
Team project (Oct 2024 – Jan 2025), built with the Unified Process methodology and collaborative Git workflow.

👩‍💻 **My role:** sub-team lead and developer of the **Chat**, **Notifications** and **Posts** modules.

🤝 Original team repository: [sonia010171/versionfinale](https://github.com/sonia010171/versionfinale)

### ✨ Features
- 🔐 JWT authentication, Google sign-in with Firebase, password reset
- 📝 Posts, likes and comments
- 👥 User profiles, follow system and "who to follow" suggestions
- 💬 Real-time messaging (Socket.IO, CometChat)
- 🔔 Real-time notifications
- 📸 Stories and notes
- 🔎 Search for users and posts
- 📱 Responsive UI (Tailwind CSS, DaisyUI)

### 🛠️ Tech stack
| Layer | Technologies |
|---|---|
| Frontend | React, Vite, Tailwind CSS, DaisyUI, TanStack Query |
| Backend | Node.js, Express, Mongoose |
| Database | MongoDB |
| Real-time | Socket.IO, CometChat |
| Services | Firebase (Auth, Storage), Cloudinary |

### 📂 Structure
```
backend/    Express API: controllers, models, routes, middleware
frontend/   React app (Vite)
```

### 🚀 Getting started
```bash
# 1. Environment variables
cp .env.example .env
cp frontend/.env.example frontend/.env
# Add your Firebase Admin service key to backend/firebaseconfig/serviceAccountKey.json

# 2. Install & run
npm install && npm install --prefix frontend
npm run dev                      # backend
npm run dev --prefix frontend    # frontend
```

---

## 🇫🇷 Français

🗓️ *Développé d'oct. 2024 à janv. 2025 · publié sur GitHub en 2026*

### 💡 À propos
Pingora est un réseau social qui permet de publier, commenter, discuter en temps réel et recevoir des notifications instantanées.
Projet d'équipe (oct. 2024 – janv. 2025), mené selon la méthode Unified Process avec un workflow Git collaboratif.

👩‍💻 **Mon rôle :** cheffe d'un sous-groupe et développeuse des modules **Chat**, **Notifications** et **Publications**.

🤝 Dépôt original de l'équipe : [sonia010171/versionfinale](https://github.com/sonia010171/versionfinale)

### ✨ Fonctionnalités
- 🔐 Authentification JWT, connexion Google via Firebase, réinitialisation du mot de passe
- 📝 Publications, likes et commentaires
- 👥 Profils, abonnements et suggestions de comptes à suivre
- 💬 Messagerie instantanée (Socket.IO, CometChat)
- 🔔 Notifications en temps réel
- 📸 Stories et notes
- 🔎 Recherche d'utilisateurs et de publications
- 📱 Interface responsive (Tailwind CSS, DaisyUI)

### 🚀 Lancer le projet
Voir les commandes de la section anglaise ci-dessus 👆 (variables d'environnement, installation, démarrage).

---

<div align="center">

Made with 💜 by **Meli**

</div>
