export class Utils {
    public static keysToCamel(o: any) {
        if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
            const n = {};
            Object.keys(o).forEach((k) => {
                n[this.toCamel(k)] = this.keysToCamel(o[k]);
            });
            return n;
        } else if (Array.isArray(o)) {
            return o.map((i) => {
                return this.keysToCamel(i);
            });
        }
        return o;
    }

    private static toCamel(s: string) {
        return s.replace(/([-_][a-z])/gi, ($1) => {
            return $1.toUpperCase().replace('-', '').replace('_', '');
        });
    }
}