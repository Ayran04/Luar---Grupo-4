import {defineType, defineField} from 'sanity';

export const oQueFazemosType = defineType({
    name: 'oquefazemos',
    type: 'document',
    title: 'OQueFazemos',
    fields: [
        defineField({
            name: 'Titulo',
            type: 'string',
        }),
        defineField({
            name: 'Descricao',
            type: 'text',
        })
    ]
});