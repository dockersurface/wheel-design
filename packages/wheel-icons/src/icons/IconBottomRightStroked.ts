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
                d: 'M22 3C22 2.44772 21.5523 2 21 2C20.4477 2 20 2.44772 20 3V20H3C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3ZM3 2C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3ZM4 12V4H12V12H4Z',
                fill: 'currentColor',
            },
            children: [],
        },
    ],
};
