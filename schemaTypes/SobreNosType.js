import {defineType, defineField} from 'sanity';

export const sobreNosType = defineType({
    name: 'sobrenos',
    type: 'document',
    title: 'SobreNos',
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
