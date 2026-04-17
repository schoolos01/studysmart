# PROJECT: Study Smart Innovations – Next Gen EdTech Platform

## 🎯 OBJECTIVE

Design and develop a modern, scalable, conversion-focused website for Study Smart Innovations that serves:

1. B2C (Students buying courses)
2. B2B (Schools purchasing services & software)
3. Lead generation + automation ecosystem

---

## 🧱 CORE SITE ARCHITECTURE

### 1. HOME PAGE (High Conversion Landing)

* Hero section:

  * Tagline: “Learn Future Skills: Coding, AI, Robotics”
  * CTA buttons:

    * Explore Courses
    * For Schools
* Sections:

  * Featured Courses (Python, Java, C)
  * Services for Schools
  * Why Choose Us (trust factors)
  * Testimonials (future-ready placeholder)
  * CTA: Book Free Demo / Join Course

---

### 2. ONLINE COURSES PAGE (MAIN HUB)

* Filterable course catalog
* Each course links to **dedicated landing pages**

#### Subpages:

* /courses/python
* /courses/java
* /courses/c-programming

#### Each Course Landing Page MUST include:

* Course overview
* Duration (e.g., 3 months)
* Curriculum (accordion UI)
* Instructor info
* Pricing + CTA
* Demo class booking
* WhatsApp CTA
* Testimonials (future scalable)

---

### 3. EDUCATION SERVICES (B2B PAGE)

#### Sections:

* Robotics & AI Workshops
* Robotics + STEM Lab Setup
* Teacher Training Programs

#### Each service block:

* Problem → Solution → Outcome format
* Visual diagrams / icons
* CTA:

  * “Request Proposal”
  * “Book Demo for School”

---

### 4. SCHOOL MANAGEMENT SOFTWARE PAGE

#### Purpose:

Showcase SaaS offering

#### Sections:

* Features:

  * Student Management
  * Attendance
  * Fees Management
  * Analytics Dashboard
* Screenshots (placeholder)
* Pricing tiers (optional)
* CTA:

  * Book Demo
  * Request Callback

---

### 5. ABOUT US

* Founder story (H. Goswami)
* Vision: Future-ready education
* Achievements / milestones

---

### 6. CONTACT + LEAD CAPTURE SYSTEM

#### Forms:

* Contact form
* Demo request form
* Course inquiry form
* Newsletter subscription

---

## 🧠 BACKEND REQUIREMENTS

### Tech Stack Suggestion:

* Frontend: React (Next.js preferred)
* Backend: FastAPI / Node.js
* Database: MongoDB

---

## 📊 LEAD MANAGEMENT SYSTEM

### MongoDB Collections:

#### 1. contacts

{
name,
email,
phone,
message,
source (page),
created_at
}

#### 2. course_leads

{
name,
email,
phone,
course,
intent (demo/enroll),
created_at
}

#### 3. school_leads

{
school_name,
contact_person,
phone,
email,
service_type,
message,
created_at
}

#### 4. subscribers

{
email,
source,
created_at
}

---

## 📧 EMAIL NOTIFICATION SYSTEM (SMTP - Hostinger)

### On Every Form Submission:

* Send email to admin (you)
* Send auto-response to user

#### SMTP Config:

* Host: (provided)
* Port: (provided)
* Username: (provided)
* Password: (provided)

#### Email Triggers:

* New lead alert
* Demo request alert
* Subscription confirmation

---

## 📈 TRACKING & ANALYTICS

* Track:

  * Page visits
  * Button clicks (CTA tracking)
  * Form submissions
* Store key events in MongoDB (optional lightweight analytics)

---

## 🎨 UX / UI GUIDELINES

### Design Style:

* Clean, modern, tech-education feel
* Colors:

  * Primary: Blue / Purple gradient
  * Accent: Orange CTA
* Typography:

  * Bold headings
  * Large readable fonts

---

### UX Principles:

* Clear CTA every screen
* Minimal friction forms
* Mobile-first design
* Fast loading (important)

---

## 🔥 CONVERSION OPTIMIZATION FEATURES

* Sticky CTA button (Enroll Now / Book Demo)
* WhatsApp floating button
* Exit intent popup (optional)
* Limited seats messaging
* Social proof (future scalable)

---

## 🧩 FUTURE SCALABILITY

* Admin dashboard (Phase 2)
* LMS integration (Phase 2)
* Payment gateway (Razorpay/Stripe)
* Chatbot (AI assistant for course guidance)

---

## 📦 DEPLOYMENT

* Hosting: Vercel / AWS / Hostinger
* Backend API deployed separately
* MongoDB Atlas recommended

---

## ✅ SUCCESS METRICS

* Increased lead capture rate
* Higher course conversion
* B2B inquiries from schools
* Reduced manual follow-up effort

---

## ⚠️ IMPORTANT NOTES

* Keep architecture modular
* Each course page should be reusable template
* Forms must be reusable components
* SEO optimization required (meta tags, structured data)

---

END OF SPECIFICATION

