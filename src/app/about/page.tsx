import Hero from "@/app/components/Hero";
import {Metadata} from 'next';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';

export const metadata: Metadata = {
    title: 'About Wisoft',
    description: 'Introduce Wisoft',
}

export default function page() {
    return (<>
        <Hero/>
        <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
            <h2 className={TITLE_CLASS}> Who Am I ?</h2>
            <p> We are WiSoft <br/>
                Software research for next-generation wireless communication systems.
            </p>
            <h2 className={TITLE_CLASS}> Research field </h2>
            <p> Data Architecture <br/>
                Software Architecture <br/>
                Wireless Communication
            </p>
        </section>
    </>);
}
