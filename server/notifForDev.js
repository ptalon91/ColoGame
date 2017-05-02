if (Notif.find().count() === 0) {
  Notif.insert({
    name: "notification",
    descr: "Les notifications s'affichent ici",
    pending: false,
    createdAt: new Date(),
  });
  Notif.insert({
    name: 'notification',
    descr:"Les notifications s'affichent ici",
    pending: false,
    createdAt: new Date(),
  });
}