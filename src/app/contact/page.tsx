import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import ContactForm from "@/app/components/ContactForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact Wisoft',
    description: 'Contact to Wisoft'
}

const LINKS = [
    {icon: <AiFillGithub/>, url: ''},
    {icon: <AiFillLinkedin/>, url: ''},
    {icon: <AiFillYoutube/>, url: ''}
]

export default function page() {
    return <section className='flex flex-col items-center'>
        <h2 className='text-3xl font-bold my-2'>Contact Wisoft</h2>
        <p>Wisoft.io</p>
        <ul className='flex gap-4 my-2'>
            {LINKS.map((link, index) =>
                <a key={index}
                   href={link.url}
                   target='_blank'
                   rel='noreferrer'
                   className='text-5xl hover:text-yellow-400'>
                    {link.icon}
                </a>)}
        </ul>
        <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
        <ContactForm/>
    </section>;
}
