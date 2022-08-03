const HeaderAdmin = {
  render: () => {
    return /*html*/`
          <div class="flex justify-between bg-blue-500 py-1">
          <a class="flex text-white mx-3" href="/adminPages">
            <img class="w-[50px] h-[50px] my-3" src="../public/image/cellphones-logo.png" alt="">
            <p class="my-6 text-xl ml-2">Dashboard</p>
          </a>
            <form class="my-6" action="">
              <input class="float-left w-[500px] rounded-l-md h-10 px-2" type="text" placeholder="Tìm kiếm">
              <button type="submit" class="bg- h-10 rounded-r-md bg-white border-l-2 px-2">Tìm kiếm</button>
            </form>
            <div class="text-white my-6 mx-3">
              Xin chào Ning
            </div>
      </div>
          `
  }
}
export default HeaderAdmin