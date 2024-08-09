<template>
  <div class="bg-[#00000050] py-[150px]">
    <div class="bg-[white] max-w-[530px] w-full mx-auto rounded-[16px]">
      <div>
        <img class="right" src="" alt="" />
        <div class="max-w-[370px] w-full mx-auto py-[50px]">
          <p class="text-center text-[32px] font-medium my-4">Login</p>
          <div class="">
            <input
              class="w-full my-2 p-4 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              placeholder="Number"
            />
            <input
              class="w-full my-2 p-4 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
              type="text"
              placeholder="Password"
            />
          </div>
          <button
            class="w-full my-6 p-4 bg-[#FF8A00] rounded-[8px] text-[white] hover:bg-[white] hover:text-[#FF8A00] border-[#FF8A00] border-solid border-[2px]"
            type="submit"
          >
            Login
          </button>
          <div class="flex text-[14px] justify-between">
            <p>Don't have an account?</p>
            <nuxt-link class="text-[#34398B] font-medium hover:underline hover:decoration-solid" to="/">Register</nuxt-link>
          </div>
        
        </div>
      </div>
    </div>
    <div class="absolute"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
