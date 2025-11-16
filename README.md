📝 Development Process & Challenges
🚀 Project Initialization

I started the project by running:

npx create-expo-app@latest


After the project was created, I reset the boilerplate setup using:

npx reset-project


This helped me start with a minimal and clean structure. I then installed NativeWind to make styling faster and more intuitive.

🎨 Building the UI

I began by creating the Onboarding Screen. This was the most challenging part visually, especially trying to achieve the right layout and feel. After some trial and error, I managed to get it working smoothly using a linear gradient for the background.

Next, I created the tab group for the Home section and its respective tabs. After that, I built the Home Screen and focused on making the UI reusable and efficient.

🧩 Reusable Components

To avoid repeating UI elements, I built reusable components, including:

A Card component

A Pill component for selecting coffee types

This helped make the codebase cleaner and more maintainable.

🎛️ Styling Improvements

Initially, I relied heavily on inline styles, but as the UI grew more complex, it became harder to manage. I switched to using separate style files for each screen, which improved organization and readability.

⚔️ Challenges Faced

Getting the perfect look for the onboarding screen took a lot of tweaking. Achieving the right gradient effect and layout alignment was tough but rewarding once it finally came together.

Switching from inline styles to dedicated style files required refactoring, but it ultimately improved maintainability.

Structuring the tab navigation and organizing the files in a scalable way took some planning.
