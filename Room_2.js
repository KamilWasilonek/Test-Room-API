var crypto = require('crypto');

module.exports = {
  id: crypto.randomBytes(16).toString('hex'),
  kind: 'Event',
  etag: '',
  summary: 'Room 2',
  updated: '2020-03-12T10:53:06.214Z',
  timeZone: '',
  accessRole: '',
  defaultReminders: [],
  nextSyncToken: '',
  items: [
    {
      kind: 'Event',
      etag: '',
      id: '',
      status: '',
      htmlLink: '',
      created: '2019-09-06T09:20:13.000Z',
      updated: '2020-02-12T10:34:19.725Z',
      summary: '',
      description: '',
      location: 'Room 2',
      creator: {
        email: ''
      },
      organizer: {
        email: '',
        displayName: ''
      },
      start: {
        dateTime: '2020-03-16T12:00:00+01:00'
      },
      end: {
        dateTime: '2020-03-16T12:30:00+01:00'
      },
      recurringEventId: '',
      originalStartTime: {
        dateTime: '2020-03-16T12:00:00+01:00'
      },
      iCalUID: '',
      sequence: 1,
      attendees: [
        {
          email: '',
          displayName: 'Room 2',
          self: true,
          resource: true,
          responseStatus: ''
        }
      ],
      attendeesOmitted: true,
      reminders: {
        useDefault: true
      }
    }
  ]
};
