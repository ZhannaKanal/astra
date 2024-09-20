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
  <div class="max-w-[1300px] w-full mx-auto grid grid-cols-5 my-12 gap-2">
    <div
      v-for="user in users"
      :key="user.id"
      class="flex items-center bg-[#F8F8F8] rounded-[14px] gap-4 p-1"
    >
      <img src="~assets/images/i_1.svg" alt="" />
      <nuxt-link to="bonus">
        <p class="text-[14px]">{{ user.name }}</p>
      </nuxt-link>
    </div>
  </div>
  <div class="relative flex justify-end">
    <img
      class="absolute z-[-1] w-full py-12"
      src="~assets/images/i_2.svg"
      alt=""
    />
    <p class="w-[500px] my-[120px] uppercase text-[#FFFFFF] text-[70px]">
      Jewelry Market
    </p>
  </div>
  <div class="max-w-[1300px] w-full mx-auto grid grid-cols-3 gap-5 my-12">
    <div
      class="bg-[#E31E25] text-[white] rounded-[10px] p-4 flex items-center justify-center gap-3"
    >
      <img src="~assets/icons/i_17.svg" alt="" />
      <p class="text-center text-[24px]">Sales</p>
    </div>
    <div
      class="bg-[#097944] text-[white] rounded-[10px] p-4 flex items-center justify-center gap-3"
    >
      <img src="~assets/icons/i_17.svg" alt="" />
      <p class="text-center text-[24px]">Sales</p>
    </div>
    <div
      class="bg-[#34398B] text-[white] rounded-[10px] p-4 flex items-center justify-center gap-3"
    >
      <img src="~assets/icons/i_17.svg" alt="" />
      <p class="text-center text-[24px]">Sales</p>
    </div>
  </div>
  <div class="bg-[#F8CBCD]">
    <div class="max-w-[1300px] w-full mx-auto py-12">
      <p class="text-[50px] text-white font-medium py-12">Sales</p>
      <div>
        <v-sheet class="mx-auto bg-[#F8CBCD]" elevation="4" max-width="1300">
          <v-slide-group
            v-model="model"
            class="pa-4"
            selected-class="bg-success"
            show-arrows
          >
            <v-slide-group-item
              v-for="n in 8"
              :key="n"
              v-slot="{ isSelected, toggle, selectedClass }"
            >
              <v-card
                :class="['ma-4', selectedClass]"
                color="white-lighten-1"
                height=""
                width="260"
                @click="toggle"
              >
                <div class="max-w-[300px] w-full mx-auto">
                  <div class="flex gap-2 p-2">
                    <img
                      class="bg-[red] rounded-[8px] p-1 w-[30px] h-[30px]"
                      src="~assets/icons/i_17.svg"
                      alt=""
                    />
                    <img
                      class="bg-[red] rounded-[8px] p-1 w-[30px] h-[30px]"
                      src="~assets/icons/i_17.svg"
                      alt=""
                    />
                    <img
                      class="bg-[red] rounded-[8px] p-1 w-[30px] h-[30px]"
                      src="~assets/icons/i_17.svg"
                      alt=""
                    />
                  </div>
                  <img class="mx-5" src="~assets/images/i_3.svg" alt="" />
                  <p class="p-2">
                    Gold ring <br />
                    in a combined color with <br />
                    chrysolites, cubic zirconia and ro...
                  </p>
                  <div class="flex p-2 gap-3 items-center">
                    <p class="text-[#34398B] font-medium text-[24px]">
                      5,123.21 ₸
                    </p>
                    <p class="text-[#909090]">10,123.21 ₸</p>
                  </div>
                  <div class="flex gap-4 p-2 my-4">
                    <button
                      class="max-w-[180px] w-full bg-[#FFEEDB] rounded-[12px] text-[#FF8A00] text-[14px] font-medium text-center py-2"
                      type="submit"
                    >
                      Buy
                    </button>
                    <img src="~assets/icons/i_18.svg" alt="h" />
                  </div>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
  </div>
  <div class="bg-[#C5E7D4] my-4">
    <div class="max-w-[1300px] w-full mx-auto py-12">
      <p class="text-[50px] text-white font-medium py-12">News</p>
      <div>
        <v-sheet class="mx-auto bg-[#F8CBCD]" elevation="4" max-width="1300">
          <v-slide-group
            v-model="model"
            class="pa-4"
            selected-class="bg-success"
            show-arrows
          >
            <v-slide-group-item
              v-for="n in 8"
              :key="n"
              v-slot="{ isSelected, toggle, selectedClass }"
            >
              <v-card
                :class="['ma-4', selectedClass]"
                color="white-lighten-1"
                height=""
                width="260"
                @click="toggle"
              >
                <div class="max-w-[300px] w-full mx-auto">
                  <div class="flex gap-2 p-2">
                    <img
                      class="bg-[red] rounded-[8px] p-1 w-[30px] h-[30px]"
                      src="~assets/icons/i_17.svg"
                      alt=""
                    />
                    <img
                      class="bg-[red] rounded-[8px] p-1 w-[30px] h-[30px]"
                      src="~assets/icons/i_17.svg"
                      alt=""
                    />
                    <img
                      class="bg-[red] rounded-[8px] p-1 w-[30px] h-[30px]"
                      src="~assets/icons/i_17.svg"
                      alt=""
                    />
                  </div>
                  <img class="mx-5" src="~assets/images/i_3.svg" alt="" />
                  <p class="p-2">
                    Gold ring <br />
                    in a combined color with <br />
                    chrysolites, cubic zirconia and ro...
                  </p>
                  <div class="flex p-2 gap-3 items-center">
                    <p class="text-[#34398B] font-medium text-[24px]">
                      5,123.21 ₸
                    </p>
                    <p class="text-[#909090]">10,123.21 ₸</p>
                  </div>
                  <div class="flex gap-4 p-2 my-4">
                    <button
                      class="max-w-[180px] w-full bg-[#FFEEDB] rounded-[12px] text-[#FF8A00] text-[14px] font-medium text-center py-2"
                      type="submit"
                    >
                      Buy
                    </button>
                    <img src="~assets/icons/i_18.svg" alt="h" />
                  </div>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
  </div>
  <div class="bg-[#D0D1E4] my-4">
    <div class="max-w-[1300px] w-full mx-auto py-12">
      <p class="text-[50px] text-white font-medium py-12">News</p>
      <div>
        <v-sheet class="mx-auto bg-[#F8CBCD]" elevation="4" max-width="1300">
          <v-slide-group
            v-model="model"
            class="pa-4"
            selected-class="bg-success"
            show-arrows
          >
            <v-slide-group-item
              v-for="n in 8"
              :key="n"
              v-slot="{ isSelected, toggle, selectedClass }"
            >
              <v-card
                :class="['ma-4', selectedClass]"
                color="white-lighten-1"
                height=""
                width="260"
                @click="toggle"
              >
                <div class="max-w-[300px] w-full mx-auto">
                  <div class="flex gap-2 p-2">
                    <img
                      class="bg-[red] rounded-[8px] p-1 w-[30px] h-[30px]"
                      src="~assets/icons/i_17.svg"
                      alt=""
                    />
                    <img
                      class="bg-[red] rounded-[8px] p-1 w-[30px] h-[30px]"
                      src="~assets/icons/i_17.svg"
                      alt=""
                    />
                    <img
                      class="bg-[red] rounded-[8px] p-1 w-[30px] h-[30px]"
                      src="~assets/icons/i_17.svg"
                      alt=""
                    />
                  </div>
                  <img class="mx-5" src="~assets/images/i_3.svg" alt="" />
                  <p class="p-2">
                    Gold ring <br />
                    in a combined color with <br />
                    chrysolites, cubic zirconia and ro...
                  </p>
                  <div class="flex p-2 gap-3 items-center">
                    <p class="text-[#34398B] font-medium text-[24px]">
                      5,123.21 ₸
                    </p>
                    <p class="text-[#909090]">10,123.21 ₸</p>
                  </div>
                  <div class="flex gap-4 p-2 my-4">
                    <button
                      class="max-w-[180px] w-full bg-[#FFEEDB] rounded-[12px] text-[#FF8A00] text-[14px] font-medium text-center py-2"
                      type="submit"
                    >
                      Buy
                    </button>
                    <img src="~assets/icons/i_18.svg" alt="h" />
                  </div>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </div>
  </div>
  <div class="flex justify-between max-w-[1300px] w-full mx-auto my-[100px]">
    <div class="rounded-[16px]">
      <img src="~assets/images/i_4.svg" alt="" />
    </div>
    <div
      class="bg-[#E8F5FF] rounded-[16px] w-50 flex justify-center items-center"
    >
      <div class="">
        <div class="flex gap-2 items-center">
          <img src="~assets/icons/i_19.svg" alt="" />
          <p class="text-[#34398B] font-medium">astra_lomb</p>
        </div>
        <p class="text-[56px] font-medium text-center">
          Новости <br />
          и скидки
        </p>
        <p>Lets go</p>
      </div>
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

<script>
export default {
  setup() {
    return {
      users: [
        { id: 1, url: "~/assets/images/i_1.svg", name: "Ring" },
        { id: 2, url: "~/assets/images/i_1.svg", name: "Ring" },
        { id: 3, url: "~/assets/images/i_1.svg", name: "Ring" },
        { id: 4, url: "~/assets/images/i_1.svg", name: "Ring" },
        { id: 5, url: "~/assets/images/i_1.svg", name: "Ring" },
        { id: 6, url: "~/assets/images/i_1.svg", name: "Ring" },
        { id: 7, url: "~/assets/images/i_1.svg", name: "Ring" },
        { id: 8, url: "~/assets/images/i_1.svg", name: "Ring" },
        { id: 9, url: "~/assets/images/i_1.svg", name: "Ring" },
        { id: 10, url: "~/assets/images/i_1.svg", name: "Ring" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
