# Business Requirements Document (BRD)
## SAHAK - សហការ
### Peer-to-Peer Learning & Mentorship Platform

**Date:** DD/MM/YYYY
**Version:** 1.0

---

## Approvals

| Role | Name | Title | Signature / Date |
|---|---|---|---|
| Team Lead | [Name] | [Title] | |
| Product / Design | [Name] | [Title] | |

---

## 1. Business Overview

### 1.1 Purpose

SAHAK is a digital peer-learning platform that connects university students with high school students in Grades 10–12. High school students get affordable, relatable academic support and guidance on university majors, scholarships, and careers. University students earn flexible income and gain mentoring experience by sharing knowledge they already worked hard to build.

### 1.1.1 Business Drivers

**Financial:** The platform's main revenue comes from a commission charged on every paid study session booked between a student and a mentor. Additional revenue can come from mentor verification fees, a premium subscription for students, and future partnerships with universities or scholarship programs.

**Operational:** University students list their subjects, availability, and mentor profile. High school students browse, filter, and book sessions based on their academic needs, creating a repeat-usage cycle similar to an on-demand service marketplace.

**Market:** This solves a real, everyday problem. Cambodian high school students often struggle with difficult subjects and cannot afford or feel comfortable approaching formal tutoring centers. At the same time, capable university students have few ways to turn their knowledge into income. This gap exists across schools nationwide, not just occasionally.

### 1.2 Project Scope

#### 1.2.1 In Scope Functionality

**User Registration and Login**

The system will provide a registration page for both High School Students and University Students (Mentors) to create an account.

- Role selection (High School Student or Mentor)
- Full name
- Phone number or email (used as unique identifier)
- Password and confirmation of password

For mentors, additional information will be required to help students choose the right person:

- University name and major
- Year of study
- Subjects or skills they can teach
- Short bio / introduction

Once registration is complete, the system stores user information securely and creates a profile based on the selected role.

**Mentor Discovery & Search**
High school students can browse and search for mentors using filters such as subject, grade level, availability, language, price, and personality/teaching style, so it is easier to find someone they feel comfortable learning with.

**Personality-Based Matching**
Both students and mentors complete a short, situational questionnaire when they register. The system uses their answers to suggest mentors whose communication and teaching style is likely to be a comfortable fit for that student, alongside subject and availability matching. See section 1.2.3 for details on the method.

**Mentor Profile & Listing**
Mentors can create and manage a profile that shows their subjects, experience, price, availability calendar, verification status, and reviews from past students.

**Session Booking**
Students can book a one-on-one or small-group study session with a chosen mentor. Price and time can be proposed and negotiated between both sides before the session is confirmed.

**Quick Help Requests**
Students who need urgent help with a specific question can send a quick request to mentors who are marked as currently available, without going through a full booking.

**Real-Time Notifications**
The system will alert mentors immediately when a student sends a booking or quick-help request, and will alert students when a mentor responds, so no one has to wait and check manually.

**In-App Messaging**
Once a booking is created, students and mentors can chat within the app to confirm details such as the topic, time, or meeting link.

**Payments & Commission**
The platform will process session payments and automatically calculate the platform's commission before paying out the remaining amount to the mentor.

**Reviews & Ratings**
After a session is completed, students can rate the mentor and leave a written review, helping future students choose the right mentor.

**Career & Scholarship Guidance**
Beyond academic subjects, mentors can offer guidance sessions or share content about choosing a university, comparing majors, and applying for scholarships.

**Admin Panel**
Platform staff can review mentor verification requests, handle reports or disputes between users, and view basic platform statistics.

#### 1.2.2 Out of Scope Functionality

- Native iOS/Android mobile apps (the platform will launch as a responsive web application)
- In-house video-calling feature (sessions may use existing tools such as Zoom, Google Meet, or Telegram for the first release)
- Any systems outside of the main SAHAK platform
- A clinical or diagnostic personality/psychological assessment (the personality feature is for matching comfort only, not a psychological evaluation)

#### 1.2.3 Personality Assessment & Matching Method

One of the problems SAHAK is solving is that students often feel uncomfortable learning from a tutor whose personality or communication style does not match their own. To address this, the platform will include a short compatibility questionnaire and a matching score, described below.

**Why not MBTI or a full personality test:** Well-known tests like MBTI are long, are not well supported by scientific research, and are trademarked, which makes them a poor fit for a quick sign-up flow. A full academic personality test (e.g., the complete "Big Five") can take 10+ minutes to complete, which is too long for most students.

