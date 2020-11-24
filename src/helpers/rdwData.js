import getRandom from './getRandom';

export default function() {
	// Hier doe je normaal je logica om je data op te halen enzo...
	return [
		{
			name: "Bob",
			sales: getRandom(1, 20)
		},
		{
			name: "Laurens",
			sales: getRandom(1, 20)
		},
		{
			name: "Robert",
			sales: getRandom(1, 20)
		},
		{
			name: "Danny",
			sales: getRandom(1, 20)
		},
		{
			name: "Fleur",
			sales: getRandom(1, 20)
		},
		{
			name: "Jeanne",
			sales: getRandom(1, 20)
		}
	]
}