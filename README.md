# Тестовое задание React разработчика

Компания: Intelogis ILS;

Соискатель: Саморуков Максим Львович;
e-mail: maxim.samorukov@gmail.com;
telegram: https://t.me/Maksim_Samorukov

## Тестовое задание

Требуется реализовать приложение по отображению маршрутов на карте.

Используя заданный набор маршрутов (таблица 1), реализовать экран, в котором слева будет таблица со списком маршрутов, а справа карта. При выборе в таблице строки с маршрутом, выбранная строка должна подсветиться, а на карте должны отобразиться точки маршрута в виде маркеров и полилиния (polyline) трека движения по точкам маршрута, полученная из сервиса построения треков по дорогам OSRM (или другой). При выборе маршрута в таблице, на карте происходит центрирование и масштабирование таким образом, что весь маршрут должен попасть в область видимости карты. Одновременно на карте может отображаться только один маршрут – выбранный.

Для отображения карты желательно использовать пакет Leaflet, для компонентов — AntDesign, для хранения стейта компонентов и данных обязательно использовать Redux (redux-toolkit), для реакции на события — Sagas. В качестве основы приложения можно использовать React Create App или Vite. Использовать только функциональные компоненты и преимущественно функциональное программирование. Распределять код по каталогам, исходя из принадлежности к функциям: components, selectors, reducers, sagas, HTTP-services, helpers, etc. Обязательно задействовать sagas для получения трека по точкам, а также обязательно задействовать любой HTTP-сервис для обращения к API построения треков. Предусмотреть обработку ошибок от HTTP-сервисов. CSS-стили допускается писать в препроцессоре SASS/LESS.

Решение требуется предоставить в виде исходного кода, готового для развертывания на веб-сервере (приложить файловый архив или ссылку на github, например). Приложение нужно писать чисто и аккуратно, используя известные паттерны, сразу с рефакторингом - так, будто вы пишите production-приложение.

Для получения полилиний (polylines) маршрута можно использовать API OSRM:

http://project-osrm.org/docs/v5.5.1/api/?language=cURL#route-service

### Список маршрутов

[
{
label: "Маршрут №1",
key: "route_1",
points: [
{
lat: 59.84660399,
lng: 30.29496392,
},
{
lat: 59.82934196,
lng: 30.42423701,
},
{
lat: 59.83567701,
lng: 30.38064206,
},
],
},
{
label: "Маршрут №2",
key: "route_2",
points: [
{
lat: 59.82934196,
lng: 30.42423701,
},
{
lat: 59.82761295,
lng: 30.41705607,
},
{
lat: 59.84660399,
lng: 30.29496392,
},
],
},
{
label: "Маршрут №3",
key: "route_3",
points: [
{
lat: 59.83567701,
lng: 30.38064206,
},
{
lat: 59.84660399,
lng: 30.29496392,
},
{
lat: 59.82761295,
lng: 30.41705607,
},
],
},
];
