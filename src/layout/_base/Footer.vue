<template>
  <global-footer :copyright='footer.copyright'></global-footer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'footers',
  computed: mapGetters({
    footer: 'footer'
  })
}
</script>
