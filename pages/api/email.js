// import { SMTPClient } from 'emailjs';

export default function handler(req, res) {

  // //******************** */
  // const info=req.body.info;

  // //******************** */
  // const client=new SMTPClient({
  //   user:info.email,
  //   password:'red12345',
  //   host:'smtp.gmail.com',
  //   ssl:true
  // })


  // //******************** */
  // try{

  //   client.send({
  //     text:`N : ${info.name} , tel : ${info.phone} , M : ${info.message}`,
  //     from:info.email,
  //     to:'marellarahhal@gmail.com',
  //     subject:info.subject
  //   });

  // }
  // catch(e){

  //   res.status(400).json({ message:"Error" })
  //   return;

  // }

  // //********************* */

  res.status(200).json({ message:'Send Mail' })

}
