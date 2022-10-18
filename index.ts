interface IProduct {
    name: string;
    price: string;
    barCode: string;
    quantity: number;
}
const products = [
    [
        "Garrafa",
        "R$ 12,50",
        "789122312312312",
        9
    ],
    [
        "Xicara",
        "R$ 4,50",
        "7812312312312",
        8
    ],
    [
        "Caixa de som",
        "R$ 9,00",
        "8123123120371232",
        6
    ]
]

function convertArrayToTypedObject(field: Array<any>): IProduct {
    const object = {
        name: "",
        price: "",
        barCode: "",
        quantity: 0
    } as IProduct;

    type ObjectKey = keyof typeof object;

    field.reduce((x,y) => {
        const objectNameX = Object.keys(object)[field.indexOf(x)] as ObjectKey;
        const valueX = field[field.indexOf(x)] as never;
        object[objectNameX] = valueX;
        const objectNameY = Object.keys(object)[field.indexOf(y)] as ObjectKey;
        const valueY = field[field.indexOf(y)] as never;
        object[objectNameY] = valueY;
        x = y
        return x;
    })

    return object;
}

function main(products: Array<Array<any>>): Array<IProduct> {
    const array = [] as Array<IProduct>;
    products.reduce((acc, renderer) => {
        if(products.indexOf(acc) === 0 ) {
            array.push(convertArrayToTypedObject(acc));
        }
        array.push(convertArrayToTypedObject(renderer));
        return renderer;
    });
    return array;
}

const productsConverted = main(products);