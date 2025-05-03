import { Calendar } from "@/components/ui/calendar";

export function WeddingCalendar() {
  return (
    <section>
      <Calendar
        disableNavigation
        selected={new Date(2025, 6, 20)}
        defaultMonth={new Date(2025, 6, 20)}
      />
    </section>
  );
}
