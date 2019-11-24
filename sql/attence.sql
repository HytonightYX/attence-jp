/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 50709
 Source Host           : localhost:3306
 Source Schema         : attence

 Target Server Type    : MySQL
 Target Server Version : 50709
 File Encoding         : 65001

 Date: 24/11/2019 10:40:39
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
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4;

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
INSERT INTO `clock` VALUES (37, 40, 20191114000000, 20191114091700, '30.286916454248857', '120.1105206205117', '中国 文一西路93-99号', 20191114091700, '30.28691365554688', '120.11051821507586', '中国 文一西路93-99号', '1', 'Bidd', 0, 2, 20191114122202);
INSERT INTO `clock` VALUES (38, 36, 20191114000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191114123012);
INSERT INTO `clock` VALUES (39, 30, 20191114000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191114124342);
INSERT INTO `clock` VALUES (40, 38, 20191114000000, 20191114091700, 'null', 'null', 'null', 20191114091700, 'null', 'null', 'null', '4', 'HZNU', 0, 2, 20191114124418);
INSERT INTO `clock` VALUES (41, 42, 20191114000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191114105227);
INSERT INTO `clock` VALUES (42, 41, 20191114000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191114041902);
INSERT INTO `clock` VALUES (43, 29, 20191115000000, 20191115032500, '30.2874188', '120.1109283', '', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191115031344);
INSERT INTO `clock` VALUES (44, 41, 20191115000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191115073411);
INSERT INTO `clock` VALUES (45, 40, 20191115000000, 20191115082000, '30.286916454248857', '120.1105206205117', '中国 文一西路93-99号', 20191115082300, '30.28691365554688', '120.11051821507586', '中国 文一西路93-99号', '1', 'ssd', 0, 2, 20191115073605);
INSERT INTO `clock` VALUES (46, 43, 20191115000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191115075209);
INSERT INTO `clock` VALUES (47, 44, 20191115000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191115084113);
INSERT INTO `clock` VALUES (48, 30, 20191115000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191115102024);
INSERT INTO `clock` VALUES (49, 29, 20191116000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191116084733);
INSERT INTO `clock` VALUES (50, 30, 20191116000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191116072621);
INSERT INTO `clock` VALUES (51, 45, 20191116000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191116100748);
INSERT INTO `clock` VALUES (52, 40, 20191116000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191116114343);
INSERT INTO `clock` VALUES (53, 45, 20191117000000, 20191117015700, 'null', 'null', 'null', NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, 20191117015349);
INSERT INTO `clock` VALUES (54, 40, 20191117000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191117101848);
INSERT INTO `clock` VALUES (55, 44, 20191118000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191118010914);
INSERT INTO `clock` VALUES (56, 40, 20191118000000, 20191118045600, 'null', 'null', 'null', 20191118045800, '30.287393698615876', '120.11063596927474', '中国 Zhejiang, Hangzhou, Xihu, 文一西路', '7', 'BIZPLUS', 0, 2, 20191118121927);
INSERT INTO `clock` VALUES (57, 48, 20191118000000, 20191118082700, '35.69172476376068', '139.71903633806662', '日本、〒162-0065 東京都新宿区住吉町３−１１ 新宿スパイアビル', 20191118082700, '35.69172476376068', '139.71903633806662', '日本、〒162-0065 東京都新宿区住吉町３−１１ 新宿スパイアビル', '7', 'BIZPLUS', 0, 0, 20191118082240);
INSERT INTO `clock` VALUES (58, 45, 20191118000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191118085505);
INSERT INTO `clock` VALUES (59, 50, 20191118000000, 20191118053900, 'null', 'null', 'null', 20191118053900, 'null', 'null', 'null', '7', 'BIZPLUS', 0, 2, 20191118052613);
INSERT INTO `clock` VALUES (60, 40, 20191119000000, 20191119024400, '30.279055059729146', '119.99924931725332', '中華人民共和国 Zhejiang Sheng, Hangzhou Shi, Yuhang Qu, Xiangwang St, 園東橋', NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, 20191119024400);
INSERT INTO `clock` VALUES (61, 48, 20191119000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191119031258);
INSERT INTO `clock` VALUES (62, 48, 20191120000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191120123517);
INSERT INTO `clock` VALUES (63, 40, 20191120000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191120102550);
INSERT INTO `clock` VALUES (64, 40, 20191121000000, 20191121083400, '30.287368937226734', '120.1107706516752', 'Xin Yi Bin Guan ( Wen Yi Xi Lu ), Xihu Qu, Hangzhou Shi, Zhejiang Sheng, 中華人民共和国', 20191121083400, '30.287368937226734', '120.1107706516752', 'Xin Yi Bin Guan ( Wen Yi Xi Lu ), Xihu Qu, Hangzhou Shi, Zhejiang Sheng, 中華人民共和国', '7', 'BIZPLUS', 0, 2, 20191121110026);
INSERT INTO `clock` VALUES (65, 48, 20191121000000, 20191121081200, 'null', 'null', 'null', 20191121081200, 'null', 'null', 'null', '7', 'BIZPLUS', 0, 2, 20191121081054);
INSERT INTO `clock` VALUES (66, 44, 20191121000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191121100317);
INSERT INTO `clock` VALUES (67, 45, 20191122000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191122091457);
INSERT INTO `clock` VALUES (69, 40, 20191123000000, 20191123020300, '30.533591476526997', '119.95919908091795', '中国 Zhejiang, Huzhou, Deqing, 兴康南路综合市场北侧', NULL, NULL, NULL, NULL, NULL, NULL, 0, 1, 20191123053735);
INSERT INTO `clock` VALUES (72, 45, 20191122000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 2, NULL);
INSERT INTO `clock` VALUES (73, 45, 20191123000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191123091306);
INSERT INTO `clock` VALUES (74, 40, 20191124000000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 20191124123510);
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of clock_sche
-- ----------------------------
BEGIN;
INSERT INTO `clock_sche` VALUES (1, 29, '09:01', '11:40', 3, 'Nexp');
INSERT INTO `clock_sche` VALUES (2, 30, '09:00', '16:00', 4, 'HZNU');
INSERT INTO `clock_sche` VALUES (3, 38, '08:50', '17:00', 4, 'HZNU');
INSERT INTO `clock_sche` VALUES (6, 0, '09:00', '18:00', 6, 'BIZPLUS');
INSERT INTO `clock_sche` VALUES (7, 1, '1111', '1111', 1, '1111');
INSERT INTO `clock_sche` VALUES (8, 45, '09:30', '07:50', 5, '杭州师范大学');
INSERT INTO `clock_sche` VALUES (9, 40, '09:00', '18:00', 6, 'BIZPLUS');
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
-- Table structure for holiday
-- ----------------------------
DROP TABLE IF EXISTS `holiday`;
CREATE TABLE `holiday` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) DEFAULT NULL COMMENT '假日名称',
  `code` varchar(16) DEFAULT NULL COMMENT '节假日代码',
  `date` varchar(8) DEFAULT NULL COMMENT '节假日开始日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of holiday
-- ----------------------------
BEGIN;
INSERT INTO `holiday` VALUES (1, '元旦', '', '0101');
INSERT INTO `holiday` VALUES (2, '成人之日	', NULL, '0111');
INSERT INTO `holiday` VALUES (3, '建国纪念之日', NULL, '0211');
INSERT INTO `holiday` VALUES (4, '天皇诞生日', NULL, '0222');
INSERT INTO `holiday` VALUES (5, '春分之日', NULL, '0320');
INSERT INTO `holiday` VALUES (6, '昭和之日', NULL, '0429');
INSERT INTO `holiday` VALUES (7, '宪法纪念日', NULL, '0503');
INSERT INTO `holiday` VALUES (8, '绿之日', NULL, '0504');
INSERT INTO `holiday` VALUES (9, '儿童之日', NULL, '0505');
INSERT INTO `holiday` VALUES (10, '海之日', NULL, '0715');
INSERT INTO `holiday` VALUES (11, '山之日', NULL, '0811');
INSERT INTO `holiday` VALUES (12, '敬老之日', NULL, '0916');
INSERT INTO `holiday` VALUES (13, '秋分之日', NULL, NULL);
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
  `audit_at` bigint(14) DEFAULT NULL COMMENT '审批时间',
  `audit_uid` int(11) DEFAULT NULL COMMENT '审批人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of leave
