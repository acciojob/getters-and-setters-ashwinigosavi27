//complete this code
class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age

    @property
    def name(self):
        return self._name

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        self._age = value


class Student(Person):
    def study(self):
        print(f"{self.name} is studying.")


class Teacher(Person):
    def teach(self):
        print(f"{self.name} is teaching.")

let person = new Person("John", 25);
console.log(person.name);  // Output: John
console.log(person.age);  // Output: 25

person.age = 30;
console.log(person.age);  // Output: 30

let student = new Student("Alice", 20);
student.study();  // Output: Alice is studying.

let teacher = new Teacher("Mr. Smith", 35);
teacher.teach();  // Output: Mr. Smith is teaching.

