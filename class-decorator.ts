interface IUserService {
	users: number;
	getUserInDatabase(): number;
}

@CreatedAt()
class UserService implements IUserService {
	users: number = 1000;

	getUserInDatabase() :number {
		return this.users
	}
}

function CreatedAt() {
	return <T extends { new(...args: any[]): {} }>(constructor: T) => {
		return class extends constructor {
			createdAt = new Date()
		}
	}
}

console.log(new UserService())