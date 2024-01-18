import Hero from "@/app/components/Hero";

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2'

export default function page() {
  return <div>

    <Hero />
    <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
      <h2 className={TITLE_CLASS}>Who Am I?</h2>
      <p>웹/앱 프론트엔드 개발자 <br/>
        UI/UX Engineer
      </p>
      <h2 className={TITLE_CLASS}>Career</h2>
      <p>Wisoft<br/>
        Depromeet <br/>
        LikeLion</p>

      <h2 className={TITLE_CLASS}>Skills</h2>
      <p>Next,TypeScript, figma <br/>
      Git,Github <br/>
      VSC Web storm</p>

    </section>
  </div>;
}
