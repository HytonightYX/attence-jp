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

 Date: 11/11/2019 11:56:53
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;

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
INSERT INTO `clock` VALUES (23, 30, 20191111000000, 20191111085300, '37.09024', '-95.712891', '5000 Estate Enighed, Independence, KS 67301 アメリカ合衆国', NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, 20191111085234);
INSERT INTO `clock` VALUES (24, 29, 20191111000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191111110153);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of clock_sche
-- ----------------------------
BEGIN;
INSERT INTO `clock_sche` VALUES (1, 29, '12:00', '07:00', 2, 'Loicke');
INSERT INTO `clock_sche` VALUES (2, 30, '09:00', '16:00', 1, 'HZNU');
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
  `id` int(11) NOT NULL,
  `type` int(3) DEFAULT NULL COMMENT '请假类型',
  `start_time` bigint(14) DEFAULT NULL COMMENT '开始时间',
  `end_time` bigint(14) DEFAULT NULL COMMENT '结束时间',
  `reason` varchar(255) DEFAULT NULL COMMENT '请假事由',
  `img` varchar(255) DEFAULT NULL COMMENT '附图片url',
  `dept_id` int(11) DEFAULT NULL COMMENT '部门id',
  `status` int(2) DEFAULT NULL COMMENT '状态',
  `create_at` bigint(14) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (29, '李阳', '5038948090', 'quanta2006@163.com', 20191107000000, '6215 NE 92nd Dr C/O XEK076', '97253', 'bizplus', '部门1', '职位1', 20191107000000, 20191107031412, 1, 'a', 1002, NULL);
INSERT INTO `user` VALUES (30, 'cc', 'cc', 'cc', 20191108000000, 'c', 'ccc', 'bizplus', '部门1', '职位1', 20140908000000, 20191108045500, 1, 'cc', 1001, NULL);
INSERT INTO `user` VALUES (31, 'hh', 'hh', 'hh', 20191109000000, 'hh', 'hh', 'bizplus', '部门1', '职位1', 20191209000000, 20191109095903, 0, 'hh', 1001, 'C:\\fakepath\\1.jpg');
INSERT INTO `user` VALUES (32, 'cc', 'cc', 'cc', 20190909000000, 'cc', 'cc', 'bizplus', '部门1', '职位1', 20191109000000, 20191109101343, 0, 'cc', 1001, 'upload/Face_20191109101341.jpg');
INSERT INTO `user` VALUES (33, '小胡', '1234789432', 'who', 19961109000000, 'AA BB CC DD', '123456', 'bizplus', '部门1', '职位1', 20171109000000, 20191109104013, 0, 'aa', 1001, 'upload/Face_20191109104009.png');
INSERT INTO `user` VALUES (34, 'wefaf', '232323', 'wfeaw@af.com', 20191109000000, '2323', '2323', 'bizplus', '部门1', '职位1', 20191109000000, 20191109020854, 0, 'a', 1001, 'upload/Face_20191109020853.jpg');
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
-- Procedure structure for PROC_CONF_LOAD_CARDSCHE
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_CONF_LOAD_CARDSCHE`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_CONF_LOAD_CARDSCHE`(In `data` VARCHAR(16383))
BEGIN
	DECLARE _uid INT(11) DEFAULT NULL;
	
	SET _uid 	= CONVERT(JSON_EXTRACT(data, '$.uid'), UNSIGNED);

	select * from clock_sche where uid = _uid;
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
		`clock_status` = JSON_UNQUOTE(JSON_EXTRACT(data,'$.status'))
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
