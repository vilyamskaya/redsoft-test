<template>
    <header class="header">
        <div class="header__container">
            <ul class="header__nav">
                <li class="header__nav-logo header__nav-link">
                    <img src="../../public/img/logo-museum1.svg" alt="logo">
                </li>
                <li class="header__nav-link">
                    <router-link to="/">Каталог</router-link>
                </li>
                <li class="header__nav-link">
                    <router-link to="/delivery">Доставка</router-link>
                </li>
                <li class="header__nav-link">
                    <router-link to="/pay">Оплата</router-link>
                </li>
                <li class="header__nav-link">
                    <router-link to="/contacts">Контакты</router-link>
                </li>
                <li class="header__nav-link">
                    <router-link to="/about">О галерее</router-link>
                </li>
            </ul>
            <div class="header__search">
                <input class="header__search-input" type="text" placeholder="Поиск по названию картины">
                <button class="header__search-btn" type="submit" name="search">Найти</button>
            </div>
        </div>
    </header>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    @import '../assets/styles/_variables';
    @import '../assets/styles/_mixins';

    .header {
        display: flex;
        height: 9.6rem;
        justify-content: center;
        background-color: $color-background;
        border-bottom: 1px solid $color-border;

        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 125rem;
        }

        &__nav {
            display: flex;
            align-items: center;
            list-style: none;
            padding: 0;

            &-link {
                margin: 2.4rem;
            }
        }

        &__nav-logo {
            margin-left: 1.6rem;
        }

        &__search-input {
            @include placeholder;
            width: 29.4rem;
            height: 4.8rem;
            border: 1px solid $color-border;
            padding: 0 1.6rem;
            background-color: $color-background;
            font-family: 'Merriweather', serif;

            &:active,
            &:focus {
                border-color: $color-border-active;
            }
        }

        &__search-btn {
            @include normal-btn;
            margin-right: 1.6rem;
        }
    }
</style>