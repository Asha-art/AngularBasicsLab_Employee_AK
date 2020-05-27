function sayHello(person: string): string {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);


//interface
interface EmployeeOptions {
    firstName: string;
    lastName: string;
    age?: number;
    occupation?: string;
}


class Employee implements EmployeeOptions {
    private firstName: string;
    private lastName: string;
    private age: number;
    private phoneNumber: string;
    private state: string
    private zipCode: string;
    private occupation: string;
    hourlyWage: number;
    private hours: number;
    private certificate: string[] = [];

    constructor(firstName: string, lastName: string, age?: number, phoneNumber?: string, state?: string, zipCode?: string, occupation?: string, hourlyWage?: number, hours?: number) {
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
    getFirstName(): string {
        return this.firstName;
    }
    getLastName(): string {
        return this.lastName;
    }
    getAge(): number {
        return this.age;
    }
    getPhoneNumber(): string {
        return this.phoneNumber;
    }
    getState(): string {
        return this.state;
    }
    getZipCode(): string {
        return this.zipCode;
    }
    getOccupation(): string {
        return this.occupation;
    }
    // getHourlyWage(): number {
    //     return this.hourlyWage;
    // }

    //Setters
    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }
    setLastName(lastName: string): void {
        this.lastName = this.lastName;
    }
    setAge(age: number): void {
        this.age = age;
    }
    setPhoneNumber(phoneNumber: string): void {
        this.phoneNumber = phoneNumber;
    }
    setState(state: string): void {
        this.state = state;
    }
    setZipCode(zipCode: string): void {
        this.zipCode = zipCode;
    }
    setOccupation(occupation: string): void {
        this.occupation = occupation;
    }
    // setHourlyWage(hourlyWage: number): void {
    //     this.hourlyWage = hourlyWage;
    // }

    //Methods
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }

    location(): string {
        return this.state + ", " + this.zipCode;
    }

    //display Details
    displayDetails(): string {
        return "Name: " + this.fullName() + "<br>Phone Number: " + this.phoneNumber +
            "<br>Location: " + this.location() + "<br>";
    }


    //Calculate weekly wage
    weeklyWage(hours: number): any {
        if (hours) {
            return "Weekly wages: $" + (hours * this.hourlyWage);
        } else {
            return "Weekly wages: $" + 40 * this.hourlyWage;
        }
    }

    //certificate array
    addCerts(...args: string[]): string {
        return (
            "Certification: " + (this.certificate = this.certificate.concat(args)));
    }

    static createEmployee(emp: EmployeeOptions): Employee {
        return new Employee(emp.firstName, emp.lastName);
    }


}

//create employees
var employee1 = new Employee("John", "Doe", 30, "923899999", "TN", "24298", "constructor", 20, 30);
var employee2 = new Employee("Daisy", "Blue", 28, "34913498", "NC", "28277", "Professor", 60, 40);
var employee3 = new Employee("Tom", "Jerry", 25, "984923999", "GA", "63728", "Artist", 50, 50);

document.getElementById("emp1").innerHTML = employee1.fullName() + "<br> " + employee1.addCerts("MBA", "CSM");
document.getElementById("emp2").innerHTML = employee2.fullName() + "<br> " + employee2.location();
document.getElementById("emp3").innerHTML = employee3.displayDetails() + "<br>" + employee3.weeklyWage(50);

document.getElementById("intf").innerHTML = "using interface, New Employee: " + Employee.createEmployee({ firstName: "Winnie", lastName: " The Pooh " }).fullName();

