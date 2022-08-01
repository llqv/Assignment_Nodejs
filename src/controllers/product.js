import product from "../models/product";

export const list = async (req, res) => {
    try {
        const data = await product.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm nào"
        })
    }
};
export const read = async (req, res) => {
    const filter = { _id: req.params.id };
    const populate = req.query["_expand"];
    try {
        const Product = await product.findOne(filter).select("-__v").populate(populate).exec();
          res.json(Product)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm",
            error
        });
    }
};
export const add = async (req, res) => {
    try {
        console.log(req.body);
        const newProduct = await new product(req.body).save()
        return res.status(200).json("Thêm sản phẩm thành công")
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}
export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const Product = await product.findOneAndDelete({ _id: id }).exec();
        return res.status(200).json({
            message : "Xoá sản phẩm thành công"
        })
    } catch (error) {
        res.status(400).json({
            error: 'Không xoá được sản phẩm'
        })
    }
}

export const update = async (req, res) => {
    try {
        const Product = await product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        res.json(Product);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}