import {defineType, defineField} from 'sanity';

export const avaliacaoClienteType = defineType({
    name: 'avaliacao',
    type: 'document',
    title: 'AvaliacaoCliente',
    fields: [
        defineField({
            name: "PerfilFoto",
            type: 'image',
        }),
        defineField({
            name: "Nome",
            type: 'string',
        }),
        defineField({
            name: "Descricao",
            type: 'text',
        }),
        defineField({
            name: "Avaliacao",
            type: 'number',
            validation: Rule => Rule.required().min(1).max(5)
        }),
    ]
});