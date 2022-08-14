interface IUserService {
	users: number;
	getUserInDatabase(): number;
}

@CreatedAt()
class UserServiceCatch implements IUserService {
	users: number = 1000;

	@Catch(true)
	getUserInDatabase(): number {
		throw new Error('ОШшибка')
	}
}

function Catch(retrhow: boolean = false) {
	return (
		target: Object,
		propertyKey: string | symbol,
		descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
	): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
		const originalValue = descriptor.value

		descriptor.value = async (...args: any[]) => {
			try {
				return await originalValue?.apply(target, args)
			} catch (e) {
				if (e instanceof Error) {
					console.log(e.message)

					if (retrhow) {
						throw e
					}
				}
			}
		}
	}
}