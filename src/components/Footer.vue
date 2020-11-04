<template>
    <footer class="footer">
        <div class="footer__container">
            <ul class="footer__nav">
                <li class="footer__nav-logo footer__nav-link">
                    <img src="../../public/img/logo-museum2.svg" alt="logo">
                </li>
                <li class="footer__nav-link">
                    <router-link to="/">Каталог</router-link>
                </li>
                <li class="footer__nav-link">
                    <router-link to="/shipping">Доставка</router-link>
                </li>
                <li class="footer__nav-link">
                    <router-link to="/pay">Оплата</router-link>
                </li>
                <li class="footer__nav-link">
                    <router-link to="/contacts">Контакты</router-link>
                </li>
                <li class="footer__nav-link">
                    <router-link to="/about">О галерее</router-link>
                </li>
            </ul>
            <div class="footer__contacts">
                <span class="footer__contacts-tel">+7 (495) 555-55-55</span>
                <span class="footer__contacts-address">г. Москва, ул. Расплетина, 24</span>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    @import '../assets/styles/_variables';

    .footer {
        display: flex;
        height: 9.6rem;
        justify-content: center;
        background-color: $color-footer;

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

        &__contacts {
            display: flex;
            justify-content: space-between;
            min-width: 45rem;
            padding: 0 1.6rem;

            &-tel {
                position: relative;
                line-height: (1.5 * $size-xs);

                &:before {
                    content: '';
                    background: url("../../public/img/tel.svg") 0 0 no-repeat;
                    width: 1.4rem;
                    height: 1.4rem;
                    position: absolute;
                    top: (2.1rem - 1.4) / 2;
                    left: -2.5rem;
                }
            }

            &-address {
                position: relative;
                line-height: (1.5 * $size-xs);

                &:before {
                    content: '';
                    background: url("../../public/img/address.svg") 0 0 no-repeat;
                    width: 1.4rem;
                    height: 1.4rem;
                    position: absolute;
                    top: (2.1rem - 1.4) / 2;
                    left: -2.5rem;
                }
            }
        }
    }
</style>