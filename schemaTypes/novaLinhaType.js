import { defineType, defineField } from 'sanity';

export const novaLinhaType = defineType({
    name: 'novalinha',
    type: 'document',
    title: 'NovaLinha',
    fields: [
        defineField({
            name: "ProdutoNovaLinha",
            type: "reference",
            to: [{ type: "produto" }],
        }),
        defineField({
            name: 'Mensagem',
            type: 'text',
        }),
    ],
});