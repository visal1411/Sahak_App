# How We Migrated to a Robust Open-Source Schedule

You asked for a real, production-ready scheduling system instead of a "fake HTML grid". To achieve this, we stripped out the manual math and entirely replaced it with **`react-big-calendar`** (an industry standard library used by huge enterprise applications) paired with **`date-fns`** (a lightweight library for safely handling timezones and dates).

Here is an incredibly simple breakdown of how this API architecture works behind the scenes without the junk:

---

### 1. The Real-Time Localizer (`date-fns`)
When users in Cambodia book a mentor in New York, the math for timezones can destroy an app natively. 
Instead of doing manual math, we configure a `dateFnsLocalizer`. This acts as an automated translator. We passed it standard functions from `date-fns` (like `format`, `parse`, and `getDay`). 
- **What it does:** It tells the calendar component *exactly* what day it is, what format to print the hours in, and where to put lines on the grid, based on real, universally accurate timezone data.

### 2. Live Data Events (`new Date()`)
In the fake HTML, we forcefully injected `top: 120px` to draw an event box. That breaks as soon as a mentor changes their timezone.
Now, we use standard Javascript `Date` objects:
```javascript
start: new Date(2023, 10, 16, 10, 0), // Exactly 10:00 AM on October 16th
end: new Date(2023, 10, 16, 12, 0)
```
- **What it does:** The API reads this real timestamp, calculates the math using the localizer, and natively renders the block in the absolute perfect position on the grid.

### 3. The `<Calendar />` Component 
We deleted all the messy mapping arrays (`[8, 9, 10...]`) and replaced the entire right side of the screen with a single, powerful `<Calendar />` tag.
- It automatically handles generating the horizontal lines, time blocks, scrolling, and week vs. month views. 
- The `<` and `>` buttons simply call built-in API functions (`handlePrev` and `handleNext`) which natively shift the entire calendar accurately without us tracking an arbitrary `weekOffset` math variable.

### 4. Customizing the Aesthetic (The Magic)
Normally, open-source APIs look clunky and ugly because you are locked into their default styles. We didn't want to lose the beautiful SAHAK design you provided!
- **CSS Overrides:** We created `calendar-overrides.css` to systematically delete the ugly API default borders, fix the scrollbars, and apply standard soft grays.
- **`components={{ event: CustomEvent }}`:** This is the most powerful part of the API. Rather than using the calendar's basic colored squares for the events, we injected a completely custom React functional component (`CustomEvent`). This means we were able to keep the gorgeous Sky-Blue "Intro to Python" card, complete with the mini-avatar, but run it cleanly on top of the powerful API backend!
