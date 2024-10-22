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
        }),
        defineField({
            name: 'cores',
            type: 'array',
            title: 'Cores',
            of: [
                {
                    name: 'cor',
                    type: 'string',
                    title: 'Cor'
                },
            ],
        }),
        defineField({
            name: 'images',
            type: 'array',
            title: 'Images',
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
        }),
        defineField({
            name: 'Quantidade',
            type: 'number',
        }),
    ],
});