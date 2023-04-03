import { schemeBlues } from 'd3-scale-chromatic';
import { scaleThreshold } from 'd3-scale';


function filterKeys(obj: any, keys: string[]) {
    const filteredObj: any = {};
    for (let key of keys) {
        if (obj.hasOwnProperty(key)) {
            filteredObj[key] = +obj[key];
        }
    }
    return filteredObj;
}

function getMonthYear(dateString: string) {
      const date = new Date(dateString);
    date.setDate(32);
      const options: object = { month: 'long', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
}

function getYear(dateString: string) {
      const date = new Date(dateString);
    date.setDate(32);
      const options: object = { year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
}

function getMonth(dateString: string) {
  const date = new Date(dateString);
date.setDate(32);
  const options: object = { month: 'long'};
  return date.toLocaleDateString('en-US', options);
}



export { filterKeys, getMonthYear, getYear, getMonth };