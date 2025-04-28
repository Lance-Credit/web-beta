<template>
  <div>

  </div>
</template>

<script setup lang="ts">

  definePageMeta({
      middleware: 'auth',
      layout: 'dashboard'
  });

  onMounted(()=>{
      const route = useRoute();

      if(route.query.action && route.query.action == 'directdebit') {
          navigateTo('/loans?continue_loan_request=true');
      } else if(route.query.purpose && route.query.purpose == 'wallet_funding') {
        navigateTo('/wallet');
      } else if (route.query.purpose && route.query.purpose == 'loan_repayment') {
        navigateTo('/loans?continue_repayment=true');
      } else {
        navigateTo('/dashboard');
      }

  });
  
</script>