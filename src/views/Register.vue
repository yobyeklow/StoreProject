<template>
  <div id="register">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg wrapbox_heading">
          <div class="header_page">
            <h3>Tạo tài khoản</h3>
          </div>
        </div>
        <div class="col-md-12 col-lg wrapbox_content">
          <Form
            @submit="CreateAccount"
            :validation-schema="registerFormSchema"
          >
            <div class="form-group">
              <label for="name">Tên</label>
              <Field
                name="name"
                type="text"
                class="form-control "
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
            <div class="form-group">
              <button class="btn btn-primary">Lưu</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContactService from "../services/contact.service";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  name: "Register",
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
        .min(8, "Mật khẩu tối thiểu phải có 8 ký tự")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
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
      registerUser: {
        name: "",
        password: "",
        phone: "",
        email: "",
      },
      message: "",
      registerFormSchema,
    };
  },
  props: {
        user: { type: Object, required: true }
    },
  methods: {
    async CreateAccount() {
      try {
            await ContactService.create(this.registerUser)
            .then((data)=>{
                console.log(data);
            })
            .catch((data)=>{
                console.log(data);
            })
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
};
</script>
<style scoped>
.wrapbox_heading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  border-right: 1px solid #ccc;
}
.header_page h3 {
  font-size: 40px;
  font-weight: 700;
}
.header_page:after {
  content: "";
  background: #000;
  display: block;
  width: 60px;
  height: 4px;
  margin-top: 70px;
}
.wrapbox_content {
  padding: 120px 60px;
}
.large_form {
  margin-bottom: 30px;
}
.form_account input[type="text"],
.form_account input[type="email"],
.form_account input[type="password"] {
  width: 100%;
  padding: 0 20px;
  height: 55px;
  border: 1px solid transparent;
  background: #ccc;
  color: #000;
}
.btn {
  background-color: black;
  color: white;
  padding: 15px 30px;
  border: 1px solid transparent;
}
</style>
