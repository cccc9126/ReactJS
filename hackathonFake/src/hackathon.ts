import * as readlineSync from "readline-sync";

// ======= Customer Class =======
class Customer {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public shippingAddress: string
  ) {}
  getDetails(): string {
    return `ID: ${this.id} | Name: ${this.name} | Email: ${this.email} | Address: ${this.shippingAddress}`;
  }
}

// ======= Abstract Product =======
abstract class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public stock: number
  ) {}
  sell(quantity: number): void {
    this.stock -= quantity;
  }
  restock(quantity: number): void {
    this.stock += quantity;
  }
  abstract getProductInfo(): string;
  abstract getShippingCost(distance: number): number;
  abstract getCategory(): string;
}

// ======= Electronics Product =======
class Electronics extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    stock: number,
    public warrantyPeriod: number
  ) {
    super(id, name, price, stock);
  }
  getProductInfo(): string {
    return `ID: ${this.id} | Name: ${this.name} | Price: ${this.price} | Stock: ${this.stock} | Warranty: ${this.warrantyPeriod} months`;
  }
  getShippingCost(distance: number): number {
    return 50000;
  }
  getCategory(): string {
    return "Electronics";
  }
}

// ======= Clothing Product =======
class ClothingProduct extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    stock: number,
    public size: string,
    public color: string
  ) {
    super(id, name, price, stock);
  }
  getProductInfo(): string {
    return `ID: ${this.id} | Name: ${this.name} | Price: ${this.price} | Stock: ${this.stock} | Size: ${this.size} | Color: ${this.color}`;
  }
  getShippingCost(distance: number): number {
    return 25000;
  }
  getCategory(): string {
    return "Clothing";
  }
}

// ======= ProductOrder interface =======
interface ProductOrder {
  product: Product;
  quantity: number;
}

// ======= Order =======
class Order {
  constructor(
    public orderId: number,
    public customer: Customer,
    public products: ProductOrder[],
    public totalAmount: number
  ) {}
  getDetails(): string {
    let productDetails = this.products
      .map(
        (p) =>
          `${p.product.name} (x${p.quantity}) - ${
            p.product.price * p.quantity
          } VND`
      )
      .join("\n");
    return `Order ID: ${
      this.orderId
    }\nCustomer: ${this.customer.getDetails()}\nProducts:\n${productDetails}\nTotal: ${
      this.totalAmount
    } VND`;
  }
}

// ======= Store =======
class Store {
  products: Product[] = [];
  customers: Customer[] = [];
  orders: Order[] = [];
  private productIdCounter = 0;
  private customerIdCounter = 0;
  private orderIdCounter = 0;

  addProduct(product: Product): void {
    product.id = this.productIdCounter++;
    this.products.push(product);
  }

  addCustomer(name: string, email: string, address: string): void {
    let cus = new Customer(this.customerIdCounter++, name, email, address);
    this.customers.push(cus);
  }

  createOrder(
    customerId: number,
    productQuantities: { productId: number; quantity: number }[]
  ): Order | null {
    let cus = this.findEntityById(this.customers, customerId);
    if (!cus) {
      console.log("Customer not found!");
      return null;
    }

    let productOrders: ProductOrder[] = [];
    for (let item of productQuantities) {
      let productFound = this.findEntityById(this.products, item.productId);
      if (productFound && productFound.stock >= item.quantity) {
        productFound.sell(item.quantity);
        productOrders.push({ product: productFound, quantity: item.quantity });
      } else {
        console.log(`Product ${item.productId} not found or not enough stock`);
      }
    }

    let totalAmount = productOrders.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    let order = new Order(
      this.orderIdCounter++,
      cus,
      productOrders,
      totalAmount
    );
    this.orders.push(order);
    return order;
  }

  cancelOrder(orderId: number): void {
    let orderIndex = this.orders.findIndex(
      (order) => order.orderId === orderId
    );
    if (orderIndex === -1) {
      console.log("Order not found");
      return;
    }

    let order = this.orders[orderIndex];
    order.products.forEach((p) => {
      let product = this.findEntityById(this.products, p.product.id);
      if (product) product.stock += p.quantity;
    });

    this.orders.splice(orderIndex, 1);
    console.log(`Order ${orderId} has been canceled`);
  }

  listAvailableProducts(): void {
    let available = this.products.filter((item) => item.stock > 0);
    available.forEach((p) => console.log(p.getProductInfo()));
  }

