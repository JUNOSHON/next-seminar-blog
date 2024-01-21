'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import Image from 'next/image';
import {materialDark} from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function MarkdownViewer({content}: { content: string }) {
    return (
        <ReactMarkdown
            className='prose max-w-none'
            remarkPlugins={[remarkGfm]}
            components={{
                code(props) {
                    const {ref, children, className, node, ...rest} = props
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                        <SyntaxHighlighter
                            {...rest}
                            PreTag="div"
                            language={match[1]}
                            style={materialDark}
                        >{String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code {...rest} className={className}>
                            {children}
                        </code>
                    );
                },
                img: (image) => (
                    <Image
                        className='w-full max-h-60 object-cover'
                        src={image.src || ''}
                        alt={image.alt || ''}
                        width={500}
                        height={350}
                    />
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
