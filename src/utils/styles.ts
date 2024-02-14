export function clsx(...rest: unknown[]) {
    let tmp;
    let str = ''

    for (let i = 0; i < rest.length; i++) {
        tmp = rest[i];
        if (tmp) {
            if (typeof tmp === 'string') {
                str += (str && ' ') + tmp;
            }
        }
    }
    return str;
}