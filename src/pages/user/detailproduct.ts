import Footer from "../../component/footer"
import Header from "../../component/header"

const DetailProduct = {
    render: async () => {
        return /*html*/ `
        ${Header.render()}
        <div class="container w-[1000px] mx-auto">
            <div class=" mx-auto px-5">
                <ul class="flex justify-start space-x-5 font-mono capitalize">
                    <li> <a>trang chủ</a></li>
                    <li><a>điện thoại</a></li>
                    <li><a>samsung</a></li>
                    <li><a>samsung galaxy A73(5G)256GB</a></li>
                </ul>
                <div class="capitalize font-mono ">
                    <h2>Samsung galaxy A73(5G) 256GB</h2>
                    <hr>
                </div>

            </div>
        </div>

        <div class=" grid grid-cols-4 gap-5 my-5 mx-auto w-[1300px]">

            <div class="mx-auto">
                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/a/7/a73-xanh.jpg"
                    class=" w-[358px] h-[358px] " alt="">
                <div class="flex mt-7 text-[7px] text-center ">

                    <a class="inline-black w-12 h-12 rounded-md  border-2 border-red-600" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        đặc điểm nổi bật
                        
                    </a>

                    <div class="w-12 h-12 mx-1 rounded-lg object-cover border-2 border-stone-400 ">
                        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/a/7/a73-xanh.jpg" alt="">
                    </div>
                    <div class="w-12 h-12 mx-1 rounded-lg object-cover border-2 border-stone-400 ">
                        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/a/7/a73-xanh.jpg" alt="">
                    </div>
                    <div class="w-12 h-12 mx-1 rounded-lg object-cover border-2 border-stone-400 ">
                        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/a/7/a73-xanh.jpg" alt="">
                    </div>
                    <div class="w-12 h-12 mx-1 rounded-lg object-cover border-2 border-stone-400 ">
                        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/a/7/a73-xanh.jpg" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div class="col-span-3">
                    <div class="flex">
                        <div class="mx-1">
                            <div class="text-red-600 text-3xl">
                                <p>11.690.000 đ</p>
                            </div>
                        </div>
                        <div class="mt-3 mx-2">
                            <div class="text-stone-400">
                                <p>12.990.000đ</p>
                            </div>
                        </div>
                    </div>


                    <div class="text-base w-[882px] h-[157px]">
                        Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế
                        sản
                        phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm
                        giác sang trọng và tinh tế.
                    </div>
                    <div class="flex mt-[194px]">
                        <a href="#" class="">
                            <div class=" inline-black bg-red-600 py-3 px-10 rounded-md text-white">
                                Mua ngay
                            </div>
                        </a>
                        <a class="mx-5" href="#">
                            <div class="inline-black w-12 h-12 rounded-md   border-2 border-red-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 text-red-600 w-8 mx-auto mt-2"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </a>
                        <a class="" href="#">Thêm vào giỏ hàng</a>
                    </div>

                </div>

            </div>


        </div>






        <div class="font-semibold text-2xl mx-auto w-[1200px] ">
        <a href="#" >Sản phẩm cùng loại</a>
        </div>
        <div class="flex mx-auto w-[1200px]">
            <div class="w-[232px] h-[307px] mx-1 rounded-lg  border-2 border-stone-400 mt-5">
                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/b/u/buds-live_1.jpg" alt=""
                    class="w-[160px] h-[160px] container mx-auto ">
                <div class="text-black font-semibold ">
                    <a href="#">Tai nghe bluetooth Samsung Galaxy Buds Live</a>
                </div>
                <div class="flex mt-4">
                    <div class="mx-1  text-base">
                        <div class="text-red-600">
                            <a href="#">1.490.000 đ</a>
                        </div>
                    </div>
                    <div class=" mx-2">
                        <div class="text-stone-400 text-xs">
                            <a href="#">4.990.000đ</a>
                        </div>
                    </div>
                </div>

                <a href="#" class="text-center py-1 mx-auto">20 đánh giá</a>
            </div>
            <div class="w-[232px] h-[307px] mx-1 rounded-lg object-cover border-2 border-stone-400 mt-5">
                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/_/0/_0000_uk-galaxy-a53-5g-silicone-cover_1__1.jpg"
                    alt="" class="w-[160px] h-[160px] container mx-auto ">
                <div class="text-black font-semibold ">
                    <a href="#">Ốp lưng Samsung Galaxy A73 2022 Silicone Cover</a>
                </div>
                <div class="flex mt-4">
                    <div class="mx-1  text-base">
                        <div class="text-red-600">
                            <a href="#">590.000 đ</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[232px] h-[307px] mx-1 rounded-lg object-cover border-2 border-stone-400 mt-5">
                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/1/1/11_6_19_1.jpg" alt=""
                    class="w-[160px] h-[160px] container mx-auto ">
                <div class="text-black font-semibold ">
                    <a href="#">Ốp lưng Samsung Galaxy A73 Spring Seine Scene</a>
                </div>
                <div class="flex mt-4">
                    <div class="mx-1  text-base">
                        <div class="text-red-600">
                            <a href="#">176.000đ</a>
                        </div>
                    </div>
                    <div class=" mx-2">
                        <div class="text-stone-400 text-xs">
                            <a href="#">220.000đ</a>
                        </div>
                    </div>


                </div>

            </div>
            <div class="w-[232px] h-[307px] mx-1 rounded-lg object-cover border-2 border-stone-400 mt-5">
                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/k/i/kinh-cuong-luc-trong-suot-galaxy.jpg"
                    alt="" class="w-[160px] h-[160px] container mx-auto ">
                <div class="text-black font-semibold ">
                    <a href="#">
                        Dán chống va đập full màn đen Samsung Galaxy A73</a>
                </div>
                <div class="flex mt-4">
                    <div class="mx-1  text-base">
                        <div class="text-red-600">
                            <a href="#">120.000 đ</a>
                        </div>
                    </div>



                </div>

            </div>
            <div class="w-[232px] h-[307px] mx-1 rounded-lg object-cover border-2 border-stone-400 mt-5">
                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/5/_/5_35_56.jpg" alt=""
                    class="w-[160px] h-[160px] container mx-auto ">
                <div class="text-black font-semibold ">
                    <a href="">Ốp lưng Samsung Galaxy A73 OU Silicone</a>
                </div>
                <div class="flex mt-4">
                    <div class="mx-1  text-base">
                        <div class="text-red-600">
                            <a href="#">70.000 đ</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <section class="bg-stone-300 max-w-7xl max-h-50	mt-20 rounded-lg mx-auto ">
            <div class=" text-center text-red-700 text-2xl">
                <h2>ĐẶC ĐIỂM NỔI BẬT</h2>
            </div>
            <div class="mt-3">
                <p>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
            </div>
            <div class="mt-3">
                <p>Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz
                    mượt
                    mà</p>
            </div>
            <div class="mt-3">
                <p>Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</p>
            </div>
            <div class="mt-3">
                <p>Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</p>
            </div>

        </section>
<div class="mx-auto w-[1280px]">
<div class="mt-4">
<p>Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại
    Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu
    hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản
    phẩm
    có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!</p>
</div>
<div class="mt-4 font-semibold text-2xl">
<h2>Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h2>
</div>
<div class="mt-3">
<p>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ
    ngoại
    hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</p>
</div>
<div class="mt-4 font-semibold text-2xl">
<h2>Thiết kế sang trọng, màn hình Super AMOLED</h2>
</div>
<div class="mt-3">
<p>Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước.
    Với
    phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và
    tinh
    tế.</p>
</div>
<div class="mt-3">
Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho
người
dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.
</div>
<div class="mt-3">Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá
nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</div>


<a href="#">
<div class="w-[355px] h-[34px] text-center py-1 rounded-md mx-auto my-10 border-black border ">
    Xem thêm
</div>
</a>
</div>

</div>
    ${Footer.render()}
        `
    }
}
export default DetailProduct