export default {
    name: 'svg',
    type: 'element',
    value: '',
    attributes: { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    children: [
        {
            name: 'path',
            type: 'element',
            value: '',
            attributes: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M2 2H6V6H2V2ZM10 6H6V10H2V14H6V18H2V22H6V18H10V22H14V18H18V22H22V18H18V14H22V10H18V6H22V2H18V6H14V2H10V6ZM10 10V6H14V10H10ZM10 14H6V10H10V14ZM14 14V18H10V14H14ZM14 14V10H18V14H14Z',
                fill: 'currentColor',
            },
            children: [],
        },
    ],
};
