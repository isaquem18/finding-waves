import supertest from 'supertest';
import app from '../../src/index';

describe('Beach before fuctional tests', () => {
  it('should return a forecast with just few times', async () => {
    const { body, status } = await supertest(app).get('/forecast');

    expect(status).toBe(200);
  });
});
