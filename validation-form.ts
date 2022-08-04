type Validation<T> = {
	[K in keyof T]: {
		isValid: true
	} | {
		isValid: false;
		errorMessage: string
	}
}