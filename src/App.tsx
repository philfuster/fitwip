import "./App.css";
import { MyComponent } from "./shared/components";

class Dog {
	private name: string;

	private age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	public bark() {
		console.log(`${this.name} is barking!!`);
	}

	public barkAge() {
		console.log(`${this.name} is ${this.age} years old!`);
	}
}

const willieNelson = new Dog("willieNelson", 3);

function calculateHelloForDog(dog?: Dog) {
	const flag = true;
	if (flag) {
		console.log(`Hello ${dog != null ? dog.bark() : "doggy"}!`);
	}
}

function App() {
	return (
		<>
			<MyComponent />
			<p>Hey</p>
			{calculateHelloForDog(willieNelson)}
			<MyComponent />
		</>
	);
}

export default App;