  listCustomerOrders(customerId: number): void {
    let orders = this.orders.filter((o) => o.customer.id === customerId);
    if (orders.length === 0) {
      console.log("No orders found for this customer.");
    } else {
      orders.forEach((o) => console.log(o.getDetails()));
    }
  }

  calculateTotalRevenue(): number {
    return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
  }

  countProductsByCategory(): void {
    let counts = this.products.reduce((acc: Record<string, number>, p) => {
      let cat = p.getCategory();
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {});
    console.log(counts);
  }

  updateProductStock(productId: number, newStock: number): void {
    let index = this.products.findIndex((p) => p.id === productId);
    if (index !== -1) {
      this.products[index].stock = newStock;
      console.log(`Stock updated for product ${productId}`);
    } else {
      console.log("Product not found");
    }
  }

  findEntityById<T extends { id: number }>(
    collection: T[],
    id: number
  ): T | undefined {
    return collection.find((item) => item.id === id);
  }

  viewProductDetails(productId: number): void {
    let p = this.findEntityById(this.products, productId);
    if (p) {
      console.log(p.getProductInfo());
    } else {
      console.log("Product not found");
    }
  }
}

// ======= CLI Menu =======
const store = new Store();

while (true) {
  console.log(`
===== E-Commerce Store Menu =====
1. Add Customer
2. Add Product
3. Create Order
4. Cancel Order
5. List Available Products
6. List Customer Orders
7. Calculate Total Revenue
8. Count Products By Category
9. Update Product Stock
10. Find Entity By ID
11. View Product Details
0. Exit
`);
  let choice = readlineSync.questionInt("Enter choice: ");

  switch (choice) {
    case 1:
      let cname = readlineSync.question("Customer name: ");
      let cemail = readlineSync.question("Customer email: ");
      let caddr = readlineSync.question("Shipping address: ");
      store.addCustomer(cname, cemail, caddr);
      break;
    case 2:
      let type = readlineSync.question("Product type (E/C): ");
      let pname = readlineSync.question("Product name: ");
      let pprice = readlineSync.questionFloat("Price: ");
      let pstock = readlineSync.questionInt("Stock: ");
      if (type.toUpperCase() === "E") {
        let warranty = readlineSync.questionInt("Warranty months: ");
        store.addProduct(new Electronics(0, pname, pprice, pstock, warranty));
      } else {
        let size = readlineSync.question("Size: ");
        let color = readlineSync.question("Color: ");
        store.addProduct(
          new ClothingProduct(0, pname, pprice, pstock, size, color)
        );
      }
      break;
    case 3:
      let custId = readlineSync.questionInt("Customer ID: ");
      let count = readlineSync.questionInt("Number of products: ");
      let items: { productId: number; quantity: number }[] = [];
      for (let i = 0; i < count; i++) {
        let pid = readlineSync.questionInt("Product ID: ");
        let qty = readlineSync.questionInt("Quantity: ");
        items.push({ productId: pid, quantity: qty });
      }
      let order = store.createOrder(custId, items);
      if (order) console.log(order.getDetails());
      break;
    case 4:
      let oid = readlineSync.questionInt("Order ID to cancel: ");
      store.cancelOrder(oid);
      break;
    case 5:
      store.listAvailableProducts();
      break;
    case 6:
      let cid = readlineSync.questionInt("Customer ID: ");
      store.listCustomerOrders(cid);
      break;
    case 7:
      console.log(`Total Revenue: ${store.calculateTotalRevenue()} VND`);
      break;
    case 8:
      store.countProductsByCategory();
      break;
    case 9:
      let upid = readlineSync.questionInt("Product ID: ");
      let newStock = readlineSync.questionInt("New stock: ");
      store.updateProductStock(upid, newStock);
      break;
    case 10:
      let etype = readlineSync.question("Entity type (P/C): ");
      let eid = readlineSync.questionInt("ID: ");
      if (etype.toUpperCase() === "P") {
        console.log(store.findEntityById(store.products, eid));
      } else {
        console.log(store.findEntityById(store.customers, eid));
      }
      break;
    case 11:
      let vid = readlineSync.questionInt("Product ID: ");
      store.viewProductDetails(vid);
      break;
    case 0:
      process.exit();
    default:
      console.log("Invalid choice!");
  }
}
