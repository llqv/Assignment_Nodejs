import validator from "validator";
import { register } from "../../api/user";

const signup = {
    render: async () => {
        return /*html*/`
            <div class=" bg-gray-300 h-screen flex justify-center items-center">
                <div class="register w-[800px] h-[550px] flex justify-between">
                    
                    <div class="left-side bg-white w-2/3 px-10 flex items-center">
                        
                        <div class="w-[410px]">
                            <h1 class="text-center text-2xl font-bold mb-2">Đăng ký</h1>

                            <div>
                                <label for="name" class="font-medium">Name</label><br>
                                <input type="name" id="name" name="name" class="w-full h-12 border-2 border-[#C7C7C7] p-2">
                                <div class="text-red-500 text-sm error"></div>
                            </div>

                            <div>
                                <label for="email" class="font-medium">Email</label><br>
                                <input type="email" id="email" name="email" class="w-full h-12 border-2 border-[#C7C7C7] p-2">
                                <div class="text-red-500 text-sm error"></div>
                            </div>

                            <div>
                                <label for="password" class="font-medium">password</label><br>
                                <input type="password" id="password" name="password" class="w-full h-12 border-2 border-[#C7C7C7] p-2">
                                <div class="text-red-500 text-sm error"></div>
                            </div>

                            <button type="submit" id="btn-submit" class="w-full h-12 text-white text-center bg-[#FF424E] mt-2">Đăng ký</button>

                            <div class="social text-center mt-10">
                                <a href="/signin" class="text-blue-400">Đăng Nhập</a> | <a href="/">Home</a>
                                <div class="mx-auto w-32 flex justify-between mt-5">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="right-side bg-gray-200 w-1/3 flex justify-center items-center">
                        <img src="/image/cellphones-logo.png" class="w-[250px]" alt="">
                    </div>
                </div>
            </div>
        `;
    },
    afterRender: async () => {
        const submit = document.querySelector('#btn-submit')
        const formField = [
            "name", "password", "email"
        ]
        const validate = function () {
            let data: any = {};
            let error = false
            const errors = document.querySelectorAll('.error')
            errors.forEach(e => {
                e.classList.add('hidden')
            })
            formField.forEach(field => {
                const element = document.getElementById(field)

                if (element?.value.length == 0) {
                    addError(element, "Trường dữ liệu bắt buộc")
                    error = true;
                }

                if (field == "email") {
                    if (!validator.isEmail(element?.value)) {
                        addError(element, "Định dạng email sai")
                        error = true
                    }
                }
                data[field] = element?.value
            })
            return { error, data }
        }

        const addError = function (element: HTMLElement, message: string) {
            let temp = element.nextElementSibling;
            temp.classList.remove("hidden");
            temp.textContent = message;
            // element.style.borderColor = "red";
        }

        submit.onclick = async function () {
            const { error, data } = validate()
            if (!error) {
                try {
                    const res = await register(data)
                    alert("Đăng kí thành công")
                    location.href = "/signin"
                } catch (error) {
                    alert(error.message)
                }
            }
        }
    }
}
export default signup;