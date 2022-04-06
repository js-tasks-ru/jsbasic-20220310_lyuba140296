function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  const users = friends.map( friend => `<li> ${friend.firstName} ${friend.lastName} </li>`);
  const result = users.join('\n');
  ul.innerHTML = result;
  return ul;
}
