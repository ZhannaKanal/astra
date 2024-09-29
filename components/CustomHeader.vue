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
</template>

<script lang="ts">

export default {
  setup() {
    const dataStore = useDataStore();
    
    onMounted(async() =>{
      await dataStore.getCategories({pageSize: 1000, orderBy: ["name"] })
      
    })

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
