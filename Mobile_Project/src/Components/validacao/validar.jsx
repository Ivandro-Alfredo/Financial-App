export default validarInput = (valor) => {
    const validar = RegExp(
        /^[A-Za-z\u00C0-\u017F´]+s+[A-Za-z\u00C0-\u017F´]{0,}$/
    );

    if (validar.test(valor) === true) {
        print('é verdade');
        return true;
    } else {
        print('não é erdade');
        return false;
    }
};

/*export const validarDesc = new RegExp('^[A-Z][a-z][A-Z_\.]{3,}$/i ');
^[^\s][a-zA-ZÀ-ú ]*

export const validarMoeda = new RegExp(
    '^(([1-9][d]{0,2}([.][d]{3})*)|(([1-9][.][d]*)?[d]))(,[d][d])?'
);*/
