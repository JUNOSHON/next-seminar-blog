'use client';

import {ChangeEvent, FormEvent, useState} from "react";
import Banner, {BannerData} from "@/app/components/Banner";
import {sendContactEmail} from "@/app/service/contact";

type Form = {
    from: string;
    subject: string;
    message: string;
};

const SEMI_BOLD = 'font-semibold';

const DEFAULT_DATA = {
    from: '',
    subject: '',
    message: '',
}

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
        sendContactEmail(form)
            .then(() => {
                setBanner({message: '메일을 성공적으로 보냈습니다.', state: 'success'});
                setForm(DEFAULT_DATA);
            })
            .catch(() => {
                setBanner({message: '메일 전송이 실패했습니다. 다시 시도해 주세요', state: 'error'});
            })
            .finally(() => {
                setTimeout(() => {
                    setBanner(null);
                }, 3000)
            })
    };

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
