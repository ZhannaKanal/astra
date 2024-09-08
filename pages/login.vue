<template>
  <div class="bg-[#00000050] py-[150px] px-4">
    <div class="bg-[white] max-w-[530px] w-full mx-auto rounded-[16px]">
      <div>
        <img class="right" src="" alt="" />
        <div class="max-w-[370px] w-full mx-auto py-[50px]">
          <p class="text-center text-[32px] font-medium my-4">Login</p>
          <div class="">
            <input
              type="text"
              :disabled="loading"
              v-model="loginData.phoneNumber"
              class="w-full my-2 p-4 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="Number"
            />
            <input
              :disabled="loading"
              v-model="loginData.password"
              class="w-full my-2 p-4 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            @click.prevent="submitForm"
            class="w-full my-6 p-4 bg-[#FF8A00] rounded-[8px] text-[white] border-[#FF8A00] border-solid border-[2px]"
          >
            Submit
          </button>
          <div class="flex text-[14px] justify-between">
            <p>Don't have an account?</p>
            <nuxt-link
              class="text-[#34398B] font-medium hover:underline hover:decoration-solid"
              to="/"
              >Register</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="mx-[700px] my-[100px]">
      <nuxt-link to="profile">Profile</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const dataStore = useDataStore();
    const loginData = reactive({
      password: "",
      phoneNumber: "",
    });
    const loading = ref(false);

    const submitForm = async () => {
      if (loginData.password.length < 0 || loginData.phoneNumber.length < 0)
        return;
      loading.value = true;
      await dataStore.login(loginData.password, loginData.phoneNumber);
      loading.value = false;
    };

    return { loginData, loading, submitForm };
  },
};
</script>
