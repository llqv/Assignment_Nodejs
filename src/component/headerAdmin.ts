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
            <div class="text-white my-6 mx-3 mt-4 mr-14 flex  ">
            <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-3 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            </a>
              
              <div>
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mt-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              </button>
              </div>
              
            </div>
            
            
      </div>
          `
  }
}
export default HeaderAdmin