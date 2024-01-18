'use client';

import React, {ChangeEvent, FormEvent, useState} from 'react';

type Form = {
    from: string;
    subject: string;
    message: string;
}
export default function ContactForm() {
    const [form, setForm] = useState<Form>({from: '', subject: '', message: ''});
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setForm((prev) => ({...prev,[name]:value}));
    }
    const onSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        console.log(form)
    }
    return (
        <section>
            <form onSubmit={onSubmit}>
                <label htmlFor='from'>Your Email</label>
                <input type="email" id='from' name='from' required autoFocus value={form.from} onChange={onChange}/>

                <label htmlFor='subject'>Subject</label>
                <input type="text" id='subject' name='subject' required  value={form.subject} onChange={onChange}/>

                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message' required  value={form.message} rows={10} onChange={onChange}/>
                <button>Submit</button>
            </form>
        </section>
    )
}
