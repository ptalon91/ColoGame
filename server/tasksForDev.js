// These tasks are created in the tasks database when the server launches, if the database is empty(after a meteor reset for example).
// Useful for app development.
if (Tasks.find().count() === 0) {
  Tasks.insert({
    coloc: 'global',
    author: 'admin',
    name: 'passer la panosse',
    descr: 'passé la panosse', 
    points: 1200, 
    service: true, 
    pending: false,
    createdAt: new Date(),
    checked: false
  });

  Tasks.insert({
    author: 'admin',
    coloc: 'global',
    name: 'payer une bière',
    descr: 'payé une bière', 
    points: 300, 
    service: false, 
    pending: false,
    createdAt: new Date(),
    checked: false
  });

  Tasks.insert({
    author: 'admin',
    coloc: 'global',
    name: 'faire la vaisselle',
    descr: 'fait la vaiselle', 
    points: 1000, 
    service: true, 
    pending: false,
    createdAt: new Date(),
    checked: false
  });
}