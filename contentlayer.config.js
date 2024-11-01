import { defineDocumentType, makeSource } from "contentlayer2/source-files";

const computedFields = {
    url: {
        type: 'string',
        resolve: (post) => `/posts/${post._raw.flattenedPath}`
    }
}

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: '**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        date: { type: 'date', required: true }
    },
    computedFields
}));

export default makeSource({ contentDirPath: './lib/posts', documentTypes: [Post] });