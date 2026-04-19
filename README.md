# 🚀 WorkBridge — Freelancing Platform

> Connecting skilled individuals with real-world opportunities

---

## 🌐 Live Demo
🔗 https://your-live-link  
🔗 https://your-frontend-vercel-link  

---

##  About WorkBridge

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

##  System Workflow

```mermaid
flowchart TD
    A[User Posts Task] --> B[Task appears in Marketplace]
    B -->C[Freelancer Accepts Task]
    C -->D[Payment Request Generated]
    D -->E[User Approves Payment]
    E -->F[Payment Credited Admin Acc]
    F -->G[Freelancer Receive Message Payment is Secure Start Work]
    G -->H[Freelancer Completes Task]
    I -->J[Work Delivered]
    K -->L[Task Marked Completed]
    M -->N[Admin Give Payment To TheyFreelancer]
    
