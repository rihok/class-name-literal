export default function cn(classes: TemplateStringsArray, ...slots: any[]) {
	let result: string[] = [];
	for (let i = 0; i < classes.length; i++) {
		const string = classes[i].replace(/\s\s+/g, " ");
		const slot = slots[i];
		if (typeof slot === "object") {
			const previous = string.split(" ");
			const root = previous.pop() || "";
			result.push(...previous);
			const keys = Object.keys(slot);
			for (let k = 0; k < keys.length; k++) {
				const key = keys[k];
				const value = slot[key];
				if (value) {
					result.push(`${root}${key}`);
				}
			}
		} else if (typeof slot === "string" || typeof slot === "number") {
			result.push(string);
			result.push(slot as string);
		} else {
			result.push(string);
		}
	}

	return result
		.join(" ")
		.split(" ")
		.filter((s) => s !== "")
		.join(" ");
}
