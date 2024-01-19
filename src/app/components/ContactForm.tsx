'use client';

import React, {ChangeEvent, FormEvent, useState} from 'react';
import Banner, {BannerData} from "@/app/components/Banner";
import {sendContactEmail} from "@/app/service/contact";

type Form = {
    from: string;
    subject: string;
    message: string;
}

const DEFAULT_DATA = {from: '', subject: '', message: ''}
export default function ContactForm() {
    const [form, setForm] = useState<Form>(DEFAULT_DATA);

    const [banner, setBanner] = useState<BannerData | null>(null)
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setForm((prev) => ({...prev, [name]: value}));
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendContactEmail(form)
            .then(() => {
                setBanner({message: '메일 전송 성공', state: "success"});
                setForm(DEFAULT_DATA)
            })
            .catch(() => {
                setBanner({
                    message: '메일 전송 실패', state: 'error',
                })
            })
            .finally(() => {
                setTimeout(() => {
                    setBanner(null);
                }, 3000);
            })



    }
    return (
        <section className='w-full max-w-md'>
            {banner && <Banner banner={banner}/>}
            <form onSubmit={onSubmit}
                  className={'w-full my-4 max-w-md flex flex-col gap-2 m-4 p-4 bg-slate-700 rounded-xl text-white '}>
                <label htmlFor='from' className='font-semibold '>Your Email</label>
                <input className='text-black' type="email" id='from' name='from' required autoFocus value={form.from} onChange={onChange}/>

                <label htmlFor='subject' className='font-semibold'>Subject</label>
                <input className='font-semibold text-black' type="text" id='subject' name='subject' required value={form.subject}
                       onChange={onChange}/>

                <label className='font-semibold' htmlFor='message'>Message</label>
                <textarea className='text-black' id='mes sage' name='message' required value={form.message} rows={10}
                          onChange={onChange}/>
                <button className='bg-yellow-300 text-black font-bold hover:bg-yellow-400'>Submit</button>
            </form>
        </section>
    )
}
