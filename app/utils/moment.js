import getOwner from 'ember-owner/get';
import originalMoment from 'moment';

export function moment(...args) {
  return originalMoment(...args);
}

export function momentUser(context, ...args) {
  return getOwner(context).lookup('service:moment').moment(...args);
}
