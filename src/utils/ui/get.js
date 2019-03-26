import getter from 'lodash.get';

export default (val, defaultValue) => p => getter(p, `theme.${val}`, defaultValue);
