<template>
  <content-wrapper>
    <h1 class="page-heading">Releases</h1>
    <div class="row">
      <album 
        title="Set Fire to Me (Happy Xmas)"
        spotify="https://open.spotify.com/album/4jX3jUnZJ10sapfe1Dexri?si=nydoeF6kSRWnlvDAdnYZaA"
        apple="https://music.apple.com/us/album/set-fire-to-me-happy-xmas-single/1488491310"
        prime="https://music.amazon.co.uk/albums/B081TLQ9MX?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB"
        artwork="/fire.jpg"
      />
      <album 
        title="Rain At Your Funeral"
        spotify="https://open.spotify.com/album/687ERXvVvhZc3h1HG11G0f?si=C1l-Pt0QTCykKaDmnaDMZg"
        apple="https://music.apple.com/us/album/rain-at-your-funeral-ep/1487158460"
        prime="https://music.amazon.co.uk/albums/B07ZZHWWJZ?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB"
        artwork="/rain.jpg"
        />
      <album
        title="Frank Grimes And The Disasters"
        spotify="https://open.spotify.com/album/6FubSR89DlpdkX1YshaJyO?si=aReG30xdQ-CIZW8QujAP1w"
        apple="https://music.apple.com/us/album/frank-grimes-and-the-disasters-ep/1200534864"
        prime="https://music.amazon.co.uk/albums/B01MTEYEXT?marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB"
        artwork="/ep1.jpg"
      />
    </div>
  </content-wrapper>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: 'Releases / Frank Grimes & The Disasters',
      meta: [
          { property: "og:site_name", content: "Frank Grimes & The Disasters" },
          { hid: "og:type", property: "og:type", content: "website" },
          {
            hid: "og:url",
            property: "og:url",
            content: "https://www.frankgrimesandthedisasters.co.uk/releases",
          },
          {
            hid: "og:title",
            property: "og:title",
            content: "Frank Grimes & The Disasters releases",
          },
          {
            hid: "og:description",
            property: "og:description",
            content: "Punk Rock from Barnsley, South Yorkshire.",
          },
          {
            hid: "og:image",
            property: "og:image",
            content: "/og.jpg",
          },
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "630" },
      ]
    }
  }
})
</script>