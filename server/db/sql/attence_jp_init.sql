/*
 Navicat Premium Data Transfer

 Source Server         : attence_jp
 Source Server Type    : MySQL
 Source Server Version : 50727
 Source Host           : 101.37.14.191:3306
 Source Schema         : attence_jp

 Target Server Type    : MySQL
 Target Server Version : 50727
 File Encoding         : 65001

 Date: 03/11/2019 21:27:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for clock
-- ----------------------------
DROP TABLE IF EXISTS `clock`;
CREATE TABLE `clock` (
  `id` int(11) NOT NULL,
  `uid` int(11) DEFAULT NULL COMMENT '员工id',
  `clock_in` bigint(14) DEFAULT NULL COMMENT '上班时间',
  `clock_in_loc` varchar(255) DEFAULT NULL COMMENT '上班打卡地点',
  `clock_out` bigint(14) DEFAULT NULL COMMENT '下班时间',
  `clock_out_loc` varchar(255) DEFAULT NULL COMMENT '上班打卡地点',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, '小胡', '473819749', 'aaa@qq.com', NULL, NULL, NULL, 'AAA公司', 'BBB部门', 'CCC', 20191101000000, 20191101000000, NULL, NULL);
INSERT INTO `user` VALUES (2, 'huhuhu', '18947234732', NULL, 20191127000000, 'AAqu', '432143', 'a_com', 'AAAA', 'BBBB', 20181127000000, NULL, 0, '1234');
INSERT INTO `user` VALUES (3, '4231', '43214', NULL, 20191106000000, '32142', '3214', '43214', '42314', '41324', 20191029000000, 20191103062142, 0, '4321');
INSERT INTO `user` VALUES (4, '43214', '3214', NULL, 20101118000000, '3214', '3214', '43214', '4321', '4321', 20191113000000, 20191103063354, 0, '4321');
INSERT INTO `user` VALUES (5, '4', '5', NULL, 20191106000000, '7', '6', '8', '9', '0', 20191106000000, 20191103063443, 0, '2');
INSERT INTO `user` VALUES (6, 'jameshu', '148932432', NULL, 20191114000000, 'abc区ef幢', '423894', 'AAA', '技术体验部', '前端开发', 20191114000000, 20191103064114, 0, 'aa');
INSERT INTO `user` VALUES (7, 'hu', '1805747243', 'who@aa.com', 20191123000000, 'juzhudizhi', '432144', 'company', 'fdsjka', 'fdsa', 20191122000000, 20191103065200, 0, '12345');
INSERT INTO `user` VALUES (8, 'aa', '12345678', 'whoss@qq.com', 20191103000000, 'fdjksafkldsa', '123456', 'aa公司', 'bbbb', 'cccc', 20191121000000, 20191103065924, 0, '1234');
COMMIT;

-- ----------------------------
-- Procedure structure for PROC_USER_LIST
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_USER_LIST`;
delimiter ;;
CREATE PROCEDURE `attence_jp`.`PROC_USER_LIST`()
BEGIN
	SELECT * FROM user;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_USER_REGISTER
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_USER_REGISTER`;
delimiter ;;
CREATE PROCEDURE `attence_jp`.`PROC_USER_REGISTER`(IN `data` varchar(16383))
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
		set status  = 0;
		
		INSERT INTO
			user(`name`,`phone`,`email`,`birthday`,`addr`,`postcode`,`company`,`dept`,`position`,`hiredate`,`apdt`,`pwd`, `status`) 
		VALUES
			(name,phone,email,birthday,addr,postcode,company,dept,position,hiredate,apdt,pwd, status);
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
