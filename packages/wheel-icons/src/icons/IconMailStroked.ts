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
                d: 'M3 4C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4H3ZM3 7.23353V18H21V7.23353L12.5855 13.3107C12.236 13.5631 11.764 13.5631 11.4145 13.3107L3 7.23353ZM19.292 6H4.70797L12 11.2665L19.292 6Z',
                fill: 'currentColor',
            },
            children: [],
        },
    ],
};
