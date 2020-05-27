function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage, hours) {
        this.certificate = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        this.hours = hours;
        console.log(this.displayDetails());
        //  console.log("Weekly wage: " + this.weeklyWage(hours));
    }
    //getters and setters
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    Employee.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Employee.prototype.getState = function () {
        return this.state;
    };
    Employee.prototype.getZipCode = function () {
        return this.zipCode;
    };
    Employee.prototype.getOccupation = function () {
        return this.occupation;
    };
    Employee.prototype.getHourlyWage = function () {
        return this.hourlyWage;
    };
    //Setters
    Employee.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Employee.prototype.setLastName = function (lastName) {
        this.lastName = this.lastName;
    };
    Employee.prototype.setAge = function (age) {
        this.age = age;
    };
    Employee.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Employee.prototype.setState = function (state) {
        this.state = state;
    };
    Employee.prototype.setZipCode = function (zipCode) {
        this.zipCode = zipCode;
    };
    Employee.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Employee.prototype.setHourlyWage = function (hourlyWage) {
        this.hourlyWage = hourlyWage;
    };
    //Methods
    Employee.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Employee.prototype.location = function () {
        return this.state + ", " + this.zipCode;
    };
    //display Details
    Employee.prototype.displayDetails = function () {
        return "Name: " + this.fullName() + "<br>Phone Number: " + this.phoneNumber +
            "<br>Location: " + this.location() + "<br>";
    };
    //Calculate weekly wage
    Employee.prototype.weeklyWage = function (hours) {
        if (hours) {
            return "Weekly wages: $" + hours * this.getHourlyWage;
        }
        else {
            return "Weekly wages: $" + 40 * this.getHourlyWage;
        }
    };
    //certificate array
    Employee.prototype.addCerts = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return ("Certification: " +
            (this.certificate = this.certificate.concat(args)));
    };
    Employee.createEmployee = function (emp) {
        return new Employee("New Employee: " + emp.firstName, emp.lastName);
    };
    return Employee;
}());
//create employees
var employee1 = new Employee("John", "Doe", 30, "923899999", "TN", "24298", "constructor", 20, 30);
var employee2 = new Employee("Daisy", "Blue", 28, "34913498", "NC", "28277", "Professor", 60, 40);
var employee3 = new Employee("Tom", "Jerry", 25, "984923999", "GA", "63728", "Artist", 50, 50);
document.getElementById("emp1").innerHTML = employee1.fullName() + "<br> " + employee1.addCerts("MBA", "CSM");
document.getElementById("emp2").innerHTML = employee2.fullName() + "<br> " + employee2.location();
document.getElementById("emp3").innerHTML = employee3.displayDetails() + employee3.weeklyWage(50);
document.getElementById("intf").innerHTML = Employee.createEmployee({ firstName: "Winnie", lastName: " The Pooh " }).fullName();
