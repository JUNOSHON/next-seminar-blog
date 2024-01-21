'use client';

import {ChangeEvent, FormEvent, useState} from "react";
import Banner, {BannerData} from "@/app/components/Banner";

type Form = {
    from: string;
    subject: string;
    message: string;
};

const SEMI_BOLD = 'font-semibold';

export default function ContactForm() {
    const [form, setForm] = useState<Form>({
        from: '',
        subject: '',
        message: ''
    });

    const [banner, setBanner] = useState<BannerData | null>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        setBanner({message: 'You successfully sent the email.', state: 'success'});
        setTimeout(() => {
            setBanner(null);
        }, 3000)
    }

    return (<section className='w-full max-w-md'>
            {banner && <Banner banner={banner}/>}
            <form onSubmit={onSubmit}
                  className='w-full max-w-md flex flex-col gap-2 my-4 m-4 p-4 bg-slate-700 rounded-xl text-black'>
                <label htmlFor='from' className={SEMI_BOLD}>Your Email</label>
                <input type="email"
                       id="from"
                       name="from"
                       required
                       autoFocus
                       value={form.from}
                       onChange={onChange}/>

                <label htmlFor='subject' className={SEMI_BOLD}>Your Email</label>
                <input type="text"
                       id="subject"
                       name="subject"
                       required
                       value={form.subject}
                       onChange={onChange}/>

                <label htmlFor='message'>Your Email</label>
                <textarea
                    rows={10}
                    id="message"
                    name="message"
                    required
                    value={form.subject}
                    onChange={onChange}
                    className='text-black'/>
                <button className='bg-yellow-300 text-black font-bold hover:bg-yellow-400'>Submit</button>
            </form>
        </section>
    );
}
