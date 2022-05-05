import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../MailAdapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f8bc4a5d39039b",
    pass: "c3e838e52f1b6c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Itamar Junior <itamazor@gmail.com>',
    subject,
    html: body,
  })
  }
}
