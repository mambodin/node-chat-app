class Users {
  constructor () {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    var user = this.getUser(id);

    if(user){
      this.users = this.users.filter((user) => user.id !== id)
    }
      return user;
  }
  
  getUser(id){
    return this.users.filter((user) => user.id === id)[0];

  }
  getUserList(room){
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

users = new Users();
users.users = [{
  id: '1',
  name: 'Mike',
  room: 'Node'
}, {
  id: '2',
  name: 'Mike2',
  room: 'React'
}, {
  id: '3',
  name: 'Mike3',
  room: 'Node'
}];

console.log(users.getUser('1'));

module.exports = {Users};
