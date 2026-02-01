# Car Detailing - Landing Page

Modern single-page application (SPA) for car detailing services with multi-language support, smooth animations, and responsive design.

## Project Description

Landing page for a car detailing studio with professional design and modern web technologies. The website includes sections: hero screen, about company, services, work gallery, contacts, and footer.

## Key Features

- **Multi-language** - support for 4 languages (EN, RU, UK, DE)
- **Smooth animations** - using AOS (Animate On Scroll) for element animations on scroll
- **Smooth Scroll** - smooth page scrolling with Lenis
- **Responsive design** - correct display on all devices (Bootstrap 5)
- **SPA navigation** - single-page application with Vue Router
- **Telegram notifications** - automatic sending of requests to Telegram bot when filling out the contact form
- **Optimization** - automatic removal of console.log in production build

## Technology Stack

### Frontend Framework
- **Vue 3** (^3.5.17) - progressive JavaScript framework
- **Vue Router** (^4.5.1) - official router for Vue.js
- **Vue I18n** (^9.9.0) - internationalization and localization

### UI Framework & Styling
- **Bootstrap 5** (^5.3.7) - CSS framework for responsive design
- **Bootstrap Icons** (^1.13.1) - icon font

### Animation & UX
- **AOS** (^2.3.4) - Animate On Scroll library for element animations
- **Lenis** (^1.3.15) - library for smooth scrolling

### Build Tools & Development
- **Vite** (^7.0.0) - fast next-generation build tool and dev server
- **@vitejs/plugin-vue** (^6.0.0) - official Vue plugin for Vite
- **vite-plugin-vue-devtools** (^7.7.7) - Vue DevTools integration
- **vite-plugin-remove-console** (^2.2.0) - remove console logs in production

### TypeScript Definitions
- **@types/aos** (^3.0.7)
- **@types/long** (^5.0.0)

## Project Structure

```
car-detailing/
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── global.css          # Global styles
│   ├── components/
│   │   ├── Header.vue              # Site header with navigation
│   │   ├── HeroSection.vue         # Hero section
│   │   ├── AboutSection.vue        # About us section
│   │   ├── ServicesSection.vue     # Services section
│   │   ├── GallerySection.vue      # Work gallery
│   │   ├── ContactSection.vue      # Contact information
│   │   └── Footer.vue              # Site footer
│   ├── composables/
│   │   ├── useImagePath.js         # Composable for working with image paths
│   │   ├── useScrollToSection.js   # Composable for scrolling to sections
│   │   └── useSmoothScroll.js      # Composable for smooth scrolling
│   ├── i18n/
│   │   ├── index.js                # i18n configuration
│   │   └── locales/
│   │       ├── en.js               # English
│   │       ├── ru.js               # Russian
│   │       ├── uk.js               # Ukrainian
│   │       └── de.js               # German
│   ├── pages/
│   │   ├── HomePage.vue            # Home page
│   │   ├── PrivacyPage.vue         # Privacy policy
│   │   └── TermsPage.vue           # Terms of use
│   ├── router/
│   │   └── index.js                # Router configuration
│   ├── App.vue                     # Root component
│   └── main.js                     # Application entry point
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
└── package.json                    # Project dependencies
```

## System Requirements

- **Node.js**: 20.18.2
- **npm**: 10.8.2

## Installation and Launch

### Install dependencies
```bash
npm install
```

### Development mode
```bash
npm run dev
```
Starts dev server at [http://localhost:5173](http://localhost:5173)

### Production build
```bash
npm run build
```
Creates optimized build in `dist/` folder

### Preview production build
```bash
npm run preview
```

## Configuration

### Vite Config
- Path aliases: `@` -> `./src`
- Remove console.log in production (except error and warn)
- Vue DevTools integration in development mode

### AOS settings
```javascript
{
  duration: 800,      // Animation duration
  easing: 'ease-in-out',
  once: true,         // Animate only once
  offset: 100         // Activation offset
}
```

### Lenis settings
```javascript
{
  duration: 1.7,      // Scroll speed
  wheelMultiplier: 1  // Mouse wheel sensitivity
}
```

## Implementation Features

1. **Composables** - reusable logic extracted into separate modules
2. **Component architecture** - modular structure for easy maintenance
3. **Multi-language** - full i18n support with language switching
4. **Image optimization** - dynamic loading through composables
5. **SEO-friendly** - SPA routing support with proper URL handling

## Telegram Bot Integration

The project includes functionality for automatically sending notifications to Telegram when the contact form is submitted.

### sendToTelegram Function

Located in [src/components/ContactSection.vue:167](src/components/ContactSection.vue#L167)

The function sends notifications with request information:
- 👤 Client name
- 📞 Phone
- 🔧 Selected service
- 💬 Message
- 📅 Date and time (timezone: Europe/Berlin)

### Environment Variables Setup

To enable Telegram notifications, create a `.env` file in the project root:

```env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
VITE_GOOGLE_SCRIPT_URL=your_google_script_url_here
```

**Getting bot token:**
1. Open [@BotFather](https://t.me/BotFather) in Telegram
2. Create a new bot with `/newbot` command
3. Copy the received token to `VITE_TELEGRAM_BOT_TOKEN`

**Getting Chat ID:**
1. Add the bot to a group or start a dialog with it
2. Send any message to the bot
3. Go to `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Find `chat.id` in the response and copy to `VITE_TELEGRAM_CHAT_ID`

### Notification Format

Messages are sent in HTML format with emojis for better readability:

```
🚗 New request from D4 Detailing website!

👤 Name: John Doe
📞 Phone: +49 179 5251871
🔧 Service: Ceramic coating
💬 Message: Interested in body protection

📅 Date: 19.12.2025, 15:30:45
```

### Error Handling

- Function doesn't block form submission on Telegram API errors
- Errors are logged to console but not shown to user
- If credentials are not configured, notification is simply skipped

## License

Private project
