import type { CampusEvent } from "./types";

const events: CampusEvent[] = [
  { id: 1, title: "Gator Hackers Meetup", lat: 29.6436, lng: -82.3549, time: "Oct 17, 2026 · 6:00 PM", description: "Weekly programming club meetup. Bring your laptop.", tags: ["programming", "educational"], food: true },
  { id: 2, title: "Morning Run Club", lat: 29.6480, lng: -82.3436, time: "Oct 18, 2026 · 7:00 AM", description: "3-mile run around campus. All paces welcome.", tags: ["sports", "run club"], food: false },
  { id: 3, title: "AI Study Group", lat: 29.6410, lng: -82.3480, time: "Oct 19, 2026 · 4:00 PM", description: "Discuss recent ML papers. Snacks provided.", tags: ["programming", "educational", "ai"], food: true },
  { id: 4, title: "UF Soccer Pick-up", lat: 29.6395, lng: -82.3600, time: "Oct 20, 2026 · 5:30 PM", description: "Pick-up soccer at the rec fields.", tags: ["sports"], food: false },
];

export default events;
