use se_restaurant;

INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `createAt`, `updateAt`) VALUES ('staff1','staff1','12345','0', NOW(), NOW());
INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `createAt`, `updateAt`) VALUES ('staff2','staff2','11245','0', NOW(), NOW());
INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `createAt`, `updateAt`) VALUES ('admin1','admin1','12345','1', NOW(), NOW());
INSERT INTO `user`(`username`, `password`, `cccd`, `role`, `createAt`, `updateAt`) VALUES ('admin2','admin2','12345','1', NOW(), NOW());

INSERT INTO `dish`(`id`, `name`, `price`, `info_detail`, `type`, `createAt`, `updateAt`, `image`) 
VALUES (1, 'milktea',10000,'ngon lam ne', 'thuc uong', NOW(), NOW(), '/public/img/milktea');
INSERT INTO `dish`(`id`, `name`, `price`, `info_detail`, `type`, `createAt`, `updateAt`, `image`) 
VALUES (2, 'banh kem',10000,'ngon lam neeee', 'do an', NOW(), NOW(), '/public/img/cake');
INSERT INTO `dish`(`id`, `name`, `price`, `info_detail`, `type`, `createAt`, `updateAt`, `image`) 
VALUES (3, 'milktea2',10000,'ngon lam nee', 'thuc uong', NOW(), NOW(), '/public/img/milktea');
INSERT INTO `dish`(`id`, `name`, `price`, `info_detail`, `type`, `createAt`, `updateAt`, `image`) 
VALUES (4, 'milktea3',10000,'ngon lam neeeee', 'thuc uong', NOW(), NOW(), '/public/img/milktea');