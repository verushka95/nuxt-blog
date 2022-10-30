<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
        <div class="container">
            <h1 class="title">About my blog:</h1>
            <client-only>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci porro, sit reprehenderit cum optio beatae cupiditate unde illum laborum doloribus rem quod, voluptate ipsum saepe vero molestias ad in tempora?</p>
                <Intro title="Lorem, ipsum dolor sit" />
            </client-only>
            <p>Veniam quod rem dolore illum voluptas numquam hic doloremque est eos voluptates fuga, ex dicta minus, sunt enim adipisci quis modi nostrum suscipit dolorum alias natus at, cupiditate ullam. Sed?             </p>
            <img src="@/assets/img/about.jpg" alt="">
            <p>Impedit natus ex, laudantium velit quas tenetur cumque sint, eius, delectus a reprehenderit expedita accusantium quis dicta doloremque. Id voluptatibus fugiat ut accusamus quas minima quia eos consequuntur perspiciatis sunt. </p>
        </div>    
    </section>
  </div>
</template>

<script>
export default {
    head () {
    let title = 'About My SSR Blog!',
        descr = 'About My SSR Blog! With Nuxt.js',
        type = 'site'

    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: descr},
        { hid: 'og:description', name: 'og:description', content: descr},
        { hid: 'og:title', name: 'og:title', content: title},
        { hid: 'og:type', name: 'og:type', content: type},
      ]
    }
  },
}
</script>
<style lang="scss">
    .about {
        text-align: center;

        p {
            margin-bottom: 10px;
        }
    }
</style>