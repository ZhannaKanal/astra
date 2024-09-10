<template>
  <div class="bg-[#00000050] py-[150px] px-4">
    <div class="bg-[white] max-w-[530px] w-full mx-auto rounded-[16px]">
      <div>
        <img class="right" src="" alt="" />
        <div class="max-w-[370px] w-full mx-auto py-[50px]">
          <p class="text-center text-[32px] font-medium my-2">
            Very Your Account
          </p>
          <p class="text-center text-[16px] font-normal my-2">
            Введите код подтверждения, который мы отправили Вам на указанный
            номер
          </p>
          <div class="">
            <v-sheet color="surface">
              <v-otp-input
                v-model="otp"
                type="password"
                variant="solo"
                :length="4"
              ></v-otp-input>
            </v-sheet>
          </div>
          <nuxt-link to="profile"><p class="text-center my-3">Resend the code</p></nuxt-link>
          <v-btn
            class="my-4"
            color="#FF8A00"
            height="60"
            text="Verify"
            variant="flat"
            width="100%"
            rounded="lg"
          ></v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    otp: "",
  }),
  setup() {
    return {};
  },
});
</script>
