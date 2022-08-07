import { ReadCate, CreateCate, UpdateCate } from "../../api/category"
import HeaderAdmin from "../../component/headerAdmin"
import SidebarAdmin from "../../component/sidebarAdmin"
import Category from "../../models/category"
import Products from "../../models/product"

const EditCate = {
  render: async (_id: any) => {
    console.log(_id);

    const cate = await ReadCate(_id)
    const res = cate.data.category
    console.log(res);


    // console.log(cate);

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
                             Chỉnh sửa mới danh mục
                          </h1>
                      </div>
                      <div id="formAdd" action="">
                        <div >
                         
                          <div class="col-span-2 text-gray-700">
                            <h1 class="text-[16px] text-lg">Thông tin danh mục</h1>
                            <hr>
                            <div class="mt-5">
                              <label for="">Tên danh mục</label>
                              <br>
                              <input id="name" class="w-full mr-10 rounded-md h-8 my-4  p-3" value="${res.name}" type="text">
                              <div class="text-red-500" id="erName"></div>
                            </div>
                            
                          <button class="w-[120px] h-[34px] bg-blue-400 hover:bg-blue-500 text-white rounded-md px-1" type="submit" id="btn-add">Cập nhật mới</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
              </div>
          `
  },
  afterRender: (_id) => {
    const addProduct = document.querySelector("#btn-add")

    addProduct?.addEventListener('click', async function (e) {
      e.preventDefault
      const name = document.querySelector('#name')?.value
      console.log(_id);
      console.log(name);

      const category: Category = {
        _id: _id,
        name: name
      }
      console.log(category);
      try {
        const data = await UpdateCate(category)
        alert('Thêm danh mục thành công')
        location.href = "/adminPages/categories"
      }
      catch (err) {
        console.log(err)
      }
    })

  }

}
export default EditCate