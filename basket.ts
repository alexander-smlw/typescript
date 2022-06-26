class Delivery {
    constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
    constructor(date: Date, public address: string) {
      super(date)
    }
}

class ShopDelivery extends Delivery {
    constructor(public shopId: string) {
      super(new Date())
    }
}

class IProduct {
  constructor(
      public id: number, 
      public title: string,
      public price: number
  ) {}
}

type TDeliveryOptions = HomeDelivery | ShopDelivery
 

class Cart {
    private products: IProduct[] = [];
    private delivery: TDeliveryOptions;

    public addProduct(product: IProduct): void {
        this.products.push(product)
    }

    public deleteProduct(productsId: number): void {
        this.products = this.products.filter((product: IProduct) => product.id !== productsId)
    }

    public getSum(): number {
      return this.products
        .map((product: IProduct) => product.price)
        .reduce((prev: number, current: number) => prev + current, 0)
    }


    public setDelivery(delivery: TDeliveryOptions): void {
        this.delivery = delivery
    }

    public checkout() {
      if (this.products.length == 0) {
        throw new Error('Нет ни одного товара в корзине')
      }
      if (!this.delivery) {
        throw new Error('Не указан способ доставки')
      }

      return { success: true }
    }
}

const cart = new Cart()