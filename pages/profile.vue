<template>
  <div class="bg-[#34398B] text-[#FFFFFF]">
    <div class="max-w-[1300px] w-full mx-auto flex justify-between">
      <div class="flex text-[13px] gap-12 py-2">
        <p>KZ / RU</p>
        <div class="flex gap-2">
          <img class="my-auto" src="~assets/icons/logo.svg" alt="" />
          <p class="text-[14px] font-medium">Astra-lombard</p>
        </div>
        <div class="flex gap-2">
          <img class="my-auto" src="~assets/icons/icon_1.svg" alt="" />
          <p>8 800 070 05 40</p>
        </div>
        <p>Sales</p>
      </div>
      <div class="flex text-[13px] gap-12 py-2">
        <p>Payment</p>
        <p>Delivery</p>
        <div class="flex gap-2">
          <p>Pick-up point</p>
          <img
            class="w-[20px] h-[20px]"
            src="~assets/icons/icon_2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div
    class="max-w-[1300px] w-full mx-auto flex justify-between py-10 border-b-2"
  >
    <img src="~assets/icons/logo_2.svg" alt="" />
    <div class="flex gap-4">
      <input
        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-[#EBEBEB] rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#FF8A00] focus:ring-[#FF8A00] focus:ring-1 sm:text-sm"
        placeholder="Search thing..."
        type="text"
      />
      <img
        class="border-solid border-[1px] border-[#EBEBEB] rounded-[8px] p-2"
        src="~assets/icons/i_3.svg"
        alt=""
      />
      <img
        class="border-solid border-[1px] border-[#EBEBEB] rounded-[8px] p-2"
        src="~assets/icons/i_4.svg"
        alt=""
      />
      <img
        class="border-solid border-[1px] border-[#EBEBEB] rounded-[8px] p-2"
        src="~assets/icons/i_5.svg"
        alt=""
      />
    </div>
  </div>
  <div class="max-w-[1300px] w-full mx-auto my-12 flex gap-[50px]">
    <div class="max-w-[230px] w-full bg-[#F8F8F8] rounded-[14px]">
      <div class="my-6">
        <div class="flex gap-2 my-2">
          <img src="~assets/icons/i_6.svg" alt="" />
          <p>Account</p>
        </div>
        <div class="flex gap-2">
          <img src="~assets/icons/i_7.svg" alt="" />
          <p>My booking</p>
        </div>
        <div class="flex gap-2 my-2">
          <img src="~assets/icons/i_8.svg" alt="" />
          <p>My bonuses</p>
        </div>
        <div class="flex gap-2">
          <img src="~assets/icons/i_9.svg" alt="" />
          <p>List of wishes</p>
        </div>
      </div>
      <div class="flex gap-2 mt-[100px]">
        <img src="~assets/icons/i_10.svg" alt="" />
        <p>Log out</p>
      </div>
    </div>
    <div class="max-w-[640px] w-full">
      <p class="text-[32px] font-medium mb-6">Profile</p>
      <div class="flex gap-4">
        <input
          class="w-full my-2 p-3 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          class="w-full my-2 p-3 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
          type="text"
          placeholder="Surname"
        />
      </div>
      <div class="flex gap-4">
        <input
          class="w-full my-2 p-3 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          placeholder="Number"
        />
        <input
          class="w-full my-2 p-3 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
          type="text"
          placeholder="Password"
        />
      </div>
      <button
            class="w-1/2 my-6 p-4 bg-[#F8F8F8] rounded-[8px] text-[#909090] hover:bg-[white] hover:text-[#909090] border-[#F8F8F8] border-solid border-[2px]"
            type="button"
          >
            Save changes
          </button>
    </div>
  </div>
  <div class=" mt-[200px] border-t-2 flex">
    <div class="max-w-[1300px] w-full mx-auto flex py-12">
        <div>
            <img class="w-[163px] h-[30px]" src="~assets/icons/logo_2.svg" alt="">
            <p class="font-medium text-[18px] my-2">8 800 070 05 40</p>
            <p class="text-[14px]">Пн-Пт 09:00 - 18:00</p>
            <p class="text-[14px]">Сб-Вс Выходной</p>
            <p class="font-medium my-2">Мы в соцсетях</p>
            <img src="~assets/icons/i_11.svg" alt="">
        </div>
        <div></div>
    </div>
    <div class="">
        <p class="text-[#34398B] font-medium">Информация</p>
        <p class="font-medium">Акции</p>
        <p class="font-medium">Новости</p>
    </div>
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
