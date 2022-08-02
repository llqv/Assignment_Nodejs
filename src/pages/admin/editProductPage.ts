import HeaderAdmin from "../../component/headerAdmin"
import SidebarAdmin from "../../component/sidebarAdmin"
import { List, Read, Update } from "../../api/products"
import Products from "../../models/product"
import { listCategory } from "../../api/category"
import Category from "../../models/category"

const editProductPage = {
    render: async () => {
      const res = await Read(id)
      const data:Products = res.data

      const resone = await listCategory()
      const cate:Category[] = resone.data
        return /*html*/`
        ${HeaderAdmin.render()}
<div class="flex mt-3">
<div class="w-[250px] flex-none">
${SidebarAdmin.render()}
</div>
<div class="bg-gray-100 w-full ">
<div class="mx-auto w-[87%]  pb-10">
<div class="bg-gray-100 w-full">
    <div class="mx-10">
        <div class="flex justify-between my-5">
            <h1 class="text-xl font-bold">
                Thêm mới sản phẩm
            </h1>
        </div>
        <div id="formAdd" action="">
          <div class="grid grid-cols-3 gap-8 ">
              <div class="bg-white text-center mb-5 w-full text-gray-700 h-[310px] drop-shadow-md">
              <div class="text-red-500" id="error-img"></div>
                <div class="relative w-full h-64 mb-5 flex justify-center  items-center text-center">
                    <input accept=".jpg, .jpeg .png, .svg, .webp" class="relative z-10 opacity-0 h-full w-full cursor-pointer" type="file" name="bgfile" id="image">
                    <div class="absolute  right-0 left-0 w-full h-full m-auo flex justify-center">
                        <div class="text-center ">
                          <svg xmlns="http://www.w3.org/2000/svg" id="plus" class="w-20 h-20 translate-y-28 mx-auto hidden" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                          </svg>
                          <img class="w-auto max-h-[200px] " src="" id="preview" />
                        </div>
                    </div>
                </div>
              <br>
              <div class="mt-5">
                <textarea id="shortDesc" class="w-full rounded-b-lg drop-shadow-md p-3" placeholder="Mô tả ngắn: " name="" id="" cols="30" rows="10">${data.shortDescription  }</textarea>
                <div class="text-red-500" id="erShort"></div>
              </div>
            </div>
            <div class="col-span-2 text-gray-700">
              <h1 class="text-[16px]  text-lg">Thông tin sản phẩm</h1>
              <hr>
              <div class="mt-5">
                <label for="">Tên sản phẩm</label>
                <br>
                <input id="name" class="w-full mr-10 rounded-md h-8 my-4 p-3" value="" type="text" value="${data.name}">
                <div class="text-red-500" id="erName"></div>
              </div>
              <div class="flex">
                <div class="mt-5 w-1/2 mr-1">
                  <label for="">Giá gốc</label>
                  <br>
                  <input id="price" class="w-full mr-10 rounded-md h-8 my-4 p-3" value="" type="number" value="${data.originalPrice}">
                <div class="text-red-500" id="erPrice"></div>
                </div>
                <div class="mt-5 w-1/2 ml-1">
                  <label for="">Giá khuyến mãi</label>
                  <br>
                  <input id="sale" class="w-full mr-10 rounded-md h-8 my-4 p-3" value="" type="number" value="${data.saleOffPrice}">
                <div class="text-red-500" id="erSale"></div>
                </div>
              </div>
              <div class="mt-5 w-1/2">
                <label for="">Danh mục</label>
                <br>
                <select class="w-full mr-10 rounded-md h-8 my-4" name="" id="cate">
                ${
                  cate.map((Category, index) => (
                   `<option key=${index}>${Category.name}</option>`
                  )) 
                 }
                </select> 
                </div>
                <div class="">
                  <label for="">Đặc điểm nổi bật</label>
                  <br>
                  <textarea class="w-full rounded-md my-4  p-3" name="" id="salientfeatures" cols="30" rows="10">${data.feature}</textarea>
                  <div class="text-red-500" id="erVip"></div>
                  </div>
                <div class="">
                  <label for="">Mô tả dài</label>
                  <br>
                  <textarea  class="w-full rounded-md my-4  p-3" name="" id="longDesc" cols="30" rows="10">${data.description}</textarea>
                  <div class="text-red-500 my-1" id="erLong"></div>
                  <br>
                  </div>
              <button class="w-[96px] h-[34px] bg-blue-400 hover:bg-blue-500 text-white rounded-md" type="submit" id="btn-edit">Cập nhật </button>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
  </div>
`
    },
    afterRender: () => {
      const addProduct = document.querySelector("#btn-edit")
      const preview = document.querySelector("#preview")
      const plus = document.querySelector("#plus")
      const image = document.querySelector("#image")

      addProduct?.addEventListener('click', async function (e) {
        e.preventDefault

        const name = document.querySelector('#name')?.value
        const originalPrice = document.querySelector('#price')?.value
        const saleOffPrice = document.querySelector('#sale')?.value
        const description = document.querySelector('#longDesc')?.value
        const shortDescription = document.querySelector('#shortDesc')?.value
        const feature = document.querySelector('#salientfeatures')?.value
        const category = document.querySelector('#cate')?.value
  
        const product: Products = {
          name: name,
          Image: preview?.src,
          originalPrice: originalPrice,
          saleOffPrice: saleOffPrice,
          description: description,
          shortDescription: shortDescription,
          feature: feature,
          category: category
        }
        const complete = await Update(product)
      })
      //Add event upload
      image?.addEventListener('change', async (e) => {
        const file = e.target.files[0]
        plus.classList = "hidden"
        const res = await UploadFile(file)
        const data = res.data
        preview.src = data.url
  
      })
  
    }
}
export default editProductPage