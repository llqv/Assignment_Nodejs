const SidebarAdmin = {
  render: () => {
    return `
          <div class="max-w-[80%] p-3">
          <ul>
          <li class="flex items-center hover:bg-blue-300 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <a data-navigo href="/admin/products/hehe">Danh sách sản phẩm</a>
          </li>
          <li class="flex items-center hover:bg-blue-300 rounded-md mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <a data-navigo data-navigo href="/adminPages/categories">Danh sách danh mục</a>
          </li>
        </ul>
      </div>
          `
  }
}
export default SidebarAdmin