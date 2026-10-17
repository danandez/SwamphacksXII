import type { CampusEvent } from "../types";

interface EventPopupProps {
  event: CampusEvent;
}

export default function EventPopup({ event }: EventPopupProps) {
  return (
    <div className="event-popup">
      <h3>{event.title}</h3>
      <div className="meta">{event.time}</div>
      <div className="meta">{event.description}</div>
      <div className={`meta ${event.food ? "food" : ""}`}>{event.food ? "Food provided" : "No food"}</div>
      <div className="tags">
        {event.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </div>
  );
}
