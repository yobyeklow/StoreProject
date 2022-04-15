<template>
    <Form
        @submit="$emit('submit:user', registerUser)"
        :validation-schema="registerFormSchema"
    >
        <div class="form-group">
            <label for="name">Tên</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="registerUser.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="email">E-mail</label>
            <Field
                name="email"
                type="email"
                class="form-control"
                v-model="registerUser.email"
            />
            <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="password">Mật khẩu</label>
            <Field
                name="password"
                type="password"
                class="form-control"
                v-model="registerUser.password"
            />
            <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="phone">Điện thoại</label>
            <Field
                name="phone"
                type="tel"
                class="form-control"
                v-model="registerUser.phone"
            />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>

        <div class="form-group form-check">
            <input
                name="favorite"
                type="checkbox"
                class="form-check-input"
                v-model="registerUser.favorite"
            />
            <label for="favorite" class="form-check-label">
                <strong>Liên hệ yêu thích</strong>
            </label>
        </div>

        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button
                v-if="registerUser.id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="$emit('delete:contact', registerUser.id)"
            >
                Xóa
            </button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:user"],
    props: {
        user: { type: Object, required: true }
    },
    data() {
        const registerFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 3 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự.")
                .required("Email không được bỏ trống"),
            password: yup
                .string()
                .max(32, "Mật khẩu tối đa 32 ký tự.")
                .min(8,"Mật khẩu tối thiểu phải có 8 ký tự")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                    "Mật khẩu nên chứa tối thiểu 8 ký tự, có ít nhất 1 ký tự in hoa,1 ký tự thường và 1 chữ số"
            ),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
        });
        return {
            registerUser:{
                name:'',
                email:'',
                password:'',
                phone:'',
            },
            registerFormSchema
        };
    },
};
</script>

<style scoped>
@import "@/assets/css/form.css";
</style>