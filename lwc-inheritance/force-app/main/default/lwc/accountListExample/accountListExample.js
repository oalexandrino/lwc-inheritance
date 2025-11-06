import LightningBase from 'c/lightningBase';

const COLUMNS = [
    { label: 'Account name', fieldName: 'name', type: 'text' },
    { label: 'Industry', fieldName: 'industry', type: 'text' },
    { label: 'Revenue', fieldName: 'revenue', type: 'currency' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    {
        type: 'action',
        typeAttributes: {
            rowActions: [
                { label: 'Show details', name: 'view_details' }
            ]
        }
    }
];

const SAMPLE_DATA = [
    {
        id: '1',
        name: 'Acme Corporation',
        industry: 'Tecnologia',
        revenue: 5000000,
        phone: '(11) 98765-4321'
    },
    {
        id: '2',
        name: 'Global Industries',
        industry: 'Manufatura',
        revenue: 12000000,
        phone: '(21) 99876-5432'
    },
    {
        id: '3',
        name: 'Tech Solutions',
        industry: 'Tecnologia',
        revenue: 8500000,
        phone: '(11) 91234-5678'
    },
    {
        id: '4',
        name: 'Green Energy Co',
        industry: 'Energia',
        revenue: 15000000,
        phone: '(85) 98765-1234'
    },
    {
        id: '5',
        name: 'Financial Services Ltd',
        industry: 'Serviços Financeiros',
        revenue: 25000000,
        phone: '(11) 93456-7890'
    }
];

export default class AccountListExample extends LightningBase {
    columns = COLUMNS;
    data = SAMPLE_DATA;

    async handleRowAction(event) {
        const row = event.detail.row;

        const modalTitle = 'Account Details';
        const modalMessage = `You selected : ${row.name}\nIndustry: ${row.industry}\nReceita: ${this.formatCurrency(row.revenue)}\nPhone: ${row.phone}`;
        const buttonLabel = 'I got it!';

        const result = await this.openModal(modalTitle, modalMessage, buttonLabel);
        console.log('Modal result:', result);
    }

    formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }
}
