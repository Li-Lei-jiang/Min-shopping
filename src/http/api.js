import service from './index'

export default {
    //首页数据
    homeData() {
        return service.req(`/goods/home`)
    },
    //为你推荐
    recommend() {
        return service.req(`/goods/recommend`)
    },
    //所有商品                       
    allGoods(page, size, sort, priceLte, priceGt) {
        return service.req(`/goods/allGoods?page=${page}&size=${size}`)
        if (sort) {
            return service.req(`/goods/allGoods?page=${page}&size=${size}&sort=${sort}`)
        }
        if (priceGt && priceLte) {
            return service.req(`/goods/allGoods?page=${page}&size=${size}&priceLte=${priceLte}&priceGt=${priceGt}`)
        }
        if (priceGt && sort && priceLte) {
            return service.req(`/goods/allGoods?page=${page}&size=${size}&sort=${sort}&priceGt=${priceGt}&priceLte=${priceLte}`)
        }



    },
    //搜索商品 keyword: 关键字
    search({ keyword }) {
        return service.req(`/goods/search?keyword=${keyword}`)
    },
    //登录 
    login({ username, password }) {
        return service.req(`/users/login`, {
            username,
            password
        })
    },
    //注册 
    register({ username, password }) {
        return service.req(`/users/register`, {
            username,
            password
        })
    },
    //加入购物车 productId: 商品id
    addCart({ productId }) {
        return service.req(`/goods/addCart`, { productId })
    },
    //查询购物车
    getCarts() {
        return service.req(`/goods/getCart`)
    },

    //删除购物车的商品  1.productId: 商品_id post请求
    delCart({ productId }) {
        return service.req(`/goods/delCart`, { productId })
    },
    //修改购物车数量 请求方式: post参数  1.productId: 商品_id  2.count: 数量
    editCart({ productId, count }) {
        return service.req(`/goods/editCart`, {
            productId,
            count
        })
    },
    //获取全部收获地址
    aGoodslist() {
        return service.req(`/address/list`)
    },

    // 添加收获地址 
    addAddress({ username, phone, address, isDefault }) {
        return service.req(`/address/addAddress`, {
            username,
            phone,
            address,
            isDefault
        })
    },

    //设置默认地址 请求方式: post 1.addressId: 地址的_id
    setDefault() {
        return service.req(`/address/setDefault`)
    },

    //修改地址 请求方式: post
    editAddress({ addressId, phone, address, isDefault, username }) {
        return service.req(`/address/editAddress`, {
            username,
            phone,
            address,
            isDefault,
            addressId
        })
    },














}