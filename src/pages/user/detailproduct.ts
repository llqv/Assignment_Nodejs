import { Listbycate, Read } from "../../api/products"
import Footer from "../../component/footer"
import Header from "../../component/header"
import Products from "../../models/product"

const DetailProduct = {
    render: async (_id: any) => {
        const data = await Read(_id)
        const res: Products = data.data
        const idCate = res.category
        console.log(idCate);
        const listByCate = await Listbycate(idCate)
        const resCate = listByCate.data

        console.log(resCate);

        console.log(res);

        return /*html*/ `
        ${Header.render()}
        <div class="container mx-auto">
            <div class=" mx-auto px-5">
                <ul class="flex justify-start space-x-5 capitalize text-xl">
                    <a href="/">trang chủ</a>
                    <a href="/">điện thoại</a>
                    <a href="/product/${res._id}">${res.name}</a>
                </ul>

            </div>
        </div>

        <div class=" grid grid-cols-4 gap-5 my-5 mx-auto w-[1300px]">

            <div class="mx-auto mt-4">
                <img src="${res.Image}"
                    class=" w-[358px] h-[358px] " alt="">
                <div class="flex mt-7 text-[7px] text-center ">

                    
                </div>
            </div>
            <div>
                <div class="col-span-3">
                <div class="mt-4 mx-4">
                    <div class="text-3xl font-bold w-[1000px]">
                                <p>${res.name}</p>
                            </div>
                        <div class="mx-1">
                        <div class="flex mt-4">
                            <div class="text-red-600 text-3xl">
                                <p>${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(res.saleOffPrice)}</p>
                            </div>
                            <div class="mt-3 mx-2">
                            <div class="text-stone-400">
                                <p>${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(res.originalPrice)}</p>
                            </div>
                        </div>
                        </div>
                        
                        </div>
                    </div>


                    <div class="text-base w-[882px] h-[157px] mx-4">
                        Mô tả ngắn: ${res.shortDescription}
                    </div>
                    <div class="flex mt-[194px]">
                        <a href="#" class="">
                            <div class=" inline-black bg-red-600 py-5 px-16 rounded-md text-white">
                                Mua ngay
                            </div>
                        </a>
                        <a class="mx-5" href="#">
                            <div class="inline-black w-16 h-16 rounded-md border-2 border-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 text-red-600 m-4 w-8 "
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </a>
                    </div>

                </div>

            </div>


        </div>






        <div class="font-semibold text-2xl mx-auto container ">
            <a href="#" >Sản phẩm cùng loại</a>
        </div>
        <div class="grid grid-cols-6 mx-auto container">
            ${resCate.map((item: Products) => `
             <a class="mt-4" href="/product/${item._id}">
             <div class="w-[232px] h-[307px] mx-1 rounded-lg  border-2 border-stone-400 mt-5">
                 <img src="${item.Image}" alt=""
                     class="w-[160px] h-[160px] container mx-auto ">
                 <div class="text-black font-semibold p-3">
                     ${item.name}   
                 </div>
                 <div class="flex mt-4 p-3">
                     <div class="mx-1  text-base">
                    
                     </div>
                     <div class=" mx-2">
                      
                     </div>
                 </div>

             </div>
        </a>
            `).join("")}
           
        </div>

        <section class="bg-stone-300 container max-h-50	mt-20 rounded-lg mx-auto ">
            <div class=" text-center text-red-700 text-2xl">
                <h2>ĐẶC ĐIỂM NỔI BẬT</h2>
            </div>
            <div class="mt-3">
                ${res.feature}
            </div>

        </section>
        <div class="mx-auto container my-10">
            ${res.description}
        </div>
        </div>

        </div>
        <hr>
    ${Footer.render()}
        `
    }
}
export default DetailProduct