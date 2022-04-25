
INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `init`, `createAt`, `updateAt`) VALUES ('staff1','staff1','12345','1', '0', NOW(), NOW());
INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `init`, `createAt`, `updateAt`) VALUES ('staff2','staff2','11245','1', '0', NOW(), NOW());
INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `init`, `createAt`, `updateAt`) VALUES ('admin1','admin1','12345','0', '0', NOW(), NOW());
INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `init`, `createAt`, `updateAt`) VALUES ('admin2','admin2','12345','0', '0', NOW(), NOW());

INSERT INTO `dish` (`id`, `name`, `price`, `info_detail`, `image`, `type`, `createAt`, `updateAt`) VALUES
(1, 'milktea', 10000, 'ngon lam ne', '/img/milktea.png', 'thuc uong', '2022-04-11 15:12:47.000000', '2022-04-12 01:16:06.218112'),
(2, 'banh kem', 10000, 'ngon lam neeee', '/img/cake.png', 'do an', '2022-04-11 15:12:47.000000', '2022-04-12 01:16:10.301206'),
(3, 'milktea2', 10000, 'ngon lam nee', '/img/milktea.png', 'thuc uong', '2022-04-11 15:12:47.000000', '2022-04-12 21:06:53.627336'),
(4, 'milktea3', 10000, 'ngon lam neeeee', '/img/milktea.png', 'thuc uong', '2022-04-11 15:12:47.000000', '2022-04-12 21:06:48.189225'),
(5, 'hambeger1', 10000, 'ngon lam neeeee', '/img/milktea.png', 'hambeger1', '2022-04-12 01:40:34.000000', '2022-04-12 01:41:21.491306'),
(6, 'hambeger2', 10000, 'ngon lam neeeee', '/img/milktea.png', 'hambeger2', '2022-04-12 01:40:34.000000', '2022-04-12 01:41:27.062254'),
(7, 'hambeger3', 10000, 'ngon lam neeeee', '/img/milktea.png', 'hambeger3', '2022-04-12 01:40:34.000000', '2022-04-12 01:41:31.635153');
