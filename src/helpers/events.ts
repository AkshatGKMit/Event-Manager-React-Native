export const filterAvailableVenues = (
  allEvents: MainEvents,
  selectedStartTime: Date,
  selectedEndTime: Date,
  allVenues: Venues,
): DropdownItems => {
  const conflictingEvents = allEvents.filter(
    event =>
      new Date(event.startDateTime) < new Date(selectedEndTime) && new Date(event.endDateTime) > new Date(selectedStartTime),
  );

  const bookedVenues = new Set(conflictingEvents.map(event => event.venue));

  const availableVenues = allVenues.filter(venue => !bookedVenues.has(venue));
  return availableVenues.map((venue: string) => ({ label: venue, value: venue, id: venue }));
};

export const filterAvailableAttendees = (
  allEvents: MainEvents,
  selectedStartTime: Date,
  selectedEndTime: Date,
  allAttendees: Attendees,
): Attendees => {
  const conflictingEvents = allEvents.filter(
    event => event.startDateTime < selectedEndTime && event.endDateTime > selectedStartTime,
  );

  const bookedAttendeesSet = new Set<string>(
    conflictingEvents.flatMap(event =>
      event.attendeeIds
        .map(attendeeId => {
          const attendee = allAttendees.find(({ id }) => id === attendeeId);
          return attendee ? attendee.email : null;
        })
        .filter(email => email !== null),
    ),
  );

  const availableAttendees = allAttendees.filter(attendee => !bookedAttendeesSet.has(attendee.email));

  return availableAttendees;
};
