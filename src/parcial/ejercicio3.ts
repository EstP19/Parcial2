interface ContactInfo{
  id : number,
  name: string,
  phoneNumber: number,
}

class ContactInformation {
  private Info: ContactInfo[] = [];

  AddInfo(info : ContactInfo): void {
    this.Info.push(info);
  }

  getPhoneNumber(phoneNumber: number): ContactInfo[] {
    return this.Info.filter((Info) => Info.phoneNumber === phoneNumber);
  }
}

const Concat = new ContactInformation();

const i1 = Concat.AddInfo({ id: 1, name: 'John', phoneNumber: 100000 });

console.log(Concat);
console.log('phone number: ', Concat.getPhoneNumber(100000));
