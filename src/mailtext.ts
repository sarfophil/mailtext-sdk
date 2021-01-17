import * as https from 'https';

export interface Credential {
  email: string;
  password: string;
}

export interface Message {
  numbers: string[],
  sms_id: string,
  message: string,
  type: string
}

export class Mailtext {
  private _token: string | undefined;
  private _basePath: string = 'https://partner.mailtext.co'

  constructor() {}

  generateToken(credential: Credential, onComplete?: () => void): void {
    const data = JSON.stringify(credential);
     const option = {
       method: `POST`,
       headers: {
         'Content-Type': 'application/json',
         'Content-Length': Buffer.byteLength(data)
       },
       timeout: 1000
     }
     const request = https.request
     (
       `${this._basePath}/api/v1.0/generate-token`,
       option ,
       (res) => {

       res.setEncoding('utf8');

       if (res.statusCode != 200)
         request.destroy(new Error(`${res.statusMessage}`))

       res.on('data', (chunk) => {
         const body = JSON.parse(chunk);
         this._token = body.token;
       });

       res.on('end', () => {
         if (onComplete) {
           onComplete();
         }
       });
     })

     request.on('error', (e) => {
       throw new Error( `An error occurred while getting token. Visit ${this._basePath} for more details. Error: ${e.message}` );
     });
     request.write(data);
     request.end()
   }


  get token(): string | undefined {
    return this._token;
  }

  send(payload: Message, cb: (resp: any) => void): void {

    const message = JSON.stringify(payload);
    const option = {
      method: `POST`,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(message),
        'Authorization': `Bearer ${this.token}`
      },
      timeout: 1000
    }

    const request = https.request
    (
      `${this._basePath}/api/v1.0/send-multiple-sms`,
      option ,
      (res) => {

        res.setEncoding('utf8');
        if (res.statusCode != 200)
          request.destroy(new Error(`${res.statusMessage}`))

        res.on('end', () => {
          cb('Sms Delivered')
        });
      })

    request.on('error', (e) => {
      throw new Error( `An error occurred while sending SMS. Visit ${this._basePath} for more details. Error message: ${e.message}` );
    });
    request.write(message);
    request.end()
  }
}
