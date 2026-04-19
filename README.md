# 🚀 WorkBridge — Freelancing Platform

> Connecting skilled individuals with real-world opportunities

---

## 🌐 Live Demo
🔗 https://workbridge-phi.vercel.app/

---

## 📌 About WorkBridge

WorkBridge is a full-stack freelancing platform designed to bridge the gap between users who need work done and skilled freelancers who are looking for opportunities.

The platform enables a seamless workflow where tasks can be posted, accepted, executed, and completed with a structured payment system.

---

## ⚙️ Tech Stack

| Layer       | Technology        |
|------------|------------------|
| Frontend   | React.js (Vite)  |
| Backend    | Spring Boot      |
| Database   | PostgreSQL       |
| Deployment | Render, Vercel   |

---

## 🔄 System Workflow

```mermaid
flowchart TD
A[User Posts Task] --> B[Task appears in Marketplace]
B --> C[Freelancer Accepts Task]
C --> D[Payment Request Generated]
D --> E[User Approves Payment]

E --> I[Payment Stored in Admin Escrow]
I --> J[Freelancer Notified Payment Secured Start Work]

J --> F[Freelancer Completes Task]
F --> G[Work Delivered]

G --> H[Task Marked Completed]
H --> K[Admin Releases Payment to Freelancer]
