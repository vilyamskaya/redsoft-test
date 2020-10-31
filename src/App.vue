<template>
    <div class="wrap">
        <header>
            <ul>
                <li>
                    <img src="../public/img/logo-museum1.svg" alt="logo">
                </li>
                <li>
                    <router-link to="/">Каталог</router-link>
                </li>
                <li>
                    <router-link to="/delivery">Доставка</router-link>
                </li>
                <li>
                    <router-link to="/pay">Оплата</router-link>
                </li>
                <li>
                    <router-link to="/contacts">Контакты</router-link>
                </li>
                <li>
                    <router-link to="/about">О галерее</router-link>
                </li>
            </ul>
            <div class="search">
                <input type="text" placeholder="Поиск по названию картины">
                <button type="submit" name="search">Найти</button>
            </div>
        </header>
        <router-view></router-view>
        <footer>
            <ul>
                <li>
                    <img src="../public/img/logo-museum2.svg" alt="logo">
                </li>
                <li>
                    <router-link to="/">Каталог</router-link>
                </li>
                <li>
                    <router-link to="/shipping">Доставка</router-link>
                </li>
                <li>
                    <router-link to="/pay">Оплата</router-link>
                </li>
                <li>
                    <router-link to="/contacts">Контакты</router-link>
                </li>
                <li>
                    <router-link to="/about">О галерее</router-link>
                </li>
            </ul>
            <div class="contacts">
                <div class="tel">
                    <img src="../public/img/tel.svg" alt="telephone number">
                    <span>+7 (495) 555-55-55</span>
                </div>
                <div class="address">
                    <img src="../public/img/address.svg" alt="address">
                    <span>г. Москва, ул. Расплетина, 24</span>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

    export default {
        components: {

        }
    }
</script>

<style lang="scss">

</style>
