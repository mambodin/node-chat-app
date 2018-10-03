const expect = require('expect');
const {Users} = require('./users.js');

describe('Users' , () => {
  var users;
  beforeEach(() =>{
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
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id:'123',
      name: 'Malik',
      room: 'Malik room'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node', () => {
    var userList = users.getUserList('Node');

    expect(userList).toEqual(['Mike','Mike3']);
  });

  it('should return names for react', () => {
    var userList = users.getUserList('React');

    expect(userList).toEqual(['Mike2']);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length). toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '5';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length). toBe(3);
  });

  it('should not find user', () => {
    var userId = '5';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should find a user', () => {
    var user = users.getUser('1');

    expect(user.id).toBe('1');
  });

});
