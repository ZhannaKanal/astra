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
      <div class="my-6 px-2">
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
          <nuxt-link to="bonus"><p>My bonuses</p></nuxt-link>
        </div>
        <div class="flex gap-2">
          <img src="~assets/icons/i_9.svg" alt="" />
          <p>List of wishes</p>
        </div>
      </div>
      <div class="flex gap-2 mt-[100px] px-2">
        <img src="~assets/icons/i_10.svg" alt="" />
        <p>Log out</p>
      </div>
    </div>
    <div v-if="profile" class="max-w-[640px] w-full">
      <p class="text-[32px] font-medium mb-6">Profile</p>
      <div class="flex justify-between gap-4">
        <input
          v-model="profile.lastName"
          class="w-full my-2 p-3 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          v-model="profile.firstName"
          class="w-full my-2 p-3 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
          type="text"
          placeholder="Surname"
        />
      </div>
      <div class="flex justify-between gap-4">
        <input
          v-model="profile.phoneNumber"
          class="w-50 my-2 p-3 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="text"
          placeholder="Number"
        />
        <!-- <input
          class="w-full my-2 p-3 rounded-[14px] border-[#EBEBEB] focus:text-[#FF8A00] focus:border-[#FF8A00] border-solid border-[2px] focus:outline-none"
          type="text"
          placeholder="Password"
        /> -->
      </div>
      <button
        class="w-[312px] mt-10 p-4 bg-[#F8F8F8] rounded-[8px] text-[#909090] hover:bg-[white] hover:text-[#909090] border-[#F8F8F8] border-solid border-[2px]"
        type="button"
      >
        Save changes
      </button>
    </div>
  </div>
  <div class="mt-[150px] border-t-2 border-solid border-[#D7D7D7]">
    <div
      class="max-w-[1300px] w-full mx-auto block md:flex justify-between font-medium text-[16px] border-b-2 border-solid border-[#D7D7D7] py-12"
    >
      <div class="">
        <img src="~assets/icons/logo_3.svg" alt="" />
        <p class="my-3">8 800 070 05 40</p>
        <div class="font-normal">
          <p>Пн-Пт 09:00 - 18:00</p>
          <p>Сб-Вс Выходной</p>
        </div>
        <p class="my-3">Мы в соцсетях</p>
        <img src="~assets/icons/i_11.svg" alt="" />
      </div>
      <div>
        <p class="text-[#34398B]">Информация</p>
        <div class="mt-3 px-5">
          <p>Акции</p>
          <p class="my-3">Новости</p>
        </div>
      </div>
      <div>
        <p class="text-[#34398B]">Помощь</p>
        <div class="mt-3 px-5">
          <p>Конфиденциальность информации</p>
          <p class="my-3">Публичная оферта</p>
        </div>
      </div>
      <div class="bg-[#F8F8F8] rounded-[16px] p-12">
        <p class="text-[18px] text-[#34398B] text-center">
          Мобильное приложение
        </p>
        <div
          class="bg-[#34398B] rounded-[14px] text-[white] flex gap-3 my-4 p-2 mx-[80px]"
        >
          <img src="~assets/icons/i_12.svg" alt="" />
          <div class="">
            <p class="text-[14px]">Доступно в</p>
            <img src="~assets/icons/i_14.svg" alt="" />
          </div>
        </div>
        <div
          class="bg-[#34398B] rounded-[14px] text-[white] flex gap- p-2 mx-[80px]"
        >
          <img src="~assets/icons/i_13.svg" alt="" />
          <div>
            <p class="text-[14px]">Доступно в</p>
            <img src="~assets/icons/i_15.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-[1300px] w-full mx-auto">
      <p class="text-[14px] text-[#9D9D9D] text-center py-6">
        © АСТРА-ЛОМБАРД — 2023
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import { type ProfileData } from "@/api/controllers/types";

export default {
  setup() {
    const dataStore = useDataStore();

    const profile = ref<ProfileData>({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      // Add any other fields your API returns
    });

    onMounted(async () => {
      const response = await dataStore.getProfileData();
      if (response != undefined) {
        profile.value = response;
      }
    });

    return { profile };
  },
};
</script>

<style lang="scss" scoped></style>
<!-- https://api.store.astra-lombard.kz/api/personal/profile -->
