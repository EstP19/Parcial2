class ContactInformation {
    constructor() {
        this.Info = [];
    }
    AddInfo(info) {
        this.Info.push(info);
    }
    getPhoneNumber(phoneNumber) {
        return this.Info.filter((Info) => Info.phoneNumber === phoneNumber);
    }
}
const Concat = new ContactInformation();
const i1 = Concat.AddInfo({ id: 1, name: 'John', phoneNumber: 100000 });
console.log(Concat);
console.log('phone number: ', Concat.getPhoneNumber(100000));
//# sourceMappingURL=ejercicio3.js.map