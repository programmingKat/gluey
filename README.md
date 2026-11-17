# Gluey

A child-friendly food and mood tracker for kids with Type 1 Diabetes.

> **Work in progress.** Gluey is my demo day capstone for the Resilient Coders Engineering Fellowship (Demo Day: December 10, 2026). Features are being added weekly, so some of what's described below is planned and not built yet. See [Project Status](#project-status).

---

## Goal

Gluey helps children with Type 1 Diabetes (grades K-4) log their meals and moods and build healthy glucose-monitoring habits. Most diabetes tools are built for adults and caregivers. Gluey turns that same health data into something fun, visual, and child-friendly, so kids get some agency back over their own care.

The name is a mix of **glucose** and **Bluey**.

### Who it's for

| Persona | What they need from Gluey |
| --- | --- |
| **Child** | A fun, simple way to log meals and how they feel, ideally by snapping a photo of their food |
| **Parent** | One account that manages their child profiles and shows meal, mood, and blood sugar history |
| **Physician** | A clear view of a patient's logged history to support care conversations |

### Core features

- **Create**
  - Parent account, plus child profiles with height, weight, and age
  - Meal logs (bolus)
  - Mood logs
  - Blood sugar readings (when a CGM is connected)
- **Read**
  - Any logged entry
  - Graphs of past entries: meals and moods over time
- **Update**
  - Edit a meal or mood log
- **Delete**
  - Remove an incorrect meal or mood log
- **Authentication**
  - Local email/password sign up and log in with Passport

---

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose, sessions stored with connect-mongo
- **Auth:** Passport (local strategy), bcrypt password hashing
- **Views:** EJS templates
- **File uploads:** Multer and Cloudinary
- **Architecture:** MVC (models, views, controllers, routes)

The project started from my earlier app, [Binary Upload Boom](https://github.com/programmingKat), which already had auth and an MVC structure. It shares that foundation, but its features are different.

---

## How to Use

### Run it locally

**Prerequisites:** Node.js, npm, a MongoDB connection string (e.g., MongoDB Atlas), and a Cloudinary account.

1. Clone the repo

   ```bash
   git clone https://github.com/programmingKat/gluey.git
   cd gluey
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file inside the `config` folder (`config/.env`) with:

   ```
   PORT=2121
   DB_STRING=<your MongoDB connection string>
   CLOUD_NAME=<your Cloudinary cloud name>
   API_KEY=<your Cloudinary API key>
   API_SECRET=<your Cloudinary API secret>
   ```

4. Start the server

   ```bash
   npm start
   ```

5. Open `http://localhost:2121` (or whichever port you set) in your browser.

### Using the app

1. **Sign up** as a parent.
2. **Register a child** profile with their name, birth date, height, and weight.
3. **Log meals and moods** from the child view. *(In progress)*
4. **Review history** on the graphs page. *(Planned)*

---

## Project Status

| Area | Status |
| --- | --- |
| Sign up / log in (Passport) | Done |
| Parent and child data models | Done |
| Register child profile | Done |
| Manual meal log | In progress |
| Manual mood log | In progress |
| Edit / delete logs | Planned |
| Photo-based meal logging (computer vision) | Planned |
| Graphs of past meals and moods | Planned |
| Kid-friendly, gamified UI | Planned |



---



### Capturing food photos

Kids will take photos straight from their computer or device camera using the browser's [Media Capture and Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos).

### Turning a photo into nutrition info

I'm still choosing between these approaches:

| Approach | Options | Notes |
| --- | --- | --- |
| **Multimodal LLM** | [OpenRouter](https://openrouter.ai/) (free image models, Claude, ChatGPT, etc.) | One call identifies the food and estimates nutrition |
| **One API** | NutriVision, Suggestic | Suggestic's free tier is sandbox only |
| **Two APIs: vision + database** | Google Cloud Vision AI or CalCam to identify the food, then [Spoonacular](https://spoonacular.com/food-api) for nutrition data | More control, more moving parts |
| **No AI: barcode scan** | [Open Food Facts](https://world.openfoodfacts.org/data) | Free and reliable for packaged foods, but doesn't cover home-cooked meals |

---

## Future Improvements

- Photo-based meal logging with automatic carb and calorie estimates
- CGM integration to pull blood sugar readings automatically
- Gamification: rewards, streaks, and a Gluey mascot that reacts to logging
- Separate dashboards for parents and physicians
- Barcode scanning as a fallback for packaged foods
- Mobile-first layout for kids on tablets


## License

MIT
