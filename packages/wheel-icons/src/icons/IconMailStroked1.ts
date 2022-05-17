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
                d: 'M21 8.0412L13.3183 12.405C12.6314 12.7706 11.7962 12.7706 11.1093 12.405L3 7.79829L3 18H21V8.0412ZM4.29229 6L12.2138 10.5L20.1353 6H4.29229ZM1 6C1 4.89543 1.89543 4 3 4H21C22.1046 4 23 4.89543 23 6V6.90481L23.0001 6.90499L23 6.90505V18C23 19.1046 22.1046 20 21 20H3C1.89543 20 1 19.1046 1 18V6Z',
                fill: 'currentColor',
            },
            children: [],
        },
    ],
};
