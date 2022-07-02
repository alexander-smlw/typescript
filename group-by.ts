// Необходимо написать функцию группировки, которая принимает массив объектов
// и его ключ, производит группировку по указанному ключу и возращает
// сгруппированный объект.
// Пример:
// ``` js
// [
// 	{ group: 1, name: 'a' },
// 	{ group: 1, name: 'b' },
// 	{ group: 2, name: 'c' },
// ];
// ```

// При группироке по 'group' ---->

// ``` js
// {
// 	'1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
// 	'2': [ { group: 2, name: 'c' } ]
// }
// ```

interface Data {
	group: number,
	name: string
}

interface IGrouped<T> {
    [key: string]:T[]
}

type key = string | number | symbol

function groupBy<T extends Record<key, any>>(list: T[], key: keyof T): IGrouped<T> {
    return list.reduce<IGrouped<T>>((map: IGrouped<T>, item) => {
        const itemKey = item[key]

        let currentEl = map[itemKey]

        if(Array.isArray(currentEl)) {
            currentEl.push(item)
        } else {
            currentEl = [item]
        }

        map[itemKey] = currentEl

        return map
    }, {})
}

const list = [
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
]

console.log(groupBy<Data>(list, 'group'))