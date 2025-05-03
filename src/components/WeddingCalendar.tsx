import { Calendar } from "@/components/ui/calendar";

export function WeddingCalendar() {
  return (
    <section className="p-2">
      <Calendar
        disableNavigation
        selected={new Date(2025, 6, 20)}
        defaultMonth={new Date(2025, 6, 20)}
      />
    </section>
  );
}