**Recommended method – a short, situational questionnaire:** Instead, SAHAK will use a short, easy questionnaire of about 10–12 questions, based on situations a student or mentor would actually experience during a study session, rather than abstract personality statements. For example: *"Your mentor points out a mistake in your homework. Which response would help you learn better – (A) tell me directly what's wrong, or (B) explain it gently and encourage me first?"* Students answer based on what they prefer; mentors answer based on how they naturally teach.

The questionnaire will measure a small set of traits that matter for a tutoring relationship, not general personality:

- **Communication style** – direct/straightforward vs. gentle/encouraging
- **Pace** – fast-paced vs. step-by-step
- **Structure** – organized/planned sessions vs. flexible/casual
- **Energy** – serious & focused vs. relaxed & fun
- **Feedback style** – direct correction vs. positive reinforcement first

**How matching will work:** Each user's answers are converted into a simple set of scores (one score per trait above). When a student searches for a mentor, the system compares the student's preferred scores with each mentor's natural-style scores and calculates a compatibility percentage. This percentage is shown alongside subject, price, and availability, as one more way to help the student choose – it does not replace those filters, it works together with them.

**Why start simple:** At launch, the platform will use a straightforward weighted-scoring formula (comparing the two sets of scores) rather than artificial intelligence or machine learning, since there will not be enough session and rating data yet to train a smart model. Once SAHAK has real data from completed sessions and reviews, the matching logic can be improved over time, for example by giving more weight to traits that turn out to predict higher ratings or repeat bookings.

### 1.3 System Perspective

#### 1.3.1 Assumptions

- It is assumed that most students and mentors will access the platform through a modern web browser on a smartphone or laptop.
- It is assumed that students and mentors have access to a stable internet connection to browse, book, and chat on the platform.
- It is assumed that mentors will provide accurate and honest information about their subjects, experience, and availability.
- It is assumed that mentors and students can agree on a fair session price within the platform's negotiation feature.
- The system assumes the database can handle booking requests, payments, and status updates in real time, even during busy periods such as exam season.
- It is assumed users have access to a payment method supported by the platform (e.g., mobile wallet or bank transfer).

#### 1.3.2 Constraints

The project is constrained by limited resources, technology choices, and reliance on third-party services, which may affect development speed and available features.

- **Time Constraint:** The project must be completed within the fixed timeline defined in the project plan.
- **Budget Constraint:** Limited budget restricts the use of paid tools, such as premium payment gateways or app-store deployment.
- **Technology Constraint:** The system will be developed as a responsive web application, which may limit access to some native mobile features (e.g., push notifications may depend on browser support).
- **Third-Party Service Constraint:** The project depends on external services such as payment gateways and messaging/notification providers, which may have usage limits or service restrictions.

#### 1.3.3 Risks

The success of the SAHAK platform depends heavily on trust, mentor quality, and matching accuracy, which introduce several risks.

- **Trust & Safety Risk:** Without proper verification, students or parents may not trust that mentors are genuine university students.
- **Supply Risk:** An insufficient number of active, quality mentors may reduce the value of the platform for students.
- **Payment Risk:** Issues with payment processing or commission calculation could cause disputes between students and mentors.
- **Connectivity Risk:** Poor internet connectivity may delay booking confirmations, notifications, or chat messages.
- **No-Show / Cancellation Risk:** Students or mentors cancelling last-minute could hurt trust in the platform.

#### 1.3.4 Issues

Operational challenges related to trust, matching, and user behavior may affect the platform during real-world use.

- New users may find it hard to judge a mentor's quality before their first session, especially before reviews exist.
- Students and mentors may find it difficult to agree on price during negotiation.
- Some subjects or grade levels may have very few available mentors at first, limiting matching options.
- Users may enter incomplete or unclear profile information, making it harder to match students with the right mentor.

---

## 2. Business Requirements

The requirements in this document are prioritized as follows:

| Value | Rating | Description |
|---|---|---|
| 1 | Critical | This requirement is critical to the success of the project. The project cannot work without it. |
| 2 | High | This requirement is high priority, but the project can still run at a basic level without it. |
| 3 | Medium | This requirement adds value, but the project can proceed without it. |
| 4 | Low | This is a low priority, "nice to have" feature if time and budget allow. |
| 5 | Future | This requirement is out of scope for now, but noted for a possible future release. |