-- ----------------------------
BEGIN;
INSERT INTO `leave` VALUES (12, 40, 2, '2019-11-17 20:17:00', '2019-11-17 23:17:00', '3小时', 'pp', NULL, 1, 20191117111747, 20191117111747, NULL);
INSERT INTO `leave` VALUES (13, 40, 1, '2019-11-16 14:57:00', '2019-11-17 14:57:00', '1天(12小时)', 'aaaaa', NULL, 0, 20191114025722, 20191114025722, NULL);
INSERT INTO `leave` VALUES (14, 40, 2, '2019-11-22 16:09:00', '2019-11-22 19:09:00', '3小时', 'bbb', NULL, 0, 20191122081003, 20191122081003, NULL);
INSERT INTO `leave` VALUES (15, 40, 0, '2019-11-24 17:39:00', '2019-11-26 17:39:00', '2天(48小时)', '我就发哦', NULL, 1, 20191122053958, 20191123053958, NULL);
INSERT INTO `leave` VALUES (16, 40, 1, '2019-11-27 22:03:00', '2019-11-28 22:03:00', '2天(24小时)', '工作休息', NULL, 1, 20191123020433, NULL, NULL);
INSERT INTO `leave` VALUES (17, 40, 2, '2019-11-23 22:05:00', '2019-11-23 23:05:00', '1小时', '很少', NULL, 1, 20191123020619, NULL, NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (29, '李阳', '5038948090', 'quanta2006@163.com', 20191107000000, '6215 NE 92nd Dr C/O XEK076', '97253', 'bizplus', '部门1', '社长', 20191107000000, 20191107031412, 1, 'a', 1002, 'upload/Face_20191109101341.jpg');
INSERT INTO `user` VALUES (40, 'zhangsan', '135151515444', 'liyangtom@163.com', 20191114000000, 'wawefwf', '23111', 'bizplus', '部门1', '部长', 20191114000000, 20191114082130, 1, 'a', 1001, 'upload/Face_20191114122128.jpg');
INSERT INTO `user` VALUES (43, '李阳', '13515814446', 'tom@163.com', 20191115000000, 'Xindjxjm', '293884', 'bizplus', '部门1', '员工', 20191115000000, 20191115035058, 1, 'a', 1001, 'upload/Face_20191115075052.jpg');
INSERT INTO `user` VALUES (44, '王test2', '22', '22', 20191115000000, 'biz', '22', 'bizplus', '部门1', '员工', 20191015000000, 20191115053951, 1, '22', 1001, 'upload/Face_20191115083948.jpg');
INSERT INTO `user` VALUES (45, '小胡', '1234432112', 'qq', 20170916000000, 'qq', 'qq', 'bizplus', '部门1', '员工', 20151116000000, 20191116060512, 1, 'qq', 1001, 'upload/Face_20191116100401.jpg');
INSERT INTO `user` VALUES (47, 'Mm', 'Mm', 'm m', 20181117000000, 'Mm', 'Mm', 'bizplus', '部门1', '职位1', 20161117000000, 20191117035824, 1, 'mm', 1001, 'upload/Face_20191117035823.jpg');
INSERT INTO `user` VALUES (48, '王test3', '33', '33', 20191118000000, 'biz', '33', 'bizplus', '部门1', '部长', 20171118000000, 20191118051854, 1, '33', 1001, 'upload/Face_20191118081852.jpg');
INSERT INTO `user` VALUES (50, 'zz', 'zz', 'zz', 20181118000000, 'zz', 'zz', 'bizplus', '部门1', '职位1', 20171118000000, 20191118052540, 1, 'zz', 1001, 'upload/Face_20191118052540.jpg');
INSERT INTO `user` VALUES (51, 'Tt', 'Tt', 'tt', 20101118000000, 'Tt', 'Tt', 'bizplus', 'ssb', 'zr', 20161118000000, 20191118072959, 0, 'tt', 1002, 'upload/Face_20191118072957.jpg');
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
-- Procedure structure for PROC_CAL_GET_CARD_DAYC
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_CAL_GET_CARD_DAYC`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_CAL_GET_CARD_DAYC`(In `data` VARCHAR(16383))
BEGIN
  DECLARE _uid  BIGINT(14) DEFAULT NULL;
  DECLARE _day  BIGINT(14) DEFAULT NULL;
	
	SET _uid    = CONVERT(JSON_EXTRACT(data, '$.uid'), UNSIGNED);
	SET _day   = CONVERT(JSON_EXTRACT(data, '$.day'), UNSIGNED);
	select * from `clock` where clock_date=_day and uid = _uid;
	END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_CAL_GET_CARD_DAYD
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_CAL_GET_CARD_DAYD`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_CAL_GET_CARD_DAYD`(In `data` VARCHAR(16383))
BEGIN
  DECLARE _uid  BIGINT(14) DEFAULT NULL;
  DECLARE _day  BIGINT(14) DEFAULT NULL;
	
	SET _uid    = CONVERT(JSON_EXTRACT(data, '$.uid'), UNSIGNED);
	SET _day   = CONVERT(JSON_EXTRACT(data, '$.day'), UNSIGNED);
	
	select id,uid,type,DATE_FORMAT(`from`,'%Y-%m-%d %T') as `from`, DATE_FORMAT(`to`,'%Y-%m-%d %T') as `to`,
	dur,reason,status,create_at from `leave` 
	where 
	  (DATE_FORMAT(`from`,'%Y%m%d000000') = DATE_FORMAT(`to`,'%Y%m%d000000') and 
		 DATE_FORMAT(`from`,'%Y%m%d000000') = _day and uid = _uid and status=1) or 
		(DATE_FORMAT(`to`,'%Y%m%d') > DATE_FORMAT(`from`,'%Y%m%d') and 
		 DATE_FORMAT(`to`,'%Y%m%d000000') <> _day and 
		 DATE_FORMAT(`from`,'%Y%m%d000000') <= _day and 
		 DATE_FORMAT(`to`,'%Y%m%d000000') > _day and uid = _uid and status=1);

	END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_CAL_GET_CARD_DAYL
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_CAL_GET_CARD_DAYL`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_CAL_GET_CARD_DAYL`(In `data` VARCHAR(16383))
BEGIN
  DECLARE _uid  BIGINT(14) DEFAULT NULL;
  DECLARE _from  BIGINT(14) DEFAULT NULL;
	DECLARE _to   BIGINT(14) DEFAULT NULL;
	
	SET _uid    = CONVERT(JSON_EXTRACT(data, '$.uid'), UNSIGNED);
	SET _from   = CONVERT(JSON_EXTRACT(data, '$.from'), UNSIGNED);
	SET _to     = CONVERT(JSON_EXTRACT(data, '$.to'), UNSIGNED);
	select * from `leave` where create_at>=_from and create_at<=_to and uid = _uid and status = 0;
	END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_CAL_GET_CARD_MONTH
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_CAL_GET_CARD_MONTH`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_CAL_GET_CARD_MONTH`(In `data` VARCHAR(16383))
BEGIN

  DECLARE _uid int(11) DEFAULT NULL;
	DECLARE _from BIGINT(14) DEFAULT NULL;
	DECLARE _to   BIGINT(14) DEFAULT NULL;
	
	
	SET _uid   = CONVERT(JSON_EXTRACT(data, '$.uid'), SIGNED);
	SET _from  = CONVERT(JSON_EXTRACT(data, '$.from'), UNSIGNED);
	SET _to    = CONVERT(JSON_EXTRACT(data, '$.to'), UNSIGNED);
	
	
	select * from clock where uid = _uid and clock_date>_from and clock_date<_to;
--   select id,uid,clock_date,clock_in,clock_out,rest_time,company,clock_type,
	END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_CAL_GET_LEAVE_MONTH
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_CAL_GET_LEAVE_MONTH`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_CAL_GET_LEAVE_MONTH`(In `data` VARCHAR(16383))
BEGIN

  DECLARE _uid  BIGINT(14) DEFAULT NULL;
	DECLARE _from BIGINT(14) DEFAULT NULL;
	DECLARE _to   BIGINT(14) DEFAULT NULL;
	
	
	SET _uid    = CONVERT(JSON_EXTRACT(data, '$.uid'), UNSIGNED);
	SET _from   = CONVERT(JSON_EXTRACT(data, '$.from'), UNSIGNED);
	SET _to     = CONVERT(JSON_EXTRACT(data, '$.to'), UNSIGNED);
	
	
-- 	select * from `leave` where create_at>=_from and create_at<=_to and uid = _uid and status=1;
	select id,uid,type, DATE_FORMAT(`from`,'%Y-%m-%d %T') as `from`, DATE_FORMAT(`to`,'%Y-%m-%d %T') as `to`,
	dur,reason,status,create_at from `leave` where create_at>=_from and create_at<=_to and uid = _uid and status=1;
	
	
	END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_COMP_DEPT_LIST
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_COMP_DEPT_LIST`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_COMP_DEPT_LIST`()
BEGIN
	select * from comp_dept;
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for PROC_COMP_POS_LIST
-- ----------------------------
DROP PROCEDURE IF EXISTS `PROC_COMP_POS_LIST`;
delimiter ;;
CREATE PROCEDURE `attence`.`PROC_COMP_POS_LIST`()
BEGIN
	select * from comp_pos;
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
	DECLARE yesterday BIGINT(14) DEFAULT NULL;
	DECLARE apdt BIGINT(14) DEFAULT NULL;
	
	DECLARE exist BIGINT UNSIGNED;
	
	SET uid 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.uid'));
	SET clock_date	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.clock_date'));
	SET yesterday	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.yesterday'));
	
	SET exist = FN_CLOCK_EXIST(uid, clock_date);

-- 	该用户当天无打卡记录
	if exist = 0 then
		SET apdt 	= JSON_UNQUOTE(JSON_EXTRACT(data,'$.apdt'));
		
		insert into clock(`uid`, `clock_date`, `clock_type`, `clock_status`, `apdt`) 
		values(uid, clock_date, 0, 0, apdt);
	end if;
		
	select * from clock where clock.uid = uid and clock.clock_date = clock_date or clock.clock_date = yesterday;
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
