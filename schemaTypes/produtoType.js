import {defineType, defineField} from 'sanity';

export const produtoType = defineType({
    name: 'produto',
    type: 'document',
    title: 'Produto',
    fields: [
        defineField({
            name: 'Nome',
            type: 'string',
        }),
        defineField({
            name: 'Descricao',
            type: 'text',
        }),
        defineField({
            name: 'Preco',
            type: 'number',
            options: {
                decimalScale: 2,
                fixedDecimalScale: true,
                allowNegative: false
            },
            validation: Rule => Rule.required().min(0.01)
        }),
        defineField({
            name: 'Cores',
            type: 'array',
            of: [
                {
                    name: 'cor',
                    type: 'string',
                    title: 'Cor'
                },
            ],
        }),
        defineField({
            name: 'Images',
            type: 'array',
            of: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'Image'
                },
            ],
        }),
        defineField({
            name: 'Avaliacao',
            type: 'number',
            validation: Rule => Rule.required().min(1).max(5)
        }),
        defineField({
            name: 'Quantidade',
            type: 'number',
            validation: Rule => Rule.required().min(0)
        }),
    ],
});