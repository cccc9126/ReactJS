// ======= Customer Class =======
class Customer {
    id;
    name;
    email;
    shippingAddress;
    constructor(id, name, email, shippingAddress) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Email: ${this.email} | Address: ${this.shippingAddress}`;
    }
}
// ======= Abstract Product =======
class Product {
    id;
    name;
    price;
    stock;
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity) {
        this.stock -= quantity;
    }
    restock(quantity) {
        this.stock += quantity;
    }
}
// ======= Electronics Product =======
class Electronics extends Product {
    warrantyPeriod;
    constructor(id, name, price, stock, warrantyPeriod) {
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ${this.price} | Stock: ${this.stock} | Warranty: ${this.warrantyPeriod} months`;
    }
    getShippingCost(distance) {
        return 50000;
    }
    getCategory() {
        return "Electronics";
    }
}
// ======= Clothing Product =======
class ClothingProduct extends Product {
    size;
    color;
    constructor(id, name, price, stock, size, color) {
        super(id, name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ${this.price} | Stock: ${this.stock} | Size: ${this.size} | Color: ${this.color}`;
    }
    getShippingCost(distance) {
        return 25000;
    }
    getCategory() {
        return "Clothing";
    }
}
// ======= Order =======
class Order {
    orderId;
    customer;
    products;
    totalAmount;
    constructor(orderId, customer, products, totalAmount) {
        this.orderId = orderId;
        this.customer = customer;
        this.products = products;
        this.totalAmount = totalAmount;
    }
    getDetails() {
        let productDetails = this.products
            .map((p) => `${p.product.name} (x${p.quantity}) - ${p.product.price * p.quantity} VND`)
            .join("\n");
        return `Order ID: ${this.orderId}\nCustomer: ${this.customer.getDetails()}\nProducts:\n${productDetails}\nTotal: ${this.totalAmount} VND`;
    }
}
// ======= Store =======
class Store {
    products = [];
    customers = [];
    orders = [];
    productIdCounter = 0;
    customerIdCounter = 0;
    orderIdCounter = 0;
    addProduct(product) {
        product.id = this.productIdCounter++;
        this.products.push(product);
    }
    addCustomer(name, email, address) {
        let cus = new Customer(this.customerIdCounter++, name, email, address);
        this.customers.push(cus);
    }
    createOrder(customerId, productQuantities) {
        let cus = this.findEntityById(this.customers, customerId);
        if (!cus) {
            console.log("Customer not found!");
            return null;
        }
        let productOrders = [];
        for (let item of productQuantities) {
            let productFound = this.findEntityById(this.products, item.productId);
            if (productFound && productFound.stock >= item.quantity) {
                productFound.sell(item.quantity);
                productOrders.push({ product: productFound, quantity: item.quantity });
            }
            else {
                console.log(`Product ${item.productId} not found or not enough stock`);
            }
        }
        let totalAmount = productOrders.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        let order = new Order(this.orderIdCounter++, cus, productOrders, totalAmount);
        this.orders.push(order);
        return order;
    }
    cancelOrder(orderId) {
        let orderIndex = this.orders.findIndex((order) => order.orderId === orderId);
        if (orderIndex === -1) {
            console.log("Order not found");
            return;
        }
        let order = this.orders[orderIndex];
        order.products.forEach((p) => {
            let product = this.findEntityById(this.products, p.product.id);
            if (product)
                product.stock += p.quantity;
        });
        this.orders.splice(orderIndex, 1);
        console.log(`Order ${orderId} has been canceled`);
    }
    listAvailableProducts() {
        let available = this.products.filter((item) => item.stock > 0);
        available.forEach((p) => console.log(p.getProductInfo()));
    }
    listCustomerOrders(customerId) {
        let orders = this.orders.filter((o) => o.customer.id === customerId);
        if (orders.length === 0) {
            console.log("No orders found for this customer.");
        }
        else {
            orders.forEach((o) => console.log(o.getDetails()));
        }
    }
    calculateTotalRevenue() {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }
    countProductsByCategory() {
        let counts = this.products.reduce((acc, p) => {
            let cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});
        console.log(counts);
    }
    updateProductStock(productId, newStock) {
        let index = this.products.findIndex((p) => p.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
            console.log(`Stock updated for product ${productId}`);
        }
        else {
            console.log("Product not found");
        }
    }
    findEntityById(collection, id) {
        return collection.find((item) => item.id === id);
    }
    viewProductDetails(productId) {
        let p = this.findEntityById(this.products, productId);
        if (p) {
            console.log(p.getProductInfo());
        }
        else {
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
            }
            else {
                let size = readlineSync.question("Size: ");
                let color = readlineSync.question("Color: ");
                store.addProduct(new ClothingProduct(0, pname, pprice, pstock, size, color));
            }
            break;
        case 3:
            let custId = readlineSync.questionInt("Customer ID: ");
            let count = readlineSync.questionInt("Number of products: ");
            let items = [];
            for (let i = 0; i < count; i++) {
                let pid = readlineSync.questionInt("Product ID: ");
                let qty = readlineSync.questionInt("Quantity: ");
                items.push({ productId: pid, quantity: qty });
            }
            let order = store.createOrder(custId, items);
            if (order)
                console.log(order.getDetails());
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
            }
            else {
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
export {};
//# sourceMappingURL=demo.js.map