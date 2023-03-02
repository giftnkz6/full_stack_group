<template>
    <div class="footer">
      <h3>Sneaker Emporium</h3>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">About Sneaker Emporium</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  }
  </script>
  
  <style>
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #fff;
    padding: 20px;
    text-align: center;
}
  
footer a {
    color: #fff;
    justify-content: space-between;
}

ul{
    display: inline-flex;
    justify-content: space-between;
}

ul li {
    margin: 10px;
    list-style: none;
}

ul li a {
    text-decoration: none;
    
}
a:hover {
    color: palevioletred;
}
  </style>
  