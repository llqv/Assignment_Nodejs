class Product {
    name: string;
    originalPrice: number;
    image: string;
    saleOffPrice: number;
    category: string;
    feature: string;
    description: string;
    shortDescription: string;
    _id?: string;
    isDelete?: boolean
    constructor(
        name: string,
        originalPrice: number,
        image: string,
        saleOffPrice: number,
        category: string,
        feature: string,
        description: string,
        shortDescription: string,
        _id?: string
    ) {
        this.name = name,
            this.originalPrice = originalPrice,
            this.image = image,
            this.saleOffPrice = saleOffPrice,
            this.category = category,
            this.feature = feature,
            this.description = description,
            this.shortDescription = shortDescription,
            this._id = _id
    }
}
export default Product