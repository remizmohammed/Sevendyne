import schema from '../models';
import register from './auth/register';
import test from './test';

export default app => {
 app.post('/api/register', register)
 app.get('/api/test', test)
}
