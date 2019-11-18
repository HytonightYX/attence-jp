/*
 Navicat Premium Data Transfer

 Source Server         : 133.167.73.231
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : 133.167.73.231:3306
 Source Schema         : attence

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 17/11/2019 23:30:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for clock
-- ----------------------------
DROP TABLE IF EXISTS `clock`;
CREATE TABLE `clock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '员工id',
  `clock_date` bigint(20) NOT NULL COMMENT '打卡日期',
  `clock_in` bigint(14) DEFAULT NULL COMMENT '上班时间',
  `clock_in_lat` varchar(255) DEFAULT NULL COMMENT '上班打卡经度',
  `clock_in_lng` varchar(255) DEFAULT NULL COMMENT '上班打卡纬度',
  `clock_in_loc` varchar(255) DEFAULT NULL COMMENT '上班打卡地址',
  `clock_out` bigint(14) DEFAULT NULL COMMENT '下班时间',
  `clock_out_lat` varchar(255) DEFAULT NULL COMMENT '下班打卡经度',
  `clock_out_lng` varchar(255) DEFAULT NULL COMMENT '下班打卡纬度',
  `clock_out_loc` varchar(255) DEFAULT NULL COMMENT '下班打卡地址',
  `rest_time` varchar(20) DEFAULT NULL COMMENT '休息时间',
  `company` varchar(255) DEFAULT NULL COMMENT '上班公司',
  `clock_type` int(11) DEFAULT NULL COMMENT '打卡类型  0:正常  1:补卡',
  `clock_status` int(11) DEFAULT '0' COMMENT '打卡状态 0: 初始化 1:上班 2:下班 3:结束',
  `apdt` bigint(20) DEFAULT NULL COMMENT '创建日期',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of clock
-- ----------------------------
BEGIN;
INSERT INTO `clock` VALUES (13, 30, 20191108000000, 20191108045500, '37.09024', '-95.712891', '5000 Estate Enighed, Independence, KS 67301 アメリカ合衆国', NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, 20191108045508);
INSERT INTO `clock` VALUES (14, 29, 20191108000000, 20191108101300, '30.2873165', '120.1109096', 'Xin Yi Bin Guan ( Wen Yi Xi Lu ), Xihu Qu, Hangzhou Shi, Zhejiang Sheng, 中華人民共和国', 20191108101400, '30.2873165', '120.1109096', 'Xin Yi Bin Guan ( Wen Yi Xi Lu ), Xihu Qu, Hangzhou Shi, Zhejiang Sheng, 中華人民共和国', NULL, NULL, 0, 2, 20191108101137);
INSERT INTO `clock` VALUES (19, 29, 20191109000000, 20191109105300, '30.2876183', '120.1109608', '中国 Zhejiang, Hangzhou, Xihu, 益乐新村（北一区）6', 20191109105300, '30.2876183', '120.1109608', '中国 Zhejiang, Hangzhou, Xihu, 益乐新村（北一区）6', NULL, NULL, 0, 0, 20191109120039);
INSERT INTO `clock` VALUES (20, 30, 20191109000000, 20191109042800, '36.204823999999995', '138.252924', '日本、〒386-0601 長野県小県郡長和町大門２３５２', NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, 20191109042824);
INSERT INTO `clock` VALUES (21, 29, 20191110000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191110031743);
INSERT INTO `clock` VALUES (22, 30, 20191110000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191110104640);
INSERT INTO `clock` VALUES (23, 30, 20191111000000, 20191111091800, '37.09024', '-95.712891', '5000 Estate Enighed, Independence, KS 67301 アメリカ合衆国', 20191111091800, '37.09024', '-95.712891', '5000 Estate Enighed, Independence, KS 67301 アメリカ合衆国', '0', '', 0, 2, 20191111085234);
INSERT INTO `clock` VALUES (24, 29, 20191111000000, 20191111094800, 'null', 'null', 'null', 20191111093600, '30.287619099999997', '120.11084049999998', '中国 Zhejiang, Hangzhou, Xihu, 文一西路', '0', '', 0, 1, 20191111110153);
INSERT INTO `clock` VALUES (25, 35, 20191111000000, 20191111093400, '37.09024', '-95.712891', '5000 Estate Enighed, Independence, KS 67301 アメリカ合衆国', 20191111111400, '37.09024', '-95.712891', '5000 Estate Enighed, Independence, KS 67301 アメリカ合衆国', '3', 'jfkdsl', 0, 0, 20191111093406);
INSERT INTO `clock` VALUES (26, 29, 20191112000000, 20191112012400, '30.287796', '120.1106478', 'Bai Shang ( Yi Le Xin Cun Dian ), Xihu Qu, Hangzhou Shi, Zhejiang Sheng, 中華人民共和国', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191112094830);
INSERT INTO `clock` VALUES (27, 30, 20191112000000, 20191112104300, 'null', 'null', 'null', 20191112104400, 'null', 'null', 'null', '0', '', 0, 0, 20191112020102);
INSERT INTO `clock` VALUES (28, 36, 20191112000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191112024415);
INSERT INTO `clock` VALUES (29, 35, 20191112000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191112105001);
INSERT INTO `clock` VALUES (30, 37, 20191112000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191112060955);
INSERT INTO `clock` VALUES (31, 38, 20191112000000, 20191112112000, 'null', 'null', 'null', 20191112112000, 'null', 'null', 'null', '0', '', 0, 0, 20191112105349);
INSERT INTO `clock` VALUES (32, 29, 20191113000000, 20191113012400, '30.294589799999997', '120.0136034', 'Tang Nan Lu, Yuhang Qu, Hangzhou Shi, Zhejiang Sheng, 中華人民共和国', NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, 20191113080321);
INSERT INTO `clock` VALUES (33, 36, 20191113000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191113012905);
INSERT INTO `clock` VALUES (34, 38, 20191113000000, 20191113073400, 'null', 'null', 'null', 20191113073400, 'null', 'null', 'null', '2', 'HZNUUU', 0, 2, 20191113012050);
INSERT INTO `clock` VALUES (35, 37, 20191113000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191113063133);
INSERT INTO `clock` VALUES (36, 29, 20191114000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191114080927);
INSERT INTO `clock` VALUES (37, 40, 20191114000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191114122202);
INSERT INTO `clock` VALUES (38, 36, 20191114000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191114123012);
INSERT INTO `clock` VALUES (39, 30, 20191114000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191114124342);
INSERT INTO `clock` VALUES (40, 38, 20191114000000, 20191114091700, 'null', 'null', 'null', 20191114091700, 'null', 'null', 'null', '4', 'HZNU', 0, 2, 20191114124418);
INSERT INTO `clock` VALUES (41, 42, 20191114000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191114105227);
INSERT INTO `clock` VALUES (42, 41, 20191114000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191114041902);
INSERT INTO `clock` VALUES (43, 29, 20191115000000, 20191115032500, '30.2874188', '120.1109283', '', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191115031344);
INSERT INTO `clock` VALUES (44, 41, 20191115000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191115073411);
INSERT INTO `clock` VALUES (45, 40, 20191115000000, 20191115082000, '30.286916454248857', '120.1105206205117', '中国 文一西路93-99号', 20191115082300, '30.28691365554688', '120.11051821507586', '中国 文一西路93-99号', '0', '', 0, 2, 20191115073605);
INSERT INTO `clock` VALUES (46, 43, 20191115000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191115075209);
INSERT INTO `clock` VALUES (47, 44, 20191115000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191115084113);
INSERT INTO `clock` VALUES (48, 30, 20191115000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191115102024);
INSERT INTO `clock` VALUES (49, 29, 20191116000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191116084733);
INSERT INTO `clock` VALUES (50, 30, 20191116000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191116072621);
INSERT INTO `clock` VALUES (51, 45, 20191116000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191116100748);
INSERT INTO `clock` VALUES (52, 40, 20191116000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191116114343);
INSERT INTO `clock` VALUES (53, 45, 20191117000000, 20191117015700, 'null', 'null', 'null', NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, 20191117015349);
INSERT INTO `clock` VALUES (54, 40, 20191117000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191117101848);
COMMIT;

-- ----------------------------
-- Table structure for clock_sche
-- ----------------------------
DROP TABLE IF EXISTS `clock_sche`;
CREATE TABLE `clock_sche` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `clock_in` varchar(20) DEFAULT NULL,
  `clock_out` varchar(20) DEFAULT NULL,
  `rest` int(11) DEFAULT NULL,
  `comp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of clock_sche
-- ----------------------------
BEGIN;
INSERT INTO `clock_sche` VALUES (0, 0, '09:00', '18:00', 7, 'BIZPLUS');
INSERT INTO `clock_sche` VALUES (1, 29, '09:00', '11:40', 3, 'Nexp');
INSERT INTO `clock_sche` VALUES (2, 30, '09:00', '16:00', 4, 'HZNU');
INSERT INTO `clock_sche` VALUES (3, 38, '08:50', '17:00', 4, 'HZNU');
INSERT INTO `clock_sche` VALUES (4, 45, '08:55', '17:30', 2, '杭州师范大学');
COMMIT;

-- ----------------------------
-- Table structure for comp_dept
-- ----------------------------
DROP TABLE IF EXISTS `comp_dept`;
CREATE TABLE `comp_dept` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dept_code` varchar(10) DEFAULT NULL,
  `dept_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comp_dept
-- ----------------------------
BEGIN;
INSERT INTO `comp_dept` VALUES (1, 'yyb', '営业部');
INSERT INTO `comp_dept` VALUES (2, 'ssb', '生产部');
INSERT INTO `comp_dept` VALUES (3, 'jsb', '技术部');
INSERT INTO `comp_dept` VALUES (4, 'cwb', '财务部');
INSERT INTO `comp_dept` VALUES (5, 'pzb', '品质部');
INSERT INTO `comp_dept` VALUES (6, 'qhb', '企画部');
INSERT INTO `comp_dept` VALUES (7, 'hwb', '海外事业部');
INSERT INTO `comp_dept` VALUES (8, 'qbb', '情报部');
INSERT INTO `comp_dept` VALUES (9, 'zcb', '资材部');
INSERT INTO `comp_dept` VALUES (10, 'zwb', '総务部');
COMMIT;

-- ----------------------------
-- Table structure for comp_pos
-- ----------------------------
DROP TABLE IF EXISTS `comp_pos`;
CREATE TABLE `comp_pos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pos_code` varchar(10) DEFAULT NULL,
  `pos_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comp_pos
-- ----------------------------
BEGIN;
INSERT INTO `comp_pos` VALUES (1, 'bz', '部長');
INSERT INTO `comp_pos` VALUES (2, 'sz', '社長');
INSERT INTO `comp_pos` VALUES (3, 'zr', '主任');
INSERT INTO `comp_pos` VALUES (4, 'xz', '係長');
INSERT INTO `comp_pos` VALUES (5, 'kz', '課長');
INSERT INTO `comp_pos` VALUES (6, 'cz', '次長');
INSERT INTO `comp_pos` VALUES (7, 'bbz', '本部長');
INSERT INTO `comp_pos` VALUES (8, 'zxyy', '執行役員');
INSERT INTO `comp_pos` VALUES (9, 'jcy', '監査役');
INSERT INTO `comp_pos` VALUES (10, 'cw', '常務');
INSERT INTO `comp_pos` VALUES (11, 'zw', '専務');
INSERT INTO `comp_pos` VALUES (12, 'hz', '会長');
INSERT INTO `comp_pos` VALUES (13, 'yg', '员工');
COMMIT;

-- ----------------------------
-- Table structure for dept
-- ----------------------------
DROP TABLE IF EXISTS `dept`;
CREATE TABLE `dept` (
  `id` int(11) NOT NULL,
  `name` varchar(128) DEFAULT NULL COMMENT '部门名称',
  `minister` varchar(36) DEFAULT NULL COMMENT '部长id',
  `creaet_at` bigint(14) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for error
-- ----------------------------
DROP TABLE IF EXISTS `error`;
CREATE TABLE `error` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `err_code` int(5) DEFAULT NULL COMMENT '错误码',
  `err_name` varchar(32) DEFAULT NULL COMMENT '错误英文缩写',
  `err_msg` varchar(255) DEFAULT NULL COMMENT '错误信息',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of error
-- ----------------------------
BEGIN;
INSERT INTO `error` VALUES (1, 301, 'USER_LOGIN_FAILURE', '账户名或密码错误');
INSERT INTO `error` VALUES (2, 200, 'DATA_SUCC', '更新数据成功');
COMMIT;

-- ----------------------------
-- Table structure for leave
-- ----------------------------
DROP TABLE IF EXISTS `leave`;
CREATE TABLE `leave` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT '用户id',
  `type` int(3) DEFAULT NULL COMMENT '请假类型',
  `from` datetime DEFAULT NULL COMMENT '开始时间',
  `to` datetime DEFAULT NULL COMMENT '结束时间',
  `dur` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '经过时间',
  `reason` varchar(200) CHARACTER SET utf8 DEFAULT NULL COMMENT '请假事由',
  `imglist` varchar(200) CHARACTER SET utf8 DEFAULT NULL COMMENT '附图片url',
  `status` int(2) DEFAULT NULL COMMENT '状态',
  `create_at` bigint(14) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of leave
-- ----------------------------
BEGIN;
INSERT INTO `leave` VALUES (3, 40, -1, '2019-11-17 22:42:00', '2019-11-17 23:42:00', '1小时', 'fgfg', NULL, 0, 20191117104441);
INSERT INTO `leave` VALUES (4, 40, -1, '2019-11-17 22:42:00', '2019-11-17 23:42:00', '1小时', 'fgfg', NULL, 0, 20191117105910);
INSERT INTO `leave` VALUES (5, 40, -1, '2019-11-17 22:42:00', '2019-11-17 23:42:00', '1小时', 'fgfg', NULL, 0, 20191117104441);
INSERT INTO `leave` VALUES (6, 40, -1, '2019-11-17 22:42:00', '2019-11-17 23:42:00', '1小时', 'fgfg', NULL, 0, 20191117110136);
INSERT INTO `leave` VALUES (7, 40, 2, '2019-11-17 23:03:00', '2019-11-17 23:03:00', '0小时', 'pp', NULL, 0, 20191117110324);
INSERT INTO `leave` VALUES (8, 40, 2, '2019-11-17 23:07:00', '2019-11-17 23:07:00', '0小时', 'ff', NULL, 0, 20191117110751);
INSERT INTO `leave` VALUES (9, 40, 2, '2019-11-17 23:13:00', '2019-11-17 23:13:00', '0小时', 'dd', NULL, 0, 20191117111333);
INSERT INTO `leave` VALUES (10, 40, 2, '2019-11-17 23:14:00', '2019-11-17 23:14:00', '0小时', 'ppp', NULL, 0, 20191117111511);
INSERT INTO `leave` VALUES (11, 40, 2, '2019-11-17 23:16:00', '2019-11-17 23:16:00', '0小时', 'dddd', NULL, 0, 20191117111622);
INSERT INTO `leave` VALUES (12, 40, 2, '2019-11-17 23:17:00', '2019-11-17 23:17:00', '0小时', 'pp', NULL, 0, 20191117111747);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL COMMENT '姓名',
  `phone` varchar(32) DEFAULT NULL COMMENT '手机',
  `email` varchar(128) DEFAULT NULL COMMENT '邮箱',
  `birthday` bigint(14) DEFAULT NULL COMMENT '出生日期',
  `addr` varchar(128) DEFAULT NULL COMMENT '居住地',
  `postcode` varchar(32) DEFAULT NULL COMMENT '邮政编码',
  `company` varchar(128) DEFAULT NULL COMMENT '公司',
  `dept` varchar(128) DEFAULT NULL COMMENT '部门',
  `position` varchar(32) DEFAULT NULL COMMENT '职位',
  `hiredate` bigint(14) DEFAULT NULL COMMENT '入职日期',
  `apdt` bigint(14) DEFAULT NULL COMMENT '创建时间',
  `status` int(3) DEFAULT NULL COMMENT '状态',
  `pwd` varchar(32) DEFAULT NULL COMMENT '密码',
  `type` int(11) DEFAULT NULL COMMENT '类型',
  `face` varchar(255) DEFAULT NULL COMMENT '照片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (29, '李阳', '5038948090', 'quanta2006@163.com', 20191107000000, '6215 NE 92nd Dr C/O XEK076', '97253', 'bizplus', '部门1', '社长', 20191107000000, 20191107031412, 2, 'a', 1002, 'upload/Face_20191109101341.jpg');
INSERT INTO `user` VALUES (40, 'zhangsan', '135151515444', 'liyangtom@163.com', 20191114000000, 'wawefwf', '23111', 'bizplus', '部门1', '部长', 20191114000000, 20191114082130, 1, 'a', 1001, 'upload/Face_20191114122128.jpg');
INSERT INTO `user` VALUES (43, '李阳', '13515814446', 'tom@163.com', 20191115000000, 'Xindjxjm', '293884', 'bizplus', '部门1', '员工', 20191115000000, 20191115035058, 1, 'a', 1001, 'upload/Face_20191115075052.jpg');
INSERT INTO `user` VALUES (44, '王test2', '22', '22', 20191115000000, 'biz', '22', 'bizplus', '部门1', '员工', 20191015000000, 20191115053951, 1, '22', 1001, 'upload/Face_20191115083948.jpg');
INSERT INTO `user` VALUES (45, '小胡', '1234432112', 'qq', 20170916000000, 'qq', 'qq', 'bizplus', '部门1', '员工', 20151116000000, 20191116060512, 1, 'qq', 1001, 'upload/Face_20191116100401.jpg');
INSERT INTO `user` VALUES (47, 'Mm', 'Mm', 'm m', 20181117000000, 'Mm', 'Mm', 'bizplus', '部门1', '职位1', 20161117000000, 20191117035824, 0, 'mm', 1001, 'upload/Face_20191117035823.jpg');
COMMIT;

-- ----------------------------
-- Procedure structure for DEBUG_MSG
-- ----------------------------
DROP PROCEDURE IF EXISTS `DEBUG_MSG`;
delimiter ;;
CREATE PROCEDURE `attence`.`DEBUG_MSG`(msg VARCHAR(21812))
BEGIN
    select concat("** ", msg) AS '** DEBUG:';
END
;;
delimiter ;

-- ----------------------------
-- Function structure for FN_CLOCK_EXIST
-- ----------------------------
DROP FUNCTION IF EXISTS `FN_CLOCK_EXIST`;
delimiter ;;
CREATE FUNCTION `attence`.`FN_CLOCK_EXIST`(`uid` int(11), `clock_date` BIGINT(14))
 RETURNS int(11)
BEGIN
	DECLARE cnt BIGINT UNSIGNED ;
	
	select count(uid) into cnt 
	from clock
	where clock.uid = uid and clock.clock_date = clock_date;
	
	return cnt;
END
;;
delimiter ;

-- ----------------------------
-- Function structure for FN_SCHE_EXIST
-- ----------------------------
DROP FUNCTION IF EXISTS `FN_SCHE_EXIST`;
delimiter ;;
CREATE FUNCTION `attence`.`FN_SCHE_EXIST`(`_uid` int(11))
 RETURNS int(11)
BEGIN
	DECLARE cnt BIGINT UNSIGNED;
	
	select count(uid) into cnt from clock_sche where uid = _uid;
	
	return cnt;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_ADMIN_SET_USERPOS
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_ADMIN_SET_USERPOS`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_ADMIN_SET_USERPOS`(In `data` VARCHAR(16383))
BEGIN
	DECLARE _uid INT(11) DEFAULT NULL;
	DECLARE _pos varchar(50) 	default null;

	SET _uid  = CONVERT(JSON_EXTRACT(data, '$.uid'), UNSIGNED);
	SET _pos 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.pos'));
	update user set position=_pos where id=_uid;
	
	select id as `key`,`name`,`phone`,email,birthday,addr,postcode,company,dept,position,hiredate,apdt,`status`,pwd,type,face from user;

END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_ADMIN_USERACTIVE
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_ADMIN_USERACTIVE`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_ADMIN_USERACTIVE`(In `data` VARCHAR(16383))
BEGIN
	DECLARE _id INT(11) DEFAULT NULL;
	DECLARE _status INT(11) DEFAULT NULL;
	SET _id  = CONVERT(JSON_EXTRACT(data, '$.id'), UNSIGNED);
	SET _status = CONVERT(JSON_EXTRACT(data, '$.status'), UNSIGNED);
	update user set status=_status where id=_id;
	
	select id as `key`,`name`,`phone`,email,birthday,addr,postcode,company,dept,position,hiredate,apdt,`status`,pwd,type,face from user;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_ADMIN_USERLIST
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_ADMIN_USERLIST`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_ADMIN_USERLIST`(In `data` VARCHAR(16383))
BEGIN
	
	select id as `key`,`name`,`phone`,email,birthday,addr,postcode,company,dept,position,hiredate,apdt,`status`,pwd,type,face from user;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_CONF_LOAD_CARDSCHE
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_CONF_LOAD_CARDSCHE`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_CONF_LOAD_CARDSCHE`(In `data` VARCHAR(16383))
BEGIN
	DECLARE _uid INT(11) DEFAULT NULL;
	
	SET _uid 	= CONVERT(JSON_EXTRACT(data, '$.uid'), UNSIGNED);
	
	if FN_SCHE_EXIST(_uid) then
		select * from clock_sche where uid = _uid;
	else
		select * from clock_sche where uid = 0;
	end if;
	
	
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_CONF_SAVE_CARDSCHE
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_CONF_SAVE_CARDSCHE`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_CONF_SAVE_CARDSCHE`(In `data` VARCHAR(16383))
BEGIN
	DECLARE _uid INT(11) DEFAULT NULL;
	DECLARE _clock_in varchar(20) DEFAULT NULL;
	DECLARE _clock_out varchar(20) DEFAULT NULL;
	DECLARE _rest INT(11) DEFAULT NULL;
	DECLARE _comp VARCHAR(255) DEFAULT NULL;
	
	DECLARE count INT(11) DEFAULT NULL;
	
	SET _uid 	= CONVERT(JSON_EXTRACT(data, '$.uid'), UNSIGNED);
	SET _clock_in 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.start'));
	SET _clock_out 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.end'));
	SET _rest 	= CONVERT(JSON_EXTRACT(data, '$.rest'), UNSIGNED);
	SET _comp 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.comp'));
	
	select count(*) into count from clock_sche where uid=_uid;
	
	if count=0 then
		insert into clock_sche(uid,clock_in,clock_out,rest,comp) values(_uid,_clock_in,_clock_out,_rest,_comp);
	else
		update clock_sche set clock_in=_clock_in,clock_out=_clock_out,rest=_rest,comp=_comp where uid=_uid;
	end if;

	select err_code,err_name,err_msg from error where id=2;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_LEAVE_APPLYLEAVE
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_LEAVE_APPLYLEAVE`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_LEAVE_APPLYLEAVE`(In `data` VARCHAR(16383))
BEGIN
  DECLARE _uid int(11) DEFAULT NULL;
	DECLARE _type int(11) DEFAULT NULL;
	DECLARE _from datetime 	default null;
	DECLARE _to   datetime 	default null;
	DECLARE _dur  varchar(50) 	default null;
	DECLARE _reason  varchar(200) 	default null;
	DECLARE _imglist varchar(200) 	default null;
	DECLARE _create_at BIGINT(14) DEFAULT NULL;

	SET _uid    = CONVERT(JSON_EXTRACT(data, '$.uid'), SIGNED);
	SET _type   = CONVERT(JSON_EXTRACT(data, '$.type'), SIGNED);
	SET _from 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.from'));
	SET _to   	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.to'));
	SET _dur    = JSON_UNQUOTE(JSON_EXTRACT(data,'$.durDays'));
	SET _reason = JSON_UNQUOTE(JSON_EXTRACT(data,'$.reason'));
	SET _imglist= JSON_UNQUOTE(JSON_EXTRACT(data,'$.imglist'));
	SET _create_at = CONVERT(JSON_EXTRACT(data, '$.create_at'), UNSIGNED);
	
	insert into `leave`(`uid`,`type`,`from`,`to`,`dur`,`reason`,`imglist`,`status`,`create_at`) values(_uid, _type ,_from,_to,_dur,_reason,_imglist,0,_create_at);
	
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_USER_CLOCK_IN
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_USER_CLOCK_IN`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_USER_CLOCK_IN`(In `data` VARCHAR(16383))
BEGIN
	DECLARE clock_date BIGINT(14) DEFAULT NULL;
	DECLARE uid 			 int(11) DEFAULT NULL;
	
	SET clock_date = JSON_UNQUOTE(JSON_EXTRACT(data,'$.clock_date'));
	SET uid = JSON_UNQUOTE(JSON_EXTRACT(data,'$.uid'));
	
	UPDATE clock 
	SET
		`clock_in` 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.clock_time')),
		`clock_in_lat` = JSON_UNQUOTE(JSON_EXTRACT(data,'$.lat')),
		`clock_in_lng` = JSON_UNQUOTE(JSON_EXTRACT(data,'$.lng')),
		`clock_in_loc` = JSON_UNQUOTE(JSON_EXTRACT(data,'$.loc')),
		`clock_status` = JSON_UNQUOTE(JSON_EXTRACT(data,'$.status'))
	WHERE
		clock.uid = uid and clock.clock_date = clock_date;
	
	select * from clock where clock.uid = uid and clock.clock_date = clock_date;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_USER_CLOCK_INFO
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_USER_CLOCK_INFO`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_USER_CLOCK_INFO`(In `data` VARCHAR(16383))
BEGIN
	DECLARE uid INT(11) DEFAULT NULL;
	DECLARE clock_date BIGINT(14) DEFAULT NULL;
	DECLARE apdt BIGINT(14) DEFAULT NULL;
	
	DECLARE exist BIGINT UNSIGNED;
	
	SET uid 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.uid'));
	SET clock_date	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.clock_date'));
	
	SET exist = FN_CLOCK_EXIST(uid, clock_date);

-- 	该用户当天无打卡记录
	if exist = 0 then
		SET apdt 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.apdt'));
		
		insert into clock(`uid`, `clock_date`, `clock_type`, `clock_status`, `apdt`) 
		values(uid, clock_date, 0, 0, apdt);
	end if;
		
	select * from clock where clock.uid = uid and clock.clock_date = clock_date;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_USER_CLOCK_OUT
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_USER_CLOCK_OUT`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_USER_CLOCK_OUT`(In `data` VARCHAR(16383))
BEGIN
	DECLARE clock_date BIGINT(14) DEFAULT NULL;
	DECLARE uid 			 int(11) DEFAULT NULL;
	
	SET clock_date = JSON_UNQUOTE(JSON_EXTRACT(data,'$.clock_date'));
	SET uid = JSON_UNQUOTE(JSON_EXTRACT(data,'$.uid'));
	
	UPDATE clock 
	SET
		`clock_out` 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.clock_time')),
		`clock_out_lat` = JSON_UNQUOTE(JSON_EXTRACT(data,'$.lat')),
		`clock_out_lng` = JSON_UNQUOTE(JSON_EXTRACT(data,'$.lng')),
		`clock_out_loc` = JSON_UNQUOTE(JSON_EXTRACT(data,'$.loc')),
		`clock_status` = JSON_UNQUOTE(JSON_EXTRACT(data,'$.status')),
		`rest_time` = JSON_UNQUOTE(JSON_EXTRACT(data,'$.rest_time')),
		`company` = JSON_UNQUOTE(JSON_EXTRACT(data,'$.company'))
	WHERE
		clock.uid = uid and clock.clock_date = clock_date;
	
	select * from clock where clock.uid = uid and clock.clock_date = clock_date;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_USER_LIST
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_USER_LIST`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_USER_LIST`()
BEGIN
	SELECT * FROM user;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_USER_LOGIN
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_USER_LOGIN`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_USER_LOGIN`(IN `data` varchar(16383))
BEGIN
	DECLARE email varchar(128) 	default null;
  DECLARE pwd 	varchar(128) 	default null;

	SET email 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.email'));
	SET pwd 		= JSON_UNQUOTE(JSON_EXTRACT(data,'$.pwd'));
	
	SELECT * FROM user WHERE user.email = email AND user.pwd = pwd;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_USER_REGISTER
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_USER_REGISTER`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_USER_REGISTER`(IN `data` varchar(16383))
BEGIN
		DECLARE name 			varchar(128) 	default null;
    DECLARE phone 		varchar(128) 	default null;
		DECLARE email 		varchar(128) 	default null;
		DECLARE birthday 	bigint(14) 		default null;
		DECLARE addr 			varchar(128) 	default null;
		DECLARE postcode 	varchar(128) 	default null;
		DECLARE company  	varchar(128) 	default null;
		DECLARE dept 			varchar(128) 	default null;
		DECLARE position 	varchar(128) 	default null;
		DECLARE hiredate 	bigint(14) 		default null;
		DECLARE apdt 			bigint(14) 		default null;
		DECLARE pwd 			varchar(128) 	default null;
		DECLARE face 			varchar(255) 	default null;
		DECLARE type 			int(11) 			default null;
		DECLARE status 		int(3) 				default null;
		
		set name 		  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.name'));
		set phone 	  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.phone'));
		set email 	  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.email'));
		set birthday  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.birthday'));
		set addr 		  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.addr'));
		set postcode  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.postcode'));
		set company   = JSON_UNQUOTE(JSON_EXTRACT(data,'$.company'));
		set dept 		  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.dept'));
		set position  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.position'));
		set hiredate  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.hiredate'));
		set apdt 		  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.apdt'));
		set pwd 		  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.pwd'));
		set type 		  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.type'));
		set face 		  = JSON_UNQUOTE(JSON_EXTRACT(data,'$.face'));
		set status  = 0;
		
		INSERT INTO
			user(`name`,`phone`,`email`,`birthday`,`addr`,`postcode`,`company`,`dept`,`position`,`hiredate`,`apdt`,`pwd`, `status`,`type`, `face`) 
		VALUES
			(name,phone,email,birthday,addr,postcode,company,dept,position,hiredate,apdt,pwd, status, type, face);
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
