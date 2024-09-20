<template>
  <div class="bg-[#00000050] py-[50px]">
    <div class="bg-[white] max-w-[530px] w-full mx-auto rounded-[16px]">
      <div>
        <img class="right" src="" alt="" />
        <div class="max-w-[370px] w-full mx-auto py-[50px]">
          <p class="text-center text-[32px] font-medium my-4">Register</p>
          <div class="">
            <label for=""></label>
            <input
              v-model="registerData.lastName"
              class="w-full my-2 p-4 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
              type="text"
              placeholder="Surname"
            />
            <label for=""></label>
            <input
              v-model="registerData.firstName"
              class="w-full my-2 p-4 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
              type="text"
              placeholder="Name"
            />
            <label for=""></label>
            <input
              v-model="registerData.phoneNumber"
              class="w-full my-2 p-4 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              placeholder="Number"
            />
            <label for=""></label>
            <input
              v-model="registerData.password"
              class="w-full my-2 p-4 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
              type="text"
              placeholder="Password"
            />
            <label for=""></label>
            <input
              v-model="registerData.passwordConfirmation"
              class="w-full my-2 p-4 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
              type="text"
              placeholder="Repeat password"
            />
          </div>
          <button
            @click.prevent="submitForm"
            class="w-full my-6 p-4 bg-[#FF8A00] rounded-[8px] text-[white] hover:bg-[white] hover:text-[#FF8A00] border-[#FF8A00] border-solid border-[2px]"
            type="submit"
          >
            Register
          </button>
          <div class="flex text-[14px] justify-center gap-2">
            <p>Already registered?</p>
            <nuxt-link
              class="text-[#34398B] font-medium hover:underline hover:decoration-solid"
              to="login"
              >Login</nuxt-link
            >
          </div>
          <p class="text-center text-[12px] my-1">
            By register, you agree, that you read and confirm the Policy
          </p>
        </div>
      </div>
    </div>
    <div class="absolute"></div>
  </div>
</template>

<script lang="ts">
import type { RegisterData } from "@/api/controllers/types";
export default {
  setup() {
    const dataStore = useDataStore();
    const registerData = reactive<RegisterData>({
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirmation: "",
      phoneNumber: "",
    });
    const loader = ref(false);
    const submitForm = async () => {
      if (
        !registerData.lastName ||
        !registerData.firstName ||
        !registerData.password ||
        !registerData.passwordConfirmation ||
        !registerData.phoneNumber ||
        registerData.password != registerData.passwordConfirmation
      )
        return;
      loader.value = true;
      const successRegister = await dataStore.register(registerData);
      if (successRegister) {
        navigateTo({
          name: "otp",
          query: { phoneNumber: registerData.phoneNumber },
        });
      }
      loader.value = false;
    };

    return { registerData, loader, submitForm };
  },
};
</script>

<style lang="scss" scoped></style>
