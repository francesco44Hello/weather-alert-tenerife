
# 🌊 Boca Cangrejo Sentinel: Barranco Early Warning System

A real-time monitoring and alerting system designed to protect homes in **Boca Cangrejo, Tenerife**, from sudden mountain runoff (barrancos) caused by heavy rain in the upper elevations of **El Rosario**.

---

## 📌 The Problem: A Tale of Two Microclimates
Tenerife is famous for its **15+ microclimates**. In the coastal village of **Boca Cangrejo**, the sky can be perfectly clear and the sea calm, making it impossible to tell that it is pouring rain just a few kilometers uphill in **El Rosario**.

When it rains heavily in the mountains, a massive stream of water (the barranco) descends toward the coast. For locals, safety depends on a manual task: **inserting a protective wooden barrier** into their doorframes to block the water from entering their homes. Usually, by the time you see the water, it’s too late.

## 🚀 The Solution
This project automates the "watchman" role. By monitoring weather data at the mountain source, the system provides a **15-minute head start**, sending a high-priority alert to residents before the water reaches the coast.

### Technical Architecture
* **Data Source:** OpenWeather API monitoring precise Lat/Lon coordinates in the El Rosario catchment area.
* **Backend:** Google Cloud Functions (Firebase) running on a **15-minute cron schedule**.
* **Database:** Firestore (NoSQL) stores the real-time status and rain precipitation levels.
* **Alerting:** A private **Telegram Bot** that pushes "Siren" notifications directly to the user's phone.
* **Dashboard:** A **Next.js 14** web application that turns bright red when danger is detected, serving as a visual "Status Board" for the household.

---

## 🛠️ Tech Stack
| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js (App Router), Tailwind CSS, TypeScript |
| **Backend** | Firebase Functions (Node.js) |
| **Database** | Google Firestore |
| **Automation** | Google Cloud Scheduler |
| **Security** | Google Secret Manager & GitHub Branch Protection |
| **Alerting** | Telegram Bot API |

---

## 🔒 Security & Professional Workflow
This repository follows industry-standard engineering practices:
* **Zero-Trust Secrets:** All API keys and Bot Tokens are stored in **Google Secret Manager**, never hardcoded or stored in the repository.
* **Branch Protection:** The `main` branch is protected. All updates are made via **Feature Branches** and **Pull Requests** to ensure code quality.
* **Firestore Security Rules:** Locked-down rules ensure only the authorized Cloud Function (Admin SDK) can update the alert status, while the public can only read it.
* **CI/CD Mindset:** Environment variables are managed via `.env` files and Git-ignored to prevent credential leaks.

---

## 📖 How it Works
1.  **The Watcher:** Every 15 minutes, a Cloud Function pings the mountains.
2.  **The Logic:** If precipitation exceeds the safety threshold (e.g., >2.0mm/h), the state is set to `isDanger: true`.
3.  **The Alarm:** The function pushes a Telegram message: *"🚨 BARRANCO ALERT! Rain in El Rosario: 3.5mm/h. Put the wood in!"*
4.  **The UI:** The dashboard (deployed on Firebase Hosting) updates instantly via a real-time snapshot listener, providing a constant visual reference for the household.

---

## 👤 Author
**Francesco Longo** *Software Developer & Tenerife Resident*

*Project born out of local necessity and powered by modern cloud infrastructure.*