### 2.1 Functional Requirements

| Reference | Priority | Description | Rationale |
|---|---|---|---|
| FR-0.1 | 1 | The system shall allow users to register and log in as either a High School Student or a University Student (Mentor). | Identify users and secure access to the platform. |
| FR-0.2 | 1 | Registration shall require: role selection, full name, phone number or email (used as unique identifier), grade level or university/year, and password with confirmation. | Ensure correct user identification and enough information to match mentors and students. |
| FR-0.3 | 1 | For University Students (Mentors), the system shall additionally collect: university name, major, subjects/skills they can teach, years of study, and a short introduction. | Provide enough information for high school students to choose the right mentor. |
| FR-0.4 | 1 | The system shall provide a login page where registered users can log in using their phone number/email and password. | Authenticate users before granting access. |
| FR-0.5 | 2 | After login, High School Students and Mentors shall be redirected to their own home screen (Student Dashboard or Mentor Dashboard). | Provide role-based access to relevant features. |
| FR-0.6 | 2 | The system shall allow users to reset their password using their registered phone number or email. | Allow users to regain access if they forget their password. |
| FR-1.1 | 1 | The system shall allow high school students to search and filter mentors by subject, grade level, availability, language, and price range. | Help students quickly find a mentor that fits their needs. |
| FR-1.2 | 2 | The system shall allow students to filter mentors by personality or teaching style (e.g., patient, fun, strict, exam-focused). | Help students find a mentor they feel comfortable learning with. |
| FR-1.3 | 1 | The system shall display a list or grid of matching mentors with a photo, name, subject(s), rating, and price. | Give students an easy overview to compare mentors. |
| FR-1.4 | 2 | The system shall allow students to view a full mentor profile including bio, experience, subjects, reviews, verification status, and availability calendar. | Help students make an informed decision before booking. |
| FR-1.5 | 2 | During registration, the system shall present a short situational questionnaire (about 10–12 questions) to both students and mentors to capture communication style, pace, structure, energy, and feedback-style preferences. | Collect the information needed to suggest mentors who are a comfortable personality fit. |
| FR-1.6 | 2 | The system shall calculate a compatibility score between a student and each matching mentor based on their questionnaire answers, and display it (e.g., as a percentage or short label) alongside the mentor's profile in search results. | Help students choose a mentor they are likely to feel comfortable learning with, addressing a key comfort/communication problem raised by students. |
| FR-1.7 | 3 | The system shall allow users to retake the questionnaire and update their answers at any time from their profile settings. | Allow preferences and teaching style to be corrected or to evolve over time. |
| FR-2.1 | 1 | The system shall provide mentors with a profile page where they can list the subjects and skills they can teach. | Allow mentors to present their expertise to students. |
| FR-2.2 | 2 | The system shall allow mentors to set their own price (or price range) per session, which can later be adjusted or negotiated with the student. | Support the flexible, negotiable pricing model described by the business. |
| FR-2.3 | 2 | The system shall allow mentors to set and update their weekly availability (days and time slots) on a calendar. | Let students see accurate, up-to-date availability when booking. |
| FR-2.4 | 2 | The system shall allow mentors to request a "Verified Mentor" badge by submitting proof of university enrollment. | Build trust and support the verification-fee revenue stream. |
| FR-3.1 | 1 | The system shall allow a student to book a one-on-one or small-group study session with a chosen mentor, selecting subject, date, time, and session type. | Core booking function of the platform. |
| FR-3.2 | 1 | A booking request shall include: student ID, mentor ID, subject, proposed date/time, proposed price, and an optional description of what the student needs help with. | Give mentors enough context to accept or prepare for the session. |
| FR-3.3 | 2 | Once submitted, a booking request status shall be set to "Pending" until the mentor accepts, rejects, or proposes a new price/time. | Track booking progress and support price negotiation. |
| FR-3.4 | 2 | The system shall allow the mentor and student to exchange a counter-offer on price or time before a session is confirmed. | Support the negotiable pricing model. |
| FR-3.5 | 2 | The system shall allow either party to cancel or reschedule a confirmed session within an allowed time window. | Give users flexibility while protecting both sides from last-minute changes. |
| FR-4.1 | 1 | The system shall notify a mentor in real time when a student sends a booking request or quick-help request. | Reduce response time and improve reliability of the service. |
| FR-4.2 | 2 | The system shall notify a student in real time when a mentor accepts, rejects, or responds to a booking request. | Keep students informed of their booking status. |
| FR-4.3 | 3 | The system shall provide a simple in-app chat between a student and a mentor once a booking is created, so both sides can coordinate. | Allow students and mentors to communicate directly and confirm session details. |
| FR-5.1 | 1 | The system shall allow a student to send a "Quick Help" request to available mentors for urgent, short questions, outside of a full booked session. | Support the flexible, on-demand help use case described by the business. |
| FR-5.2 | 2 | Quick Help requests shall be visible to mentors who are marked as "currently available" and matched by subject. | Route urgent requests to the right, available mentors. |
| FR-6.1 | 1 | The system shall allow mentors and students to process session payment and commission through the platform. | Enable the commission-based revenue model. |
| FR-6.2 | 2 | The system shall automatically calculate and deduct a platform commission (10–20%) from each completed, paid session. | Support the core business revenue model. |
| FR-6.3 | 2 | The system shall record and display a mentor's earnings history and a student's payment history. | Give transparency to both mentors and students. |
| FR-7.1 | 2 | After a session is completed, the system shall allow the student to rate the mentor and leave a written review. | Build trust and help future students choose a mentor. |
| FR-7.2 | 3 | The system shall display a mentor's average rating and number of completed sessions on their profile. | Help students compare mentors quickly. |
| FR-8.1 | 2 | The system shall provide a section where mentors can share guidance content or answer questions about university majors, scholarships, and career paths. | Support the platform's goal of career and scholarship guidance, beyond academics. |
| FR-8.2 | 3 | The system shall allow students to book a separate "guidance session" with a mentor focused on major/university/scholarship advice rather than a school subject. | Separate academic tutoring from career guidance so students can choose the right type of support. |
| FR-9.1 | 3 | The system shall provide an admin panel where staff can review and approve mentor verification requests. | Ensure verified mentors are genuine university students, protecting platform trust. |
| FR-9.2 | 3 | The system shall provide an admin panel where staff can view reported users or disputes between students and mentors and take action (warn, suspend, ban). | Give the business a way to handle misuse, complaints, or safety issues. |
| FR-9.3 | 4 | The system shall allow the admin to view basic platform statistics, such as number of users, bookings, and completed sessions. | Help the business track growth and platform health. |

