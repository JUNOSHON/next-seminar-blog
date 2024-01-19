import * as yup from 'yup'
import {sendEmail} from "@/app/service/email";


const bodySchema = yup.object().shape({
    from: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required()
})

export async function POST(req: Request) {
    const body = await req.json();

    if (!bodySchema.isValidSync(body)) {
        return new Response(JSON.stringify({message:'메일 전송 실패'},),{status:500})
    }
    const {from, subject, message} = body;
    //노드메일러로 메일 보내기

    return sendEmail(body)
        .then(() => new Response(JSON.stringify({message: "메일 전송 성공"}), {status: 200}))
        .catch((error) => {
            console.error(error);
            return new Response(JSON.stringify({message:'메일 전송 실패'},),{status:500});
        })
}
