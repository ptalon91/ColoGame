if (Notif.find().count() === 0) {
  Notif.insert({
    name: "Les notifications s'affichent ici",
    descr: 'notification',
    pending: false,
    createdAt: new Date(),
  });
}