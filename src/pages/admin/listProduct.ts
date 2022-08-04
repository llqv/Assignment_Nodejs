import { listCategory } from "../../api/category";
import { List, Remove } from "../../api/products";
import HeaderAdmin from "../../component/headerAdmin"
import SidebarAdmin from "../../component/sidebarAdmin"
import Products from "../../models/product";
import { rerender } from "../../ultilities/rerender";

const listProduct = {
    render: async () => {
        const data = await List()
        const res = data.data
        const cate = await listCategory()
        const rescate = cate.data
        console.log(res);

        return /* html */`
        ${HeaderAdmin.render()}
        <!-- Container -->
        <div class="flex mt-3">
            <!-- Siderbar -->
            <div class="w-[250px] flex-none mt-4 ml-5">
                ${SidebarAdmin.render()}
            </div>
                <!-- Content -->
            <div  class="w-full p-10 bg-gradient-to-r bg-gray-100">
            <div>
            
                <div class="main text-[#5F5E61]">
                <div class="flex justify-between my-5">
                <h1 class="text-xl font-semibold">Danh sách sản phẩm </h1>
                <a data-navigo href="/adminPages/add" class="mr-5 border-blue-500 text-blue-500 border-4 rounded-md p-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                </a>
                </div>
                <div class="flex justify-between">
                <div class="filter w-[400px] pt-5 flex justify-between">
                    <span class="my-auto text-base font-medium">Bộ Lọc:</span>
                    <div class="filter-cate">
                    <label for="category" class="">Danh mục sản phẩm</label><br>
                    <select class="w-[300px] h-9 mt-3 rounded border-gray-300" name="category" id="category">
                        ${rescate.map((item: Category) => `
                        <option value="${item.id}">${item.name}</option>
                        `)}
                        
                    </select>
                    </div>
                </div>
                </div>
                <table class="table-auto w-11/12 mx-auto my-5 text-center">
                    <thead>
                        <tr class="border-t-[1px] border-gray-500 h-14">
                        <th class="text-center p-3 px-5">#</th>
                        <th class="text-center p-3 px-5">Tên Sản phẩm</th>
                        <th class="text-center p-3 px-5">Ảnh</th>
                        <th class="text-center p-3 px-5">Thành tiền</th>
                        <th class="text-center p-3 px-5">Mô tả</th>
                        <th class="text-center p-3 px-5">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${res.map((item: Products, index: number) => `
                    <tr class="border-t-2 hover:bg-orange-100">
                    <td class="text-center p-3 px-5">${index + 1}</td>
                    <td class="text-center p-3 px-5">${item.name}</td>
                    <td class="w-[120px] p-3 px-5"><img class="w-20 h-20 rounded-full" src="${item.Image}" alt=""></td>
                    <td class="text-center p-3 px-5">${item.originalPrice}</td>
                    <td class="text-left p-3 px-5 w-1/2">${item.description}</td>

                    <td class="">
                        
                            <a data-navigo href="/admin/products/edit/${item._id}"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />

                            </svg></a>
                            <button class="btn-remove" data-id="${item._id}"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg></button>
                            
                        </td>
                    </tr>
                    `).join("")}
                    </tbody>
                </table>
                </div>
                </div>
            </div>
            </div>
        `
    },
    afterRender: () => {
        const btns = document.querySelectorAll('table .btn-remove')
        for (let btn of btns) {
            const id = btn.dataset.id
            console.log(id);
            btn?.addEventListener('click', async function () {
                console.log(id);
                const action = await Remove(id)
                if (action) {
                    alert("Xóa sản phẩm thành công !")
                    // location.reload()
                    rerender("#app", listProduct)
                }
            })
        }

    }
}

export default listProduct;