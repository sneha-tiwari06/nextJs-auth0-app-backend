# Next.js Frontend with Auth0 & Node.js Backend

This project includes a **Next.js frontend** with **Auth0 authentication** and a **Node.js backend** for admin operations. Upon successful authentication, an email containing the authentication token is sent to the user.

---

## 📌 Features
- **Next.js Frontend** with Auth0 authentication
- **Node.js Backend** to validate tokens
- **Email Service** using Nodemailer & SMTP
- **Role-based authentication** (Admin/User) using Auth0

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-repo.git
cd your-repo
```

### **2️⃣ Setup Environment Variables**
Create a `.env.local` file in the **frontend** directory and add:

```plaintext
AUTH0_SECRET=186f4c1ecca6972bcf63e6c59211470298155b9c55b7f4bf926331207550ae1a
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://dev-yfh62scd3nueps6j.us.auth0.com
AUTH0_CLIENT_ID=hl1YSsm5CNX7ct41mfyiXZxRuknMqprU
AUTH0_CLIENT_SECRET=DpjmC1tgmbbGgcn3L2_Wauv-cSVxCPG62IPw4wj-7e261CW_Y-7Fkx5vcHXdeVCh
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

```
🔹 Replace `your-auth0-domain` with your **Auth0 tenant domain** (e.g., `dev-xyz123.us.auth0.com`)

🔹 Replace `your-auth0-client-id` and `your-auth0-client-secret` from the **Auth0 dashboard**.

---

### **3️⃣ Backend: Setup & Run**

Navigate to the `backend` directory and create a `.env` file:

```plaintext
PORT=5000
AUTH0_DOMAIN=dev-yfh62scd3nueps6j.us.auth0.com
AUTH0_CLIENT_ID=hl1YSsm5CNX7ct41mfyiXZxRuknMqprU
AUTH0_ISSUER_BASE_URL=https://dev-yfh62scd3nueps6j.us.auth0.com
AUTH0_CLIENT_SECRET=DpjmC1tgmbbGgcn3L2_Wauv-cSVxCPG62IPw4wj-7e261CW_Y-7Fkx5vcHXdeVCh
EMAIL_USER=tiwarisneha491@gmail.com
EMAIL_PASS="vcta qosa ldir xluo"

```
🔹 **For Gmail SMTP:** Generate an **App Password** [here](https://myaccount.google.com/apppasswords)

🔹 **For SendGrid SMTP:** Use `smtp.sendgrid.net`, port `587`, and API key as `SMTP_PASS`

---

### **4️⃣ Install Dependencies**

#### Install backend dependencies
```bash
cd backend
npm install
```

#### Install frontend dependencies
```bash
cd frontend
npm install
```

---

### **5️⃣ Run the Project**

#### Start the backend
```bash
cd backend
npm start
```

#### Start the frontend
```bash
cd frontend
npm run dev
```

🚀 **Your app is now running!** Open `http://localhost:3000` in your browser.

---

## 📌 API Endpoints
### **Backend Endpoints (Node.js)**
| Method | Endpoint           | Description                    |
|--------|-------------------|--------------------------------|
| POST   | `/auth/callback`  | Receives & validates Auth0 token |
| POST   | `/send-email`     | Sends an email with the token  |

---

## 📌 Authentication Flow
1. User logs in via **Auth0** in the frontend.
2. Auth0 returns an **access token**.
3. The frontend sends this token to the **backend (`/auth/callback`)**.
4. The backend verifies the token with **Auth0**.
5. If valid, the backend **sends an email** with the authentication token to the user.

---

## 📌 Troubleshooting
- **Auth0 login issues?** Ensure the domain, client ID, and audience match the **Auth0 dashboard**.
- **Email not sending?** Check SMTP credentials and enable **App Passwords** for Gmail.
- **CORS error?** Add `CORS` middleware in `backend/index.js`:
  ```javascript
  const cors = require('cors');
  app.use(cors());
  ```

---

## 📌 Deployment

### **Frontend (Vercel)**
1. Push code to GitHub.
2. Deploy via **[Vercel](https://vercel.com/)**.
3. Add environment variables in Vercel settings.

### **Backend (Render/Heroku)**
1. Deploy the **Node.js backend** to **Render** or **Heroku**.
2. Update `NEXT_PUBLIC_BACKEND_URL` in `.env.local` with the deployed backend URL.

✅ **Done! Your app is now fully functional!** 🎉

