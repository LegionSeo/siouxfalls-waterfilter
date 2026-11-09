/**
 * TODO: replace with the real tracking number before launch.
 * This is the only place the phone number lives. Every link, form, and schema node reads it.
 */
export const PHONE = '(605) 000-0000';

const digits = PHONE.replace(/\D/g, '');

export const PHONE_E164 = `+1${digits}`;
export const PHONE_HREF = `tel:${PHONE_E164}`;
export const PHONE_SMS_HREF = `sms:${PHONE_E164}`;
