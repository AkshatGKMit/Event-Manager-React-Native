export const formattedDateForInput = (dateTime: Date) => {
  const incomingDate = new Date(dateTime);
  const year = incomingDate.getFullYear().toString();
  const month = (incomingDate.getMonth() + 1).toString().padStart(2, "0");
  const date = incomingDate.getDate().toString().padStart(2, "0");
  const hours = incomingDate.getHours().toString().padStart(2, "0");
  const minutes = incomingDate.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${date}T${hours}:${minutes}`;
};

export const minStartDate = () => {
  const currentDate = new Date();
  const minDate = currentDate.setMinutes(currentDate.getMinutes() + 30);
  return new Date(minDate);
};

export const minEndDate = () => {
  const currentDate = new Date();
  const minDate = currentDate.setMinutes(currentDate.getMinutes() + 40);
  return new Date(minDate);
};

export const getMonthString = (monthNumber: number): string => {
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthsOfYear[monthNumber];
};

export const getDayString = (dayNumber: number): string => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[dayNumber];
};

export const applyFilter = (eventsList: MainEvent[], filterOption: Filter): MainEvent[] => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const startOfDay = now;
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);

  let filteredEvents = eventsList;

  switch (filterOption) {
    case "Upcoming":
      filteredEvents = filteredEvents.filter(({ startDateTime }) => new Date(startDateTime) > now);
      break;
    case "This Week":
      const endOfWeek = new Date(now);
      endOfWeek.setDate(now.getDate() + 7);
      filteredEvents = filteredEvents.filter(({ startDateTime }) => new Date(startDateTime) <= endOfWeek);
      break;
    case "This Month":
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      filteredEvents = filteredEvents.filter(({ startDateTime }) => new Date(startDateTime) <= endOfMonth);
      break;
    case "Next Month":
      const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const endOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 2, 0);
      filteredEvents = filteredEvents.filter(
        ({ startDateTime }) => new Date(startDateTime) >= startOfNextMonth && new Date(startDateTime) <= endOfNextMonth,
      );
      break;
    case "Outdated":
      filteredEvents = filteredEvents.filter(({ startDateTime }) => new Date(startDateTime) < now);
      break;
    case "Today":
      filteredEvents = filteredEvents.filter(({ startDateTime }) => {
        const eventDate = new Date(startDateTime);
        return eventDate >= startOfDay && eventDate <= endOfDay;
      });
      break;
    case "All":
    default:
      break;
  }

  return filteredEvents;
};
