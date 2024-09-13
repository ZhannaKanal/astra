<template>
  <div class="bg-[#00000050] py-[150px] px-4">
    <div class="bg-[white] max-w-[530px] w-full mx-auto rounded-[16px]">
      <div>
        <img class="right" src="" alt="" />
        <div class="max-w-[370px] w-full mx-auto py-[50px]">
          <!-- <input type="text" v-model="lastName"> -->
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
                type="number"
                variant="solo"
                :length="4"
              ></v-otp-input>
            </v-sheet>
          </div>
          <nuxt-link to="profile"
            ><p class="text-center my-3">Resend the code</p></nuxt-link
          >
          <v-btn
            @click="validateOtp"
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
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();

    // Get phoneNumber from query parameters
    const otp = ref<string>("1234");
    // const lastName = ref<string>("");
    const phoneNumber = route.query.phoneNumber as string;
     console.log(route);


    const validateOtp = async (
      otp: string,
      phoneNumber: string
    ) => {
      try {
        // const response = await axios.post(
        //   "https://api.store.astra-lombard.kz/api/users/confirm-registration",
        //   {
        //     phoneNumber,
        //     code: otp,
        //   }
        // );
        navigateTo({name:"profile"})
      } catch (error) {
        console.error("Error validating OTP:", error);
        
      }
    };

    watch(otp, async (newOtp) => {
      if (phoneNumber && phoneNumber.length == 11) {
        if (newOtp.length == 4) {
          await validateOtp(newOtp, phoneNumber);
        }
      } else {
        console.error("Error! Phone number is not valid.");
      }
    },
    // {"immediate":true
    // }
  );

    return { phoneNumber, otp, validateOtp };
  },
});
</script>

<!-- https://api.store.astra-lombard.kz/api/personal/profile -->