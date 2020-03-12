var crypto = require('crypto');

module.exports = {
  id: crypto.randomBytes(16).toString('hex'),
  kind: 'Event',
  etag: '',
  summary: 'Room 1',
  updated: '2020-03-12T10:53:06.214Z',
  timeZone: '',
  accessRole: '',
  defaultReminders: [],
  nextSyncToken: '',
  items: [
    {
      kind: 'Event',
      id: crypto.randomBytes(16).toString('hex'),
      status: '',
      htmlLink: '',
      created: '2018-11-15T08:37:33.000Z',
      updated: '2018-11-15T08:41:56.964Z',
      summary: '',
      location: 'Room 1',
      creator: {
        email: ''
      },
      organizer: {
        email: ''
      },
      start: {
        dateTime: '2020-03-02T11:00:00+03:00'
      },
      end: {
        dateTime: '2020-03-02T23:30:00+03:00'
      },
      recurringEventId: '',
      originalStartTime: {
        dateTime: '2020-03-02T11:00:00+03:00'
      },
      iCalUID: '',
      sequence: 1,
      attendees: [
        {
          email: '',
          displayName: 'Room 1',
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
