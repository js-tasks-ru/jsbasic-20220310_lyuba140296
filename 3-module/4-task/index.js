function showSalary(users, age) {
  const filterUsers = users.filter(user => user.age <= age);
  const mappedUsers = filterUsers.map(user => `${user.name}, ${user.balance}`);
  const result = mappedUsers.join('\n');
  return result;
}
