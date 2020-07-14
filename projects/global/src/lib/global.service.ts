import { Injectable } from '@angular/core';

export interface IAddress {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  country?: string;
  postcode?: string;
}

export interface IPhoneNumber {
  format?: string;
  number?: string;
  name?: string;
}

export interface IEmailAddress {
    name?: string;
    address?: string;
}

export class PhoneNumber implements IPhoneNumber {
  format?: string;
  number?: string;
  name?: string;

  constructor(data: any) {
    this.format = data.format ? data.format : null;
    this.number = data.number ? data.number : null;
    this.name = data.name ? data.name : null;
  }
}

export class EmailAddress implements IEmailAddress {
  name?: string;
  address?: string;

  constructor(data: any) {
    this.name = data.name ? data.name : null;
    this.address = data.address ? data.address : null;
  }
}
export class Address implements IAddress {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  country?: string;
  postcode?: string;

  constructor(data: any) {
    this.line1 = data.line1 ? data.line1 : null;
    this.line2 = data.line2 ? data.line2 : null;
    this.city = data.city ? data.city : null;
    this.state = data.state ? data.state : null;
    this.country = data.contry ? data.contry : null;
    this.postcode = data.postcode ? data.postcode : null;

  }
}




@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  static versionTest(){
    const version = 1;
  }

  static createAddressArray(data: any[]): IAddress[] {
    const addressArray: IAddress[] = [];
    if (data) {
    data.forEach(address => {
      addressArray.push (new Address(address));
    });
  }
    return addressArray;
  }

  static createEmailsArray(data: any[]): IEmailAddress[] {
    const emailsArray: IEmailAddress[] = [];
    if (data) {
      data.forEach(email => {
        emailsArray.push(new EmailAddress(email));
      });
    }
    return emailsArray;
  }

  static createPhoneNumbersArray(data: any[]): IPhoneNumber[] {
    const phoneNumbers: IPhoneNumber[] = [];
    if (data) {
      data.forEach(phoneNumber => {
        phoneNumbers.push( new PhoneNumber(phoneNumber));
      });
    }
    return phoneNumbers;
  }
}
