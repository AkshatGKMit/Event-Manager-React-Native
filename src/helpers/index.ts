import { venues } from "@constants/constants";

export const getAvailableAttendeesForAddAttendee = (allAttendees: Users, currentAttendees: Users) => {
  const currentAttendeeNames = new Set(currentAttendees.map(attendee => attendee.name));
  return allAttendees.filter(attendee => !currentAttendeeNames.has(attendee.name));
};

export const venueDropdownItems: DropdownItems = venues.map((str: string) => ({ label: str, value: str, id: str }));
