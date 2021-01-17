import { mailText } from '../index';
import * as assert from 'assert';

describe('Mailtext Testing', () => {
  test('should send SMS', () => {
    mailText({ email: 'psarfoowusu@gmail.com', password: '1qaz@WSX'})
      .send({
        numbers: ['6414513996'],
        sms_id: 'sms90',
        message: 'Hello Testing',
        type: 'bulk',
      }, (res, err) => {
          assert.ok(`cb called`)
      })
  })
})
