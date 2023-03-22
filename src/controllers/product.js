import Product from '../models/product'
import Joi from 'joi';
const checkvalidae = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
})
export const create = async(req, res)=>{
    try {
        // const {error}= checkvalidae.validate(req.body);
        // if (error){
        //     res.json({
        //         message: error.datail[0].message
        //     })
        // }
        const product = await Product.create(req.body);
        res.status(200).json({
            message: "Thêm sản phẩm thành công",
            product,
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
export const getAll = async (req, res) =>{
    try {
        const products = await Product.find();
        res.status(200).json({products});
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
export const get = async (req, res) =>{
    try {
        const products = await Product.findById(req.params.id);
        res.status(200).json({products});
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
export const update = async (req, res) =>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({
            message: "Sửa sản phẩm thành công",
            product,
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
export const remove = async (req, res) =>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id, req.body, {new: true});
        res.status(200).json({
            message: "Xóa sản phẩm thành công",
            product,
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
