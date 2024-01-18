import {AiFillFolder, AiFillGithub, AiFillInstagram} from "react-icons/ai";
import ContactForm from "@/app/components/ContactForm";

const LINKS = [
  {icon: <AiFillGithub />, url:'https://github.com/JUNOSHON'},
  {icon: <AiFillInstagram />, url:'https://www.instagram.com/'},
  {icon: <AiFillFolder />, url:''},
]
export default function page() {
  return <section className='flex flex-col items-center'>
    <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
    <p>sanoldfox@naver.com</p>
    <ul className='flex gap-4 my-2'>
      {LINKS.map((link,index) => <a key={index} href={link.url} target='_blank' rel='noreferrer' className='text-5xl hover:text-yellow-400'>{link.icon}</a>)}
    </ul>
    <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
    <ContactForm />
  </section>;
}
