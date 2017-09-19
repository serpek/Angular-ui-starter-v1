export default class Singleton {

    constructor(data) {
        this.OrderNumber = data.OrderNumber || 0;
        this.SaleAmount = data.SaleAmount || 0;
        this.StoreCity = data.StoreCity || "";
        this.StoreState = data.StoreState || "";
        this.Employee = data.Employee || "";
        this.OrderDate = ((d) => {
            if (d == null || d == undefined) {
                d = new Date();
            } else {
                d = new Date(d);
            }

            return d;
        })(data.OrderDate);
    }

}