SET NAMES UTF8;
DROP DATABASE IF EXISTS steam;
CREATE DATABASE steam CHARSET=UTF8;
USE steam;
CREATE TABLE steam_ulist(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16) NOT NULL,
    upwd VARCHAR(32) NOT NULL,
    email VARCHAR(64) NOT NULL DEFAULT '',
    phone VARCHAR(16) NOT NULL,
    avater VARCHAR(128) DEFAULT 'img/user_avater/defalut_avater.jpg' NOT NULL,
    gender INT(1) DEFAULT 0
);
INSERT INTO steam_ulist(uid,uname,upwd,email,phone,gender)VALUES
(null,"sst","123456","sst40118764@qq.com","18969979997",1);
CREATE TABLE steam_banner(
    bid INT PRIMARY KEY,
    game VARCHAR(128) NOT NULL,
    lg VARCHAR(128) NOT NUll,
    md1 VARCHAR(128) NOT NULL,
    md2 VARCHAR(128) NOT NULL,
    md3 VARCHAR(128) NOT NULL,
    md4 VARCHAR(128) NOT NULL,
    title VARCHAR(32) NOT NULL,
    price INT(8) NOT NULl,
    tag1 VARCHAR(16),
    tag2 VARCHAR(16),
    tag3 VARCHAR(16),
    linux INT(1),
    mac INT(1),
    win INT(1)
);
INSERT INTO steam_banner VALUES(1,"Assassin's Creed® Origins",
"img/body/banner/lg/Assassin's%20Creed_Origins_616x353.jpg",
"img/body/banner/md/Assassin's%20CreedOrigins_1_600x338.jpg",
"img/body/banner/md/Assassin's%20CreedOrigins_2_600x338.jpg",
"img/body/banner/md/Assassin's%20CreedOrigins_3_600x338.jpg",
"img/body/banner/md/Assassin's%20CreedOrigins_4_600x338.jpg",
"现已推出",248,"热销商品",null,null,0,0,1);
INSERT INTO steam_banner VALUES(2,"Armello",
"img/body/banner/lg/armello_616x353.jpg",
"img/body/banner/md/armello_1_600x338.jpg",
"img/body/banner/md/armello_2_600x338.jpg",
"img/body/banner/md/armello_3_600x338.jpg",
"img/body/banner/md/armello_4_600x338.jpg",
"为您推荐",58,"策略","多人","回合制",1,1,1);
INSERT INTO steam_banner VALUES(3,"Total War: WARHAMMER II",
"img/body/banner/lg/Total%20War%20WARHAMMER%20II_616x353.jpg",
"img/body/banner/md/Total%20War%20WARHAMMER%20II_1_600x338.jpg",
"img/body/banner/md/Total%20War%20WARHAMMER%20II_2_600x338.jpg",
"img/body/banner/md/Total%20War%20WARHAMMER%20II_3_600x338.jpg",
"img/body/banner/md/Total%20War%20WARHAMMER%20II_4_600x338.jpg",
"为您推荐",268,"策略","热销商品","回合制",0,0,1);
INSERT INTO steam_banner VALUES(4,"Grand Theft Auto V",
"img/body/banner/lg/Grand%20Theft%20Auto%20V_616x353.jpg",
"img/body/banner/md/Grand%20Theft%20Auto%20V_1_600x338.jpg",
"img/body/banner/md/Grand%20Theft%20Auto%20V_2_600x338.jpg",
"img/body/banner/md/Grand%20Theft%20Auto%20V_3_600x338.jpg",
"img/body/banner/md/Grand%20Theft%20Auto%20V_4_600x338.jpg",
"现已推出",189,"热销商品",null,null,0,0,1);
INSERT INTO steam_banner VALUES(5,"Watch_Dogs® 2",
"img/body/banner/lg/Watch_Dogs®%202_616x353.jpg",
"img/body/banner/md/Watch_Dogs®%202_1_600x338.jpg",
"img/body/banner/md/Watch_Dogs®%202_2_600x338.jpg",
"img/body/banner/md/Watch_Dogs®%202_3_600x338.jpg",
"img/body/banner/md/Watch_Dogs®%202_4_600x338.jpg",
"现已推出",84,"热销商品",null,null,0,0,1);
INSERT INTO steam_banner VALUES(6,"Little Nightmares",
"img/body/banner/lg/Little%20Nightmares_616x353.jpg",
"img/body/banner/md/Little%20Nightmares_1_600x338.jpg",
"img/body/banner/md/Little%20Nightmares_2_600x338.jpg",
"img/body/banner/md/Little%20Nightmares_3_600x338.jpg",
"img/body/banner/md/Little%20Nightmares_4_600x338.jpg",
"现已推出",88,"热销商品",null,null,0,0,1);
INSERT INTO steam_banner VALUES(7,"DRAGON BALL FighterZ",
"img/body/banner/lg/DRAGON%20BALL%20FighterZ_616x353.jpg",
"img/body/banner/md/DRAGON%20BALL%20FighterZ_1_600x338.jpg",
"img/body/banner/md/DRAGON%20BALL%20FighterZ_2_600x338.jpg",
"img/body/banner/md/DRAGON%20BALL%20FighterZ_3_600x338.jpg",
"img/body/banner/md/DRAGON%20BALL%20FighterZ_4_600x338.jpg",
"立即预购",268,"热销商品",null,null,0,0,1);