### 2.2 Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-01 | The platform shall support at least 200 active users using the system at the same time without noticeable slowdown. |
| NFR-02 | The platform shall be available 24/7. If this is not possible at first, it shall be available at least from 6:00 a.m. to midnight, every day. |
| NFR-03 | The platform shall be built as a responsive web application (or Progressive Web App) so it works well on both mobile phones and computers. |
| NFR-04 | User data such as passwords and personal information shall be encrypted in storage (passwords shall be hashed, never stored as plain text). |
| NFR-05 | The system shall support both Khmer and English language so it is easy to use for all Cambodian students. |
| NFR-06 | Pages shall load quickly, and users should not experience noticeable lag, especially when searching or browsing mentor profiles. |
| NFR-07 | All payments and commission calculations shall be processed accurately, and any errors shall be logged for review. |
| NFR-08 | The system shall keep a basic activity log (e.g., bookings, cancellations, payments) to help resolve disputes if needed. |
| NFR-09 | The personality questionnaire shall take no more than 3–5 minutes to complete, and shall be skippable at registration and completed later, so it does not block a new user from signing up. |
| NFR-10 | Questionnaire answers and compatibility scores shall be treated as personal data and protected with the same encryption/storage rules as other personal information (see NFR-04). |

---

## 3. Notes for Development

This document is intended to be used as a reference when building the SAHAK application. A few extra points to keep in mind while implementing:

- Start with the Critical (Priority 1) requirements first: registration/login, mentor discovery, mentor listing, and booking. These form the core of the platform.
- Payments (FR-6.x) can start simple — for example, mentors and students agree to pay outside the app at first, with the platform only tracking the commission — and be upgraded to full in-app payment later if budget/time is limited.
- Chat (FR-4.3) and Quick Help (FR-5.x) can be simplified in an early version, for example using a basic message list instead of real-time chat, if development time is limited.
- The personality questionnaire (FR-1.5–FR-1.7) can be implemented as a simple weighted-scoring comparison between two numeric arrays (student preference vector vs. mentor style vector) — no machine learning needed for the first version.
- Keep the design simple and mobile-friendly, since most students will likely use their phone to access the platform.
