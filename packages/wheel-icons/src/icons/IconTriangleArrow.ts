export default {
    name: 'svg',
    type: 'element',
    value: '',
    attributes: { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    children: [
        {
            name: 'g',
            type: 'element',
            value: '',
            attributes: { 'clip-path': 'url(#clip0)' },
            children: [
                {
                    name: 'path',
                    type: 'element',
                    value: '',
                    attributes: {
                        d: 'M24 9L24 10C20 10 18.5 11 16.5 13C14.5 15 14 16 12 16C10 16 9.5 15 7.5 13C5.5 11 4 10 -4.37115e-08 10L0 9L24 9Z',
                        fill: 'currentColor',
                    },
                    children: [],
                },
            ],
        },
        {
            name: 'defs',
            type: 'element',
            value: '',
            attributes: {},
            children: [
                {
                    name: 'clipPath',
                    type: 'element',
                    value: '',
                    attributes: { id: 'clip0' },
                    children: [
                        {
                            name: 'rect',
                            type: 'element',
                            value: '',
                            attributes: {
                                width: '24',
                                height: '24',
                                fill: 'currentColor',
                                transform: 'translate(24) rotate(90)',
                            },
                            children: [],
                        },
                    ],
                },
            ],
        },
    ],
};
