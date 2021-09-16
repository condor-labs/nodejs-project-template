const sinon = require('sinon');
const myRepository = require('../src/repository/myRepository');
const service = require('../src/service/myService');

const USER_LIST = [
  {
    user: [{ id: '1', name: 'Sebastián Restrepo Moreno' }],
  },
];

const EMPTY_USER_LIST = [];

describe('findAllUsers should', () => {
  afterEach(() => {
    myRepository.findAll.restore();
  });

  it('get a list of the users', async () => {
    const findAllMock = sinon.stub(myRepository, 'findAll').resolves(USER_LIST);

    const users = await service.myService();

    expect(users).not.toBeNull();
    expect(users).not.toBeUndefined();
    expect(users.length).toBe(1);

    expect(users[0].id).toBe(USER_LIST[0].id);

    expect(findAllMock.calledOnce).toBe(true);
  });

  it('return a empty list', async () => {
    sinon.stub(myRepository, 'findAll').resolves(EMPTY_USER_LIST);

    const users = await service.myService();

    expect(users).not.toBeNull();
    expect(users).not.toBeUndefined();
    expect(users.length).toBe(0);
  });
});
