# Compliance-Aware Debt Collection Workflow & Analytics Dashboard

## 📌 Project Overview
This project is a **Compliance-Aware Debt Collection Workflow & Analytics Dashboard** developed as a **hackathon MVP**.  
It focuses on enforcing regulatory compliance in debt collection activities while providing basic analytics and transparency through a modular system design.

The solution demonstrates how **rule-based compliance logic**, a **data processing pipeline**, and a **basic working UI** can be integrated into a scalable architecture.

---

## 🎯 Problem Statement
Debt collection processes are often:
- Manual and fragmented  
- Prone to regulatory violations  
- Lacking real-time visibility  
- Weak in analytics and performance monitoring  

Ensuring compliance while tracking agent activities is critical to reduce legal and operational risk.

---

## 💡 Proposed Solution
A centralized digital platform that:
- Manages debt collection cases
- Enforces compliance rules automatically
- Processes case data through a defined pipeline
- Provides a basic UI for interaction and demonstration

---

## 🧱 System Architecture
The system follows a **modular architecture**, separating responsibilities across components:

- **Frontend**: Basic dashboard UI  
- **Backend**: Core logic and execution  
- **Model**: Rule-based compliance evaluation  
- **Pipeline**: Data → Model → Output workflow  
- **Data Layer**: Mock case data  

📁 Architecture diagram is available in `docs/architecture.png`

---

## 🗂️ Code Organization
- `src/frontend` – Basic working dashboard UI
- `src/backend` – Backend logic and compliance model
- `src/pipeline` – Data processing workflow
- `src/data` – Mock datasets
- `docs` – Architecture diagram
- `ppt` – Project presentation

---

## 🧠 Compliance Model (Model)
The **compliance model** is implemented as a **rule-based system** that evaluates each debt collection case.

### Rules Implemented:
- Maximum allowed follow-ups per case
- Restriction on contacting customers after working hours

This approach ensures:
- Explainability  
- Regulatory clarity  
- Easy upgrade to ML-based models in the future  

---

## 🔄 Data Processing Pipeline (Pipeline)
The pipeline processes data in the following steps:

1. Load mock case data from JSON  
2. Apply compliance rules using the model  
3. Generate structured output indicating compliance status and violations  

This pipeline design demonstrates **end-to-end feasibility** of the system.

---

## 🖥️ Basic Working UI
A simple HTML-based UI is provided to:
- Demonstrate user interaction
- Trigger the compliance workflow conceptually
- Fulfill hackathon UI requirements

The UI is intentionally minimal and focuses on clarity.

---

## 🛠️ Technology Stack
- **Frontend**: HTML, JavaScript  
- **Backend**: Node.js  
- **Model**: Rule-based logic  
- **Data**: JSON (mock data)  
- **Version Control**: Git & GitHub  

---

## 🚀 How to Run (Optional Demo)
1. Ensure Node.js is installed  
2. Navigate to the backend directory  
3. Run: node app.js
4. Open `frontend/index.html` in a browser for UI demonstration  

---

## 🔮 Future Scope
- AI/ML-based compliance risk scoring  
- Predictive analytics for case prioritization  
- Cloud deployment for scalability  
- Integration with real financial systems  

---

## 🏁 Conclusion
This project demonstrates a **compliance-centric MVP** for debt collection workflows.  
The focus is on **architecture, clarity, and regulatory alignment**, making it suitable for hackathon evaluation and future extension.
 
