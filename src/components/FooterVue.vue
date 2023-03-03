<template>
  <footer>
      <p>Copyright &copy; 2023</p>
      <ul>
          <li><a id="linkedin" href="https://www.linkedin.com/in/gift-mahlangu-223262180/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
          <li><a id="facebook" href="https://www.facebook.com/gift.mahlangu.923" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
          <li><a id="instagram" href="https://www.instagram.com/gift_nkz/" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
          <li><a id="twitter" href="https://twitter.com/GiftGiftnkz6" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
      </ul>
  </footer>
</template>
<script>
export default {
  name: 'FooterVue'
}
</script>
<style>
footer{
  background-color: yellow;
  position: absolute;
  width: 100%;
  background-color:#FFB6C1;
}
footer p{
  font-weight: bold;
}
footer ul li{
  display: inline;
  margin: 1%;
  /* margin: auto; */
}
footer .fa-brands{
  font-size: 25px;
}
footer ul li #linkedin{
  color: blue;
}
footer ul li #facebook{
  color: blue;
}
footer ul li #instagram{
  color: orangered;
}
footer ul li #twitter{
  color:aqua;
}
</style>