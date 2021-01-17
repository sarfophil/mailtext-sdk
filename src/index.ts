import { Credential, Mailtext, Message } from './mailtext';

export function mailText(login: Credential) {
  const mailTextInstance = new Mailtext();
  return {
    send: (message: Message, cb: (res: any) => void) => {
      mailTextInstance.generateToken(login, () => {
        mailTextInstance.send(message, cb);
      })
    }
  }
}
