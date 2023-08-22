import Document from '@tiptap/extension-document'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import Typography from '@tiptap/extension-typography'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export function Editor() {
    const editor = useEditor({
        extensions: [
            Document.extend({
                // configura para que sempre seja obrigatorio sempore o primeiro elemento ser um head e
                // depois qualquer elemento quantas vezes quiser
                content: 'heading block*',
            }),
            StarterKit.configure({
                document: false,
            }),
            Highlight,
            Typography,
            Placeholder.configure({
                placeholder: 'Untitled',
                emptyEditorClass:
                    'before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:point-events-none',
            }),
        ],
        content:
            '<h1>Back-end</h1><p>Esse é um documento que explica sobre o backend</p>',
        autofocus: 'end',
        editorProps: {
            attributes: {
                class: 'focus:outline-none prose prose-invert prose-headings:mt-0',
            },
        },
    })

    return <EditorContent className="w-[65ch]" editor={editor} />
}
