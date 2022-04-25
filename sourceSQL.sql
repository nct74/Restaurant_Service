use se_restaurant;

INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `init`, `createAt`, `updateAt`) VALUES ('staff1','staff1','12345','1', '0', NOW(), NOW());
INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `init`, `createAt`, `updateAt`) VALUES ('staff2','staff2','11245','1', '0', NOW(), NOW());
INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `init`, `createAt`, `updateAt`) VALUES ('admin1','admin1','12345','0', '0', NOW(), NOW());
INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `init`, `createAt`, `updateAt`) VALUES ('admin2','admin2','12345','0', '0', NOW(), NOW());

INSERT INTO `dish` (`id`, `name`, `price`, `info_detail`, `image`, `type`, `createAt`, `updateAt`) VALUES
(9, 'Mochi', 33000, 'This is the best cake of our restaurant!!', 'upload/Mochi25000-1649673708294.jpg', 'Cake', '2022-04-11 16:55:48.985935', '2022-04-11 17:41:48.000000'),
(10, 'Tiramisu', 29000, 'Try it', 'upload/Tiramisu-69000-1649673773806.jpg', 'Cake', '2022-04-11 16:56:13.780015', '2022-04-11 17:42:53.000000'),
(11, 'Black Sugar Milk', 32000, 'Try it now', 'upload/BlackSugarBobaMilkTea-32000-1649673782319.jpg', 'Drink', '2022-04-11 17:02:52.249342', '2022-04-11 17:43:02.000000'),
(12, 'Traditional Milk Teaa', 42000, 'This is the best drink of our restaurant!!', 'upload/TraditionalMilkTea-32000-1649673786912.jpg', 'Drink', '2022-04-11 17:39:57.226574', '2022-04-11 17:43:06.000000'),
(13, 'Dessert 1', 33232, 'Best seller', 'upload/Novelicious on Twitter-1650284615162.jpg', 'Dessert', '2022-04-18 19:23:35.187089', '2022-04-18 19:23:35.187089');

INSERT INTO `order`(`id`, `note`, `total`, `orderStatus`, `time`, `createAt`, `updateAt`) VALUES (1,'Ahihi', 60000, false, now(), now(), now());
INSERT INTO `order`(`id`, `note`, `total`, `orderStatus`, `time`, `createAt`, `updateAt`) VALUES (2,'Do Ngoc', 6760000, true, now(), now(), now());
INSERT INTO `order`(`id`, `note`, `total`, `orderStatus`, `time`, `createAt`, `updateAt`) VALUES (3,'NCT', 90000, false, now(), now(), now());

INSERT INTO `contain`(`orderId`, `dishId`, `quantity`) VALUES (1,9,3);
INSERT INTO `contain`(`orderId`, `dishId`, `quantity`) VALUES (1,10,2);
INSERT INTO `contain`(`orderId`, `dishId`, `quantity`) VALUES (1,11,2);
INSERT INTO `contain`(`orderId`, `dishId`, `quantity`) VALUES (2,11,2);
INSERT INTO `contain`(`orderId`, `dishId`, `quantity`) VALUES (3,9,2);

