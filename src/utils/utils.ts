import { formatRelative } from 'date-fns';
import { ru } from 'date-fns/locale';

export function setCookie(name: string, value: string, props: { [key: string]: any } & { expires?: number | Date | string } = {}) {
    props = props || {};
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && (exp as Date).toUTCString) {
        props.expires = (exp as Date).toUTCString();
      }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie;
}

export function getCookie(name: string) {
    const matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)') //eslint-disable-line
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name: string) {
    setCookie(name, "", { expires: -1 });
}

export const formatStatus = (status: string): string => {
    if (status === "done") {
      return "Выполнен";
    } else if (status === "pending") {
      return "Готовится";
    } else {
      return "Создан";
    }
};

export const formatOrderDate = (date: string) => {
  return formatRelative(new Date(date), new Date(), {
    locale: ru,
  });
};