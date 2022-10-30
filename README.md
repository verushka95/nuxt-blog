# Blog на Nuxt.JS

## Описание

Используется Vue.js, Nuxt.js, база данных сделана в Firebase.
Взаимодействие с ней по REST API.

### Главная ( Blog)

Выводятся существующие записи и контактная форма.
При нажатии на превью записи, осуществляется переход на эту запись. 
Письма с контактной формы отправляются на почту, скрипт отправки содержится по пути static/mail.php

### Страница записи

Выводится вся информация по текущей записи: изображение, название, краткое и полное описание.
Ниже выводятся комментарии к записи, и так же есть возможность любому пользователю отправить комментарии. (комментарий будет опубликован только после того, как админ поменяет статус этого комментария)

### Страница About

Содержится контент.

### Админка ( /admin/ )

Зайти может только определенный пользователь с паролем, было настроено в firebase.
Если авторизация прошла успешно, то переходим в админку, иначе остаемся на той же странице.
Если пользователь успешно вошел, то он может:
1. Изменять всю информацию об уже существующих записях ( при нажатии на превью записи, происходит переход на страницу редактирования. )
2. Есть возможность добавлять новые записи. ( при нажатии на кнопку New Post )
3. Можно просмотреть все комментарии и изменить их статус ( hidden/ publish ) или удалить.
4. И так же возможность выйти. ( log out )

Чтобы пользователя постоянно не выкидывало из админки, было сделано хранение данных на стороне клиента с помощью LocalStorage и на стороне сервера и режима dev с помощью Cookie.




## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
