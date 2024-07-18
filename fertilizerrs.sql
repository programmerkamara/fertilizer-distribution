-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: fertilizerrs
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
INSERT INTO `auth_group` VALUES (1,'Admin'),(3,'Director'),(5,'Farmer'),(2,'FRO'),(4,'StoreKeeper');
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=361 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
INSERT INTO `auth_group_permissions` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,5),(6,1,6),(7,1,7),(8,1,8),(9,1,9),(10,1,10),(11,1,11),(12,1,12),(13,1,13),(14,1,14),(15,1,15),(16,1,16),(17,1,17),(18,1,18),(19,1,19),(20,1,20),(21,1,21),(22,1,22),(23,1,23),(24,1,24),(25,1,25),(26,1,26),(27,1,27),(28,1,28),(29,1,29),(30,1,30),(31,1,31),(32,1,32),(33,1,33),(34,1,34),(35,1,35),(36,1,36),(37,1,37),(38,1,38),(39,1,39),(40,1,40),(41,1,41),(42,1,42),(43,1,43),(44,1,44),(45,1,45),(46,1,46),(47,1,47),(48,1,48),(49,1,49),(50,1,50),(51,1,51),(52,1,52),(53,1,53),(54,1,54),(55,1,55),(56,1,56),(57,1,57),(58,1,58),(59,1,59),(60,1,60),(61,1,61),(62,1,62),(63,1,63),(64,1,64),(65,1,65),(66,1,66),(67,1,67),(68,1,68),(69,1,69),(70,1,70),(71,1,71),(72,1,72),(73,2,1),(74,2,2),(75,2,3),(76,2,4),(77,2,5),(78,2,6),(79,2,7),(80,2,8),(81,2,9),(82,2,10),(83,2,11),(84,2,12),(85,2,13),(86,2,14),(87,2,15),(88,2,16),(89,2,17),(90,2,18),(91,2,19),(92,2,20),(93,2,21),(94,2,22),(95,2,23),(96,2,24),(97,2,25),(98,2,26),(99,2,27),(100,2,28),(101,2,29),(102,2,30),(103,2,31),(104,2,32),(105,2,33),(106,2,34),(107,2,35),(108,2,36),(109,2,37),(110,2,38),(111,2,39),(112,2,40),(113,2,41),(114,2,42),(115,2,43),(116,2,44),(117,2,45),(118,2,46),(119,2,47),(120,2,48),(121,2,49),(122,2,50),(123,2,51),(124,2,52),(125,2,53),(126,2,54),(127,2,55),(128,2,56),(129,2,57),(130,2,58),(131,2,59),(132,2,60),(133,2,61),(134,2,62),(135,2,63),(136,2,64),(137,2,65),(138,2,66),(139,2,67),(140,2,68),(141,2,69),(142,2,70),(143,2,71),(144,2,72),(145,3,1),(146,3,2),(147,3,3),(148,3,4),(149,3,5),(150,3,6),(151,3,7),(152,3,8),(153,3,9),(154,3,10),(155,3,11),(156,3,12),(157,3,13),(158,3,14),(159,3,15),(160,3,16),(161,3,17),(162,3,18),(163,3,19),(164,3,20),(165,3,21),(166,3,22),(167,3,23),(168,3,24),(169,3,25),(170,3,26),(171,3,27),(172,3,28),(173,3,29),(174,3,30),(175,3,31),(176,3,32),(177,3,33),(178,3,34),(179,3,35),(180,3,36),(181,3,37),(182,3,38),(183,3,39),(184,3,40),(185,3,41),(186,3,42),(187,3,43),(188,3,44),(189,3,45),(190,3,46),(191,3,47),(192,3,48),(193,3,49),(194,3,50),(195,3,51),(196,3,52),(197,3,53),(198,3,54),(199,3,55),(200,3,56),(201,3,57),(202,3,58),(203,3,59),(204,3,60),(205,3,61),(206,3,62),(207,3,63),(208,3,64),(209,3,65),(210,3,66),(211,3,67),(212,3,68),(213,3,69),(214,3,70),(215,3,71),(216,3,72),(217,4,1),(218,4,2),(219,4,3),(220,4,4),(221,4,5),(222,4,6),(223,4,7),(224,4,8),(225,4,9),(226,4,10),(227,4,11),(228,4,12),(229,4,13),(230,4,14),(231,4,15),(232,4,16),(233,4,17),(234,4,18),(235,4,19),(236,4,20),(237,4,21),(238,4,22),(239,4,23),(240,4,24),(241,4,25),(242,4,26),(243,4,27),(244,4,28),(245,4,29),(246,4,30),(247,4,31),(248,4,32),(249,4,33),(250,4,34),(251,4,35),(252,4,36),(253,4,37),(254,4,38),(255,4,39),(256,4,40),(257,4,41),(258,4,42),(259,4,43),(260,4,44),(261,4,45),(262,4,46),(263,4,47),(264,4,48),(265,4,49),(266,4,50),(267,4,51),(268,4,52),(269,4,53),(270,4,54),(271,4,55),(272,4,56),(273,4,57),(274,4,58),(275,4,59),(276,4,60),(277,4,61),(278,4,62),(279,4,63),(280,4,64),(281,4,65),(282,4,66),(283,4,67),(284,4,68),(285,4,69),(286,4,70),(287,4,71),(288,4,72),(289,5,1),(290,5,2),(291,5,3),(292,5,4),(293,5,5),(294,5,6),(295,5,7),(296,5,8),(297,5,9),(298,5,10),(299,5,11),(300,5,12),(301,5,13),(302,5,14),(303,5,15),(304,5,16),(305,5,17),(306,5,18),(307,5,19),(308,5,20),(309,5,21),(310,5,22),(311,5,23),(312,5,24),(313,5,25),(314,5,26),(315,5,27),(316,5,28),(317,5,29),(318,5,30),(319,5,31),(320,5,32),(321,5,33),(322,5,34),(323,5,35),(324,5,36),(325,5,37),(326,5,38),(327,5,39),(328,5,40),(329,5,41),(330,5,42),(331,5,43),(332,5,44),(333,5,45),(334,5,46),(335,5,47),(336,5,48),(337,5,49),(338,5,50),(339,5,51),(340,5,52),(341,5,53),(342,5,54),(343,5,55),(344,5,56),(345,5,57),(346,5,58),(347,5,59),(348,5,60),(349,5,61),(350,5,62),(351,5,63),(352,5,64),(353,5,65),(354,5,66),(355,5,67),(356,5,68),(357,5,69),(358,5,70),(359,5,71),(360,5,72);
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add fertilizer',6,'add_fertilizer'),(22,'Can change fertilizer',6,'change_fertilizer'),(23,'Can delete fertilizer',6,'delete_fertilizer'),(24,'Can view fertilizer',6,'view_fertilizer'),(25,'Can add user',7,'add_customuser'),(26,'Can change user',7,'change_customuser'),(27,'Can delete user',7,'delete_customuser'),(28,'Can view user',7,'view_customuser'),(29,'Can add admin',8,'add_admin'),(30,'Can change admin',8,'change_admin'),(31,'Can delete admin',8,'delete_admin'),(32,'Can view admin',8,'view_admin'),(33,'Can add director of agriculture',9,'add_directorofagriculture'),(34,'Can change director of agriculture',9,'change_directorofagriculture'),(35,'Can delete director of agriculture',9,'delete_directorofagriculture'),(36,'Can view director of agriculture',9,'view_directorofagriculture'),(37,'Can add farmer',10,'add_farmer'),(38,'Can change farmer',10,'change_farmer'),(39,'Can delete farmer',10,'delete_farmer'),(40,'Can view farmer',10,'view_farmer'),(41,'Can add farmer registration officer',11,'add_farmerregistrationofficer'),(42,'Can change farmer registration officer',11,'change_farmerregistrationofficer'),(43,'Can delete farmer registration officer',11,'delete_farmerregistrationofficer'),(44,'Can view farmer registration officer',11,'view_farmerregistrationofficer'),(45,'Can add fertilizer application',12,'add_fertilizerapplication'),(46,'Can change fertilizer application',12,'change_fertilizerapplication'),(47,'Can delete fertilizer application',12,'delete_fertilizerapplication'),(48,'Can view fertilizer application',12,'view_fertilizerapplication'),(49,'Can add store keeper',13,'add_storekeeper'),(50,'Can change store keeper',13,'change_storekeeper'),(51,'Can delete store keeper',13,'delete_storekeeper'),(52,'Can view store keeper',13,'view_storekeeper'),(53,'Can add fertilizer distribution',14,'add_fertilizerdistribution'),(54,'Can change fertilizer distribution',14,'change_fertilizerdistribution'),(55,'Can delete fertilizer distribution',14,'delete_fertilizerdistribution'),(56,'Can view fertilizer distribution',14,'view_fertilizerdistribution'),(57,'Can add assigned fertilizer',15,'add_assignedfertilizer'),(58,'Can change assigned fertilizer',15,'change_assignedfertilizer'),(59,'Can delete assigned fertilizer',15,'delete_assignedfertilizer'),(60,'Can view assigned fertilizer',15,'view_assignedfertilizer'),(61,'Can add valid code',16,'add_validcode'),(62,'Can change valid code',16,'change_validcode'),(63,'Can delete valid code',16,'delete_validcode'),(64,'Can view valid code',16,'view_validcode'),(65,'Can add blacklisted token',17,'add_blacklistedtoken'),(66,'Can change blacklisted token',17,'change_blacklistedtoken'),(67,'Can delete blacklisted token',17,'delete_blacklistedtoken'),(68,'Can view blacklisted token',17,'view_blacklistedtoken'),(69,'Can add outstanding token',18,'add_outstandingtoken'),(70,'Can change outstanding token',18,'change_outstandingtoken'),(71,'Can delete outstanding token',18,'delete_outstandingtoken'),(72,'Can view outstanding token',18,'view_outstandingtoken');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_admin`
--

DROP TABLE IF EXISTS `core_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_admin` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `phone` varchar(15) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` longtext NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `core_admin_user_id_8bc0cb90_fk_core_customuser_id` FOREIGN KEY (`user_id`) REFERENCES `core_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_admin`
--

LOCK TABLES `core_admin` WRITE;
/*!40000 ALTER TABLE `core_admin` DISABLE KEYS */;
INSERT INTO `core_admin` VALUES (1,'076878870','Male','Makeni','2024-07-09 16:23:48.081797','2024-07-14 16:27:23.031811',1);
/*!40000 ALTER TABLE `core_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_assignedfertilizer`
--

DROP TABLE IF EXISTS `core_assignedfertilizer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_assignedfertilizer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity_assigned` int NOT NULL,
  `unique_code` varchar(100) NOT NULL,
  `assigned_at` datetime(6) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `farmer_id` bigint NOT NULL,
  `fertilizer_application_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_code` (`unique_code`),
  KEY `core_assignedfertilizer_farmer_id_5c6f602c_fk_core_farmer_id` (`farmer_id`),
  KEY `core_assignedfertili_fertilizer_applicati_de1a5141_fk_core_fert` (`fertilizer_application_id`),
  CONSTRAINT `core_assignedfertili_fertilizer_applicati_de1a5141_fk_core_fert` FOREIGN KEY (`fertilizer_application_id`) REFERENCES `core_fertilizerapplication` (`id`),
  CONSTRAINT `core_assignedfertilizer_farmer_id_5c6f602c_fk_core_farmer_id` FOREIGN KEY (`farmer_id`) REFERENCES `core_farmer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_assignedfertilizer`
--

LOCK TABLES `core_assignedfertilizer` WRITE;
/*!40000 ALTER TABLE `core_assignedfertilizer` DISABLE KEYS */;
INSERT INTO `core_assignedfertilizer` VALUES (1,10,'1x232','2024-07-12 10:38:20.728729','2024-07-12 10:38:20.728729','2024-07-12 10:38:20.728729',3,3),(2,30,'1x23','2024-07-12 10:43:13.319962','2024-07-12 10:43:13.320961','2024-07-12 10:43:13.320961',3,3),(3,26,'1q1','2024-07-12 10:48:21.528158','2024-07-12 10:48:21.528158','2024-07-12 10:48:21.528158',1,1),(4,10,'1q22','2024-07-12 19:08:46.342065','2024-07-12 19:08:46.342065','2024-07-12 19:08:46.342065',2,5),(5,10,'12q1','2024-07-12 20:07:47.021748','2024-07-12 20:07:47.021748','2024-07-12 20:07:47.021748',2,9),(6,12,'123X2','2024-07-12 22:28:15.216226','2024-07-12 22:28:15.216226','2024-07-12 22:28:15.216226',2,9),(7,45,'1x23q','2024-07-13 20:06:30.939271','2024-07-13 20:06:30.939271','2024-07-13 20:06:30.939271',2,9),(8,11,'12q11','2024-07-13 20:22:12.569232','2024-07-13 20:22:12.569232','2024-07-13 20:22:12.569232',1,2),(9,6,'uuuu','2024-07-13 20:39:13.896182','2024-07-13 20:39:13.896182','2024-07-13 20:39:13.896182',2,1),(10,77,'jjjkjh','2024-07-13 20:47:27.399496','2024-07-13 20:47:27.399496','2024-07-13 20:47:27.399496',1,1);
/*!40000 ALTER TABLE `core_assignedfertilizer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_customuser`
--

DROP TABLE IF EXISTS `core_customuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_customuser` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `user_type` smallint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `core_customuser_chk_1` CHECK ((`user_type` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_customuser`
--

LOCK TABLES `core_customuser` WRITE;
/*!40000 ALTER TABLE `core_customuser` DISABLE KEYS */;
INSERT INTO `core_customuser` VALUES (1,'pbkdf2_sha256$720000$47vBBiXJ1q1sUTPQflk1YN$sm5Xt90DagpqhKfY2n4FQ+ZGCH8j1ec5py9HM/S2qwg=','2024-07-14 16:27:23.015799',1,'med','','','',1,1,'2024-07-09 16:23:47.419242',1),(3,'pbkdf2_sha256$720000$y4Axo8t6zO6J5oXX13bKeg$munq18AeVoi9AL34SHW9l4DXY7/XQEjoynVJRBbhCqo=','2024-07-14 16:40:21.507904',0,'StoreKeeper','mohamed','kamara','group2@gmail.com',1,1,'2024-07-09 16:26:02.661774',5),(4,'pbkdf2_sha256$720000$eFaaFpCMVeddfDp0G3Ac13$zpLGXw01nSmRE1QD1MmnChHQDoEGlDZgPv/C/FOBuR8=','2024-07-13 19:33:49.662385',0,'Farmer','mohamed','kamara','group2@gmail.com',1,1,'2024-07-09 16:27:34.407260',3),(5,'pbkdf2_sha256$720000$Xk4KjGTGbUq7iFnfsDCbU5$o5MOqF7inUmLMaz4lDfVHU6+AiXdDdWbVPoLO1OtOrw=',NULL,0,'programmer','mohamed','kamara','group2@gmail.com',1,1,'2024-07-09 16:29:46.946438',3),(6,'1111',NULL,0,'maskStore','sahr solomon','moiwa','mohamedkamara97@gmail.com',1,1,'2024-07-09 16:57:46.000000',5),(7,'pbkdf2_sha256$720000$MXlBSWcRprGrc18zoSEYXn$5H/ASv7YAVewk8Sdvwk9vmOI9gM0Fg+JsR5PIE28BOs=','2024-07-13 11:34:55.698869',0,'Elsie@123','Elsie','Bangura','elsiebangura3@gmail.com',1,1,'2024-07-10 11:20:08.327573',5),(8,'pbkdf2_sha256$720000$XjhRd3kXDF71yVs7TeXQOw$0EOfo423lrOMeX21Ab7J2fGt/2DSgj5aDmFjX/OFJJQ=','2024-07-14 16:32:38.329348',0,'Modish','Modie','Gbla','modish@gmail.com',1,1,'2024-07-10 11:36:25.773012',4),(9,'pbkdf2_sha256$720000$JYurWMTDUfGrpBLxSlgBYs$GiJzunNp+NUCESaKFuHSsNODTMQCsJQuKb/iIejYtnw=',NULL,0,'JamalFarmer','Abu','Jamal','group2@gmail.com',1,1,'2024-07-10 11:39:36.087949',3),(10,'pbkdf2_sha256$720000$GFjWbSx9VJA7FbpndsF34J$FBwHN0HGTdYPWDiKwwIo1zEyX4caCjEEsWDhLw71MVI=',NULL,0,'Mak','mohamed','kamara','group2@gmail.com',1,1,'2024-07-11 09:14:42.280021',3),(12,'pbkdf2_sha256$720000$3M0t2NN4LbpEXK3IevaMe1$C2hBR8yQpwJNmsDWGRvzkLKszL6uiz9008mUnxltQgw=','2024-07-13 12:12:25.900637',0,'Director','Programmer','Kamara','programmer@gmail.com',1,1,'2024-07-13 12:11:34.243346',2),(13,'pbkdf2_sha256$720000$tDMl3yn5jAr7Ko1LE2dHwe$CEJQ8/X4MBxmP8e/EbvLikEEUmRbIX/ucKFFVzZCHKc=',NULL,0,'Max','mmmm','mmmmm','mohamedkamara97@gmail.com',1,1,'2024-07-13 22:36:39.672865',2),(15,'pbkdf2_sha256$720000$bWZZyJOHRqDlEzRx0hvzW4$Eonov/O4UcgPyvODqBKgQnjXiwiS/JFmOaAhZQmz5Nw=','2024-07-14 16:48:03.338916',0,'jamal','jamal','kallon','jamal@gmail.com',1,1,'2024-07-14 16:33:51.567571',3);
/*!40000 ALTER TABLE `core_customuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_customuser_groups`
--

DROP TABLE IF EXISTS `core_customuser_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_customuser_groups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customuser_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `core_customuser_groups_customuser_id_group_id_7990e9c6_uniq` (`customuser_id`,`group_id`),
  KEY `core_customuser_groups_group_id_301aeff4_fk_auth_group_id` (`group_id`),
  CONSTRAINT `core_customuser_grou_customuser_id_976bc4d7_fk_core_cust` FOREIGN KEY (`customuser_id`) REFERENCES `core_customuser` (`id`),
  CONSTRAINT `core_customuser_groups_group_id_301aeff4_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_customuser_groups`
--

LOCK TABLES `core_customuser_groups` WRITE;
/*!40000 ALTER TABLE `core_customuser_groups` DISABLE KEYS */;
INSERT INTO `core_customuser_groups` VALUES (1,6,4);
/*!40000 ALTER TABLE `core_customuser_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_customuser_user_permissions`
--

DROP TABLE IF EXISTS `core_customuser_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_customuser_user_permissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customuser_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `core_customuser_user_per_customuser_id_permission_49ea742a_uniq` (`customuser_id`,`permission_id`),
  KEY `core_customuser_user_permission_id_80ceaab9_fk_auth_perm` (`permission_id`),
  CONSTRAINT `core_customuser_user_customuser_id_ebd2ce6c_fk_core_cust` FOREIGN KEY (`customuser_id`) REFERENCES `core_customuser` (`id`),
  CONSTRAINT `core_customuser_user_permission_id_80ceaab9_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_customuser_user_permissions`
--

LOCK TABLES `core_customuser_user_permissions` WRITE;
/*!40000 ALTER TABLE `core_customuser_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `core_customuser_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_directorofagriculture`
--

DROP TABLE IF EXISTS `core_directorofagriculture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_directorofagriculture` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `phone` varchar(15) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` longtext NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `core_directorofagric_user_id_875b3277_fk_core_cust` FOREIGN KEY (`user_id`) REFERENCES `core_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_directorofagriculture`
--

LOCK TABLES `core_directorofagriculture` WRITE;
/*!40000 ALTER TABLE `core_directorofagriculture` DISABLE KEYS */;
INSERT INTO `core_directorofagriculture` VALUES (1,'','','','2024-07-13 12:11:35.185412','2024-07-13 12:12:25.908632',12),(2,'','','','2024-07-13 22:36:40.483079','2024-07-13 22:36:40.483079',13);
/*!40000 ALTER TABLE `core_directorofagriculture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_farmer`
--

DROP TABLE IF EXISTS `core_farmer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_farmer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `farmer_type` varchar(20) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `address` longtext NOT NULL,
  `contact_details` longtext NOT NULL,
  `farm_details` longtext NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `core_farmer_user_id_3d9ae596_fk_core_customuser_id` FOREIGN KEY (`user_id`) REFERENCES `core_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_farmer`
--

LOCK TABLES `core_farmer` WRITE;
/*!40000 ALTER TABLE `core_farmer` DISABLE KEYS */;
INSERT INTO `core_farmer` VALUES (1,'Individual','09988765','fw','fwq','wfq','2024-07-09 16:27:35.187529','2024-07-13 19:33:49.679387',4),(2,'CBO','88787785','Makeni','mohhh@111','ed','2024-07-09 16:29:47.742197','2024-07-11 10:03:33.477456',5),(3,'NGO','09988765','Makeni','IBS','ISB','2024-07-10 11:39:38.908152','2024-07-11 11:02:20.038585',9),(6,'CBO','077232455','yoni','jamal@facebook.com','corn fARM','2024-07-14 16:33:53.550111','2024-07-14 16:48:03.350919',15);
/*!40000 ALTER TABLE `core_farmer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_farmerregistrationofficer`
--

DROP TABLE IF EXISTS `core_farmerregistrationofficer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_farmerregistrationofficer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `phone` varchar(15) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` longtext NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `core_farmerregistrat_user_id_35c423b0_fk_core_cust` FOREIGN KEY (`user_id`) REFERENCES `core_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_farmerregistrationofficer`
--

LOCK TABLES `core_farmerregistrationofficer` WRITE;
/*!40000 ALTER TABLE `core_farmerregistrationofficer` DISABLE KEYS */;
INSERT INTO `core_farmerregistrationofficer` VALUES (2,'','','','2024-07-10 11:36:29.524262','2024-07-14 16:32:38.342601',8);
/*!40000 ALTER TABLE `core_farmerregistrationofficer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_fertilizer`
--

DROP TABLE IF EXISTS `core_fertilizer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_fertilizer` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `fertilizer_type` varchar(20) NOT NULL,
  `quantity` int unsigned NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `added_by_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `core_fertilizer_added_by_id_c88f4cd2_fk_core_storekeeper_id` (`added_by_id`),
  CONSTRAINT `core_fertilizer_added_by_id_c88f4cd2_fk_core_storekeeper_id` FOREIGN KEY (`added_by_id`) REFERENCES `core_storekeeper` (`id`),
  CONSTRAINT `core_fertilizer_chk_1` CHECK ((`quantity` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_fertilizer`
--

LOCK TABLES `core_fertilizer` WRITE;
/*!40000 ALTER TABLE `core_fertilizer` DISABLE KEYS */;
INSERT INTO `core_fertilizer` VALUES (1,'NPK:20:20',400,'2024-07-09 16:57:23.137881',1),(2,'NPK:20:20',255,'2024-07-09 17:00:04.042388',1),(3,'NPK:24:25',25,'2024-07-09 17:00:17.322720',2),(4,'NPK:50:50',99,'2024-07-09 17:52:39.911681',2),(5,'NPK:50:50',500,'2024-07-09 17:52:49.813716',1),(6,'NPK:24:25',89,'2024-07-09 18:48:56.964093',2),(7,'NPK:24:25',200,'2024-07-10 11:33:14.840269',3),(8,'NPK:24:25',10,'2024-07-11 12:36:02.413195',1),(9,'NPK:50:50',200,'2024-07-14 16:44:58.076947',1);
/*!40000 ALTER TABLE `core_fertilizer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_fertilizerapplication`
--

DROP TABLE IF EXISTS `core_fertilizerapplication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_fertilizerapplication` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity_needed` int unsigned NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `farmer_id` bigint NOT NULL,
  `fertilizer_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `core_fertilizerapplication_farmer_id_a323dc4c_fk_core_farmer_id` (`farmer_id`),
  KEY `core_fertilizerappli_fertilizer_id_0e105f01_fk_core_fert` (`fertilizer_id`),
  CONSTRAINT `core_fertilizerappli_fertilizer_id_0e105f01_fk_core_fert` FOREIGN KEY (`fertilizer_id`) REFERENCES `core_fertilizer` (`id`),
  CONSTRAINT `core_fertilizerapplication_farmer_id_a323dc4c_fk_core_farmer_id` FOREIGN KEY (`farmer_id`) REFERENCES `core_farmer` (`id`),
  CONSTRAINT `core_fertilizerapplication_chk_1` CHECK ((`quantity_needed` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_fertilizerapplication`
--

LOCK TABLES `core_fertilizerapplication` WRITE;
/*!40000 ALTER TABLE `core_fertilizerapplication` DISABLE KEYS */;
INSERT INTO `core_fertilizerapplication` VALUES (1,10,'Approved','2024-07-09 22:41:08.929596','2024-07-13 19:20:45.349569',1,1),(2,20,'Approved','2024-07-09 22:41:51.583768','2024-07-13 19:20:47.092055',1,2),(3,10,'Approved','2024-07-12 10:34:51.808845','2024-07-13 19:20:48.570007',3,6),(4,20,'Approved','2024-07-12 13:31:29.669340','2024-07-13 19:20:49.977287',1,1),(5,20,'Approved','2024-07-12 14:17:50.778316','2024-07-13 19:20:51.302640',1,1),(6,33,'Pending','2024-07-12 14:18:23.661001','2024-07-12 17:03:41.135465',1,1),(7,55,'Rejected','2024-07-12 15:40:55.152128','2024-07-13 18:57:52.413927',1,1),(8,10,'Approved','2024-07-12 16:08:26.574905','2024-07-12 17:03:19.923111',1,1),(9,150,'Approved','2024-07-12 16:10:58.077496','2024-07-12 17:05:27.142973',2,5),(10,55,'Pending','2024-07-13 10:25:26.931759','2024-07-13 10:25:26.932763',3,3),(11,300,'Pending','2024-07-14 16:50:04.639256','2024-07-14 16:50:04.639256',6,4);
/*!40000 ALTER TABLE `core_fertilizerapplication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_fertilizerdistribution`
--

DROP TABLE IF EXISTS `core_fertilizerdistribution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_fertilizerdistribution` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `fertilizer_type` varchar(20) NOT NULL,
  `quantity` int NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `farmer_id` bigint NOT NULL,
  `distributed_by_id` bigint NOT NULL,
  `validation_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `validation_code` (`validation_code`),
  KEY `core_fertilizerdistr_distributed_by_id_e5a781f3_fk_core_stor` (`distributed_by_id`),
  KEY `core_fertilizerdistribution_farmer_id_0e3e2801_fk_core_farmer_id` (`farmer_id`),
  CONSTRAINT `core_fertilizerdistr_distributed_by_id_e5a781f3_fk_core_stor` FOREIGN KEY (`distributed_by_id`) REFERENCES `core_storekeeper` (`id`),
  CONSTRAINT `core_fertilizerdistribution_farmer_id_0e3e2801_fk_core_farmer_id` FOREIGN KEY (`farmer_id`) REFERENCES `core_farmer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_fertilizerdistribution`
--

LOCK TABLES `core_fertilizerdistribution` WRITE;
/*!40000 ALTER TABLE `core_fertilizerdistribution` DISABLE KEYS */;
INSERT INTO `core_fertilizerdistribution` VALUES (11,'NPK:20:20',10,'2024-07-12 18:10:02.276772',1,1,'1x232'),(12,'NPK:50:50',10,'2024-07-12 18:26:54.996348',2,1,'1x2322'),(13,'NPK:50:50',10,'2024-07-12 20:10:06.314226',2,1,'12q1');
/*!40000 ALTER TABLE `core_fertilizerdistribution` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_storekeeper`
--

DROP TABLE IF EXISTS `core_storekeeper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_storekeeper` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `phone` varchar(15) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` longtext NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `core_storekeeper_user_id_db6f4d91_fk_core_customuser_id` FOREIGN KEY (`user_id`) REFERENCES `core_customuser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_storekeeper`
--

LOCK TABLES `core_storekeeper` WRITE;
/*!40000 ALTER TABLE `core_storekeeper` DISABLE KEYS */;
INSERT INTO `core_storekeeper` VALUES (1,'88787785','Female','qwr','2024-07-09 16:26:03.417867','2024-07-14 16:40:21.518757',3),(2,'88787785','Male','yugjgu','2024-07-09 16:58:28.738920','2024-07-09 16:58:47.704957',6),(3,'','','','2024-07-10 11:20:11.977528','2024-07-13 11:34:55.706870',7);
/*!40000 ALTER TABLE `core_storekeeper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_validcode`
--

DROP TABLE IF EXISTS `core_validcode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `core_validcode` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `validation_code` varchar(100) NOT NULL,
  `assigned_fertilizer_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `assigned_fertilizer_id` (`assigned_fertilizer_id`),
  CONSTRAINT `core_validcode_assigned_fertilizer__39f5d659_fk_core_assi` FOREIGN KEY (`assigned_fertilizer_id`) REFERENCES `core_assignedfertilizer` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_validcode`
--

LOCK TABLES `core_validcode` WRITE;
/*!40000 ALTER TABLE `core_validcode` DISABLE KEYS */;
INSERT INTO `core_validcode` VALUES (1,'1x232',1),(2,'1x232',2);
/*!40000 ALTER TABLE `core_validcode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_core_customuser_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_core_customuser_id` FOREIGN KEY (`user_id`) REFERENCES `core_customuser` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2024-07-09 16:49:14.575665','1','Admin',1,'[{\"added\": {}}]',3,1),(2,'2024-07-09 16:49:24.445451','2','FRO',1,'[{\"added\": {}}]',3,1),(3,'2024-07-09 16:49:31.748352','3','Director',1,'[{\"added\": {}}]',3,1),(4,'2024-07-09 16:49:44.412353','3','Director',2,'[{\"changed\": {\"fields\": [\"Permissions\"]}}]',3,1),(5,'2024-07-09 16:49:53.332516','4','StoreKeeper',1,'[{\"added\": {}}]',3,1),(6,'2024-07-09 16:50:06.492908','5','Farmer',1,'[{\"added\": {}}]',3,1),(7,'2024-07-09 16:50:31.584094','1','Admin object (1)',2,'[{\"changed\": {\"fields\": [\"Phone\", \"Gender\", \"Address\"]}}]',8,1),(8,'2024-07-09 16:51:15.727917','2','programmer - CBO',2,'[{\"changed\": {\"fields\": [\"Farmer type\", \"Phone\", \"Address\", \"Contact details\", \"Farm details\"]}}]',10,1),(9,'2024-07-09 16:51:37.802035','1','Farmer - Individual',2,'[{\"changed\": {\"fields\": [\"Farmer type\", \"Phone\", \"Address\", \"Contact details\", \"Farm details\"]}}]',10,1),(10,'2024-07-09 16:55:47.560382','1','StoreKeeper',2,'[{\"changed\": {\"fields\": [\"Phone\", \"Gender\", \"Address\"]}}]',13,1),(11,'2024-07-09 16:58:28.744921','6','maskStore',1,'[{\"added\": {}}]',7,1),(12,'2024-07-09 16:58:47.705990','2','maskStore',2,'[{\"changed\": {\"fields\": [\"Phone\", \"Gender\", \"Address\"]}}]',13,1),(13,'2024-07-12 18:10:02.278809','11','NPK:20:20 - 10 kg distributed to Farmer',1,'[{\"added\": {}}]',14,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'contenttypes','contenttype'),(8,'core','admin'),(15,'core','assignedfertilizer'),(7,'core','customuser'),(9,'core','directorofagriculture'),(10,'core','farmer'),(11,'core','farmerregistrationofficer'),(6,'core','fertilizer'),(12,'core','fertilizerapplication'),(14,'core','fertilizerdistribution'),(13,'core','storekeeper'),(16,'core','validcode'),(5,'sessions','session'),(17,'token_blacklist','blacklistedtoken'),(18,'token_blacklist','outstandingtoken');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2024-07-09 16:21:06.630978'),(2,'contenttypes','0002_remove_content_type_name','2024-07-09 16:21:06.746975'),(3,'auth','0001_initial','2024-07-09 16:21:07.252696'),(4,'auth','0002_alter_permission_name_max_length','2024-07-09 16:21:07.400689'),(5,'auth','0003_alter_user_email_max_length','2024-07-09 16:21:07.423727'),(6,'auth','0004_alter_user_username_opts','2024-07-09 16:21:07.441693'),(7,'auth','0005_alter_user_last_login_null','2024-07-09 16:21:07.461692'),(8,'auth','0006_require_contenttypes_0002','2024-07-09 16:21:07.475692'),(9,'auth','0007_alter_validators_add_error_messages','2024-07-09 16:21:07.491695'),(10,'auth','0008_alter_user_username_max_length','2024-07-09 16:21:07.504694'),(11,'auth','0009_alter_user_last_name_max_length','2024-07-09 16:21:07.527721'),(12,'auth','0010_alter_group_name_max_length','2024-07-09 16:21:07.590693'),(13,'auth','0011_update_proxy_permissions','2024-07-09 16:21:07.604689'),(14,'auth','0012_alter_user_first_name_max_length','2024-07-09 16:21:07.624691'),(15,'core','0001_initial','2024-07-09 16:21:10.203089'),(16,'admin','0001_initial','2024-07-09 16:21:10.468088'),(17,'admin','0002_logentry_remove_auto_add','2024-07-09 16:21:10.486129'),(18,'admin','0003_logentry_add_action_flag_choices','2024-07-09 16:21:10.505092'),(19,'core','0002_rename_farmer_name_fertilizerdistribution_farmer','2024-07-09 16:21:10.710089'),(20,'sessions','0001_initial','2024-07-09 16:21:10.792088'),(21,'token_blacklist','0001_initial','2024-07-09 16:21:11.097265'),(22,'token_blacklist','0002_outstandingtoken_jti_hex','2024-07-09 16:21:11.161282'),(23,'token_blacklist','0003_auto_20171017_2007','2024-07-09 16:21:11.184266'),(24,'token_blacklist','0004_auto_20171017_2013','2024-07-09 16:21:11.325006'),(25,'token_blacklist','0005_remove_outstandingtoken_jti','2024-07-09 16:21:11.445045'),(26,'token_blacklist','0006_auto_20171017_2113','2024-07-09 16:21:11.498093'),(27,'token_blacklist','0007_auto_20171017_2214','2024-07-09 16:21:11.851144'),(28,'token_blacklist','0008_migrate_to_bigautofield','2024-07-09 16:21:12.340153'),(29,'token_blacklist','0010_fix_migrate_to_bigautofield','2024-07-09 16:21:12.379143'),(30,'token_blacklist','0011_linearizes_history','2024-07-09 16:21:12.388141'),(31,'token_blacklist','0012_alter_outstandingtoken_user','2024-07-09 16:21:12.430139'),(32,'core','0003_remove_fertilizerapplication_unique_code','2024-07-12 11:28:47.069569'),(33,'core','0002_remove_assignedfertilizer_store_keeper','2024-07-12 21:34:58.896284');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('09eqmj1986gekvo0fbmamr8ljvnmmc17','.eJxVjDsOwjAQBe_iGlnY8Q9K-pzB2vWucQDZUpxUiLuTSCmgfTPz3iLCupS4dp7jROIqlDj9bgjpyXUH9IB6bzK1uswTyl2RB-1ybMSv2-H-HRToZasNqMF4l3LQFh0j-ux48C77TOrCGg0NNnhlk7bKwmZpwhzInTm7QFZ8vuMQN-k:1sRDdU:tY-C9S-UjUGTtYGyg0tsPFSfesOE1ZXaBV2wkh-XlFE','2024-07-23 16:24:12.432856'),('2eabootfsyihjq5yuj726qh8am5qyhoi','.eJxVjDsOwjAQBe_iGlnY8Q9K-pzB2vWucQDZUpxUiLuTSCmgfTPz3iLCupS4dp7jROIqlDj9bgjpyXUH9IB6bzK1uswTyl2RB-1ybMSv2-H-HRToZasNqMF4l3LQFh0j-ux48C77TOrCGg0NNnhlk7bKwmZpwhzInTm7QFZ8vuMQN-k:1sRE1J:i6rcxW1aSfmsFoUNTtTWA0KcYY1WFznOg2RWG30ft1M','2024-07-23 16:48:49.475180'),('46fc8r7sphrfz9nxyd47hpvdxru1iqf9','.eJxVjDsOwjAQBe_iGlnY8Q9K-pzB2vWucQDZUpxUiLuTSCmgfTPz3iLCupS4dp7jROIqlDj9bgjpyXUH9IB6bzK1uswTyl2RB-1ybMSv2-H-HRToZasNqMF4l3LQFh0j-ux48C77TOrCGg0NNnhlk7bKwmZpwhzInTm7QFZ8vuMQN-k:1sSb1w:13xxdppkq7iiWdpMNVdg_3Nw_cfO2hzIc4NNFXvRz3c','2024-07-27 11:35:08.740526'),('6f2ml9697k79a4zs9e4eirl0loqxzoi4','.eJxVjDsOwjAQBe_iGlnY8Q9K-pzB2vWucQDZUpxUiLuTSCmgfTPz3iLCupS4dp7jROIqlDj9bgjpyXUH9IB6bzK1uswTyl2RB-1ybMSv2-H-HRToZasNqMF4l3LQFh0j-ux48C77TOrCGg0NNnhlk7bKwmZpwhzInTm7QFZ8vuMQN-k:1sRVox:rh0iqY4BGn5umQdAv14FvA6L5ucSOsbroeDqW_QV_Rg','2024-07-24 11:49:15.741908'),('6nyl6oj86ad09z382ka3nba7us1jliqy','.eJxVjDsOwjAQBe_iGlnY8Q9K-pzB2vWucQDZUpxUiLuTSCmgfTPz3iLCupS4dp7jROIqlDj9bgjpyXUH9IB6bzK1uswTyl2RB-1ybMSv2-H-HRToZasNqMF4l3LQFh0j-ux48C77TOrCGg0NNnhlk7bKwmZpwhzInTm7QFZ8vuMQN-k:1sRVag:JiMOVRnJfDSNkf4qaPP6z6tqWo0nrLoo4ViS1jEgFqA','2024-07-24 11:34:30.185611'),('6xwk9cxbmaom6x17etxszc95b0zyze8s','.eJxVjEEOwiAQRe_C2pDKFASX7nsGMjCDVA0kpV0Z7y5NutDtf-_9t_C4rdlvjRc_k7gKEKffLWB8ctkBPbDcq4y1rMsc5K7IgzY5VeLX7XD_DjK23OsxXBAIlNImGLDRGo1kGVmdLTnQiZABnBl4TA4SpZi6ZIMeVMegxOcL6YI4GQ:1sT2Gr:a1H9cCSVjsAsKp3nNOop2NIKpjIRAWEe6wWJ47cKXjg','2024-07-28 16:40:21.532806'),('8v300oxdzym4kh5r1u8e5nnp98jcal3k','.eJxVjMsOwiAQRf-FtSE8BVy67zeQgRmkaiAp7cr479qkC93ec859sQjbWuM2aIkzsgvz7PS7JcgPajvAO7Rb57m3dZkT3xV-0MGnjvS8Hu7fQYVRvzWRlton685eoPcqU5CpFCNUICE1gDCAZCBbnV1A8o4khozFJgvKKPb-AO2nOGc:1sSb2a:13U5G70WcKJNwuJawAgFHHS0Kx2OdUSMMMuYzyt-aUI','2024-07-27 11:35:48.229136'),('bvx5q2digyvrq9yady3w6mp52b8yq840','.eJxVjEEOwiAQRe_C2pDKFASX7nsGMjCDVA0kpV0Z7y5NutDtf-_9t_C4rdlvjRc_k7gKEKffLWB8ctkBPbDcq4y1rMsc5K7IgzY5VeLX7XD_DjK23OsxXBAIlNImGLDRGo1kGVmdLTnQiZABnBl4TA4SpZi6ZIMeVMegxOcL6YI4GQ:1sRsib:lNKQtsL4JjpzV3B_TsNQc78OKH03iM7tBXUSW85rDb4','2024-07-25 12:16:13.586177'),('cdg8runb3zt1drygl6sqxnfh5skavpz8','.eJxVjEEOgjAQRe_StWk6MANTl-49QzOdtoIaSCisjHdXEha6_e-9_zJBtnUIW81LGJM5GyBz-h2j6CNPO0l3mW6z1XlalzHaXbEHrfY6p_y8HO7fwSB1-NaRSmZFaD0yN1C6yJjFky_FKWPL6sQhUWq99ARIrmMfG3GpB1RQ8_4A9t03UA:1sT2OG:WK9Xym5X7JbFt_6Pr5bBcUrk0TiCgScrm1QMiV2x-SQ','2024-07-28 16:48:00.948868'),('cmps8d4q51y26itdwqvvi40fxvfwlosv','.eJxVjEEOwiAQRe_C2pDKFASX7nsGMjCDVA0kpV0Z7y5NutDtf-_9t_C4rdlvjRc_k7gKEKffLWB8ctkBPbDcq4y1rMsc5K7IgzY5VeLX7XD_DjK23OsxXBAIlNImGLDRGo1kGVmdLTnQiZABnBl4TA4SpZi6ZIMeVMegxOcL6YI4GQ:1sRt1O:llnCDKpSMPihv4358vLzH-aYGbH2r23I4ShYzBXOf0Y','2024-07-25 12:35:38.449268'),('dpwf8iklljtl5lwb58jzvsgu5t6m39q1','.eJxVjDsOwjAQBe_iGlleC_8o6TmDtevd4ABypDipEHcnkVJA-2bmvVXGdal57TLnkdVFWXX63QjLU9oO-IHtPukytWUeSe-KPmjXt4nldT3cv4OKvW41RmA4G2dcGiTEBOhMKISSigcLjkJiIYkGLNMGxMsQkpCNjBjRq88X4rs4lg:1sRDfu:8foPU9U1-L7Tc4mmZ4QVGiPt22fc_SXh6caO3pseEqk','2024-07-23 16:26:42.719703'),('fsxwbagspxe4mj6g4bj12a9teh1ut566','.eJxVjMsOwiAQRf-FtSE8BVy67zeQgRmkaiAp7cr479qkC93ec859sQjbWuM2aIkzsgvz7PS7JcgPajvAO7Rb57m3dZkT3xV-0MGnjvS8Hu7fQYVRvzWRlton685eoPcqU5CpFCNUICE1gDCAZCBbnV1A8o4khozFJgvKKPb-AO2nOGc:1sSa5J:efUTKdhMWX8fug2kq80QNfvTHfZF-CY-KFfpgVpfa_U','2024-07-27 10:34:33.550991'),('j68xqv3vihuklmbrc33ipzjbd43wu9h8','.eJxVjLsKAjEQAP8ltQTykE0s7f2GkN3NmlNJ4HJXif8ugSu0nRnmrVLet5r2Uda0sLooUKdfhpmepU3Bj9zuXVNv27qgnok-7NC3zuV1Pdq_Qc2jzi0BUYCzMDJEcFksCETvwAAJgi3gLQqTyS6KC8gigN4Ez5bRePX5AgPhOLU:1sSb1j:SfruOUjC-47wZmc5J-i6UQUH3gxc_ntQ1woArz-2bRE','2024-07-27 11:34:55.713899'),('kqyurwwxcc39gfwrgzi8bcpzkrr0op86','.eJxVjMsOwiAQRf-FtSE8BVy67zeQgRmkaiAp7cr479qkC93ec859sQjbWuM2aIkzsgvz7PS7JcgPajvAO7Rb57m3dZkT3xV-0MGnjvS8Hu7fQYVRvzWRlton685eoPcqU5CpFCNUICE1gDCAZCBbnV1A8o4khozFJgvKKPb-AO2nOGc:1sRVdg:tMyvUfOBWc9hxiZRMfpV_f9gmFQ1LJ8grMnplGQMFFs','2024-07-24 11:37:36.267544'),('l0mqlgdemxa2ug4oluv9buz8r6lv02ib','.eJxVjDsOwjAQBe_iGlnY8Q9K-pzB2vWucQDZUpxUiLuTSCmgfTPz3iLCupS4dp7jROIqlDj9bgjpyXUH9IB6bzK1uswTyl2RB-1ybMSv2-H-HRToZasNqMF4l3LQFh0j-ux48C77TOrCGg0NNnhlk7bKwmZpwhzInTm7QFZ8vuMQN-k:1sSlMn:eHZSTZWw_1gi2HBdY1PMeyz8IfnzvVuG1aB3ATb543w','2024-07-27 22:37:21.855472'),('l0qly4tztopqxpu367t41a8f6jkm17wg','.eJxVjDsOwjAQBe_iGlnY8Q9K-pzB2vWucQDZUpxUiLuTSCmgfTPz3iLCupS4dp7jROIqlDj9bgjpyXUH9IB6bzK1uswTyl2RB-1ybMSv2-H-HRToZasNqMF4l3LQFh0j-ux48C77TOrCGg0NNnhlk7bKwmZpwhzInTm7QFZ8vuMQN-k:1sRVlC:kThEKCYxxk_Pe9OlEd8mODrCufl5FbvU5E0noxDi0mA','2024-07-24 11:45:22.064934'),('lbzagmv5za63n99c9zebo2a70qtsy2ym','.eJxVjEEOwiAQRe_C2pDKFASX7nsGMjCDVA0kpV0Z7y5NutDtf-_9t_C4rdlvjRc_k7gKEKffLWB8ctkBPbDcq4y1rMsc5K7IgzY5VeLX7XD_DjK23OsxXBAIlNImGLDRGo1kGVmdLTnQiZABnBl4TA4SpZi6ZIMeVMegxOcL6YI4GQ:1sSKxu:6E3HJuk4u7vd1FmtUqq3CxFahOHGUWlQ0e3drmBLMrE','2024-07-26 18:25:54.084403'),('m1jso1akd421bmcgclbvfp0e48tnvgo5','.eJxVjDsOwjAQBe_iGlnY8Q9K-pzB2vWucQDZUpxUiLuTSCmgfTPz3iLCupS4dp7jROIqlDj9bgjpyXUH9IB6bzK1uswTyl2RB-1ybMSv2-H-HRToZasNqMF4l3LQFh0j-ux48C77TOrCGg0NNnhlk7bKwmZpwhzInTm7QFZ8vuMQN-k:1sSlKf:2v0lOpFstL7tJbapicFMkuKOvWEN18q20xIIaNBOGR8','2024-07-27 22:35:09.846107'),('ofw1x66wdqq90o3cr3i4ddpveojqg4er','.eJxVjMsOwiAQRf-FtSE8BVy67zeQgRmkaiAp7cr479qkC93ec859sQjbWuM2aIkzsgvz7PS7JcgPajvAO7Rb57m3dZkT3xV-0MGnjvS8Hu7fQYVRvzWRlton685eoPcqU5CpFCNUICE1gDCAZCBbnV1A8o4khozFJgvKKPb-AO2nOGc:1sRVmz:cew97dhhV4LwKk4fDiv-mNPvainynETdDWB8e7zKLMQ','2024-07-24 11:47:13.555641'),('p2f1dgp4rb2wwxwg2dldp20c657of72j','.eJxVjEEOwiAUBe_C2hD4AgWX7j0DeR9QqoYmpV0Z765NutDtm5n3EhHrUuPayxzHLE7CiMPvxkiP0jaQ72i3SaapLfPIclPkTru8TLk8z7v7d1DR67f2KAOOA1OAdQTlrQraG0DDOzaKXTA2E6UrgX0gzijGQLH2KavkxPsD2KQ36g:1sSiVB:D1Tg4FS4B1t3wpP2U3IXuvB1nb4dBwUEGCI5cXGNRys','2024-07-27 19:33:49.697399'),('ph8drlphxvjm3u5c2akgnn19y5c2muln','.eJxVjMsOwiAQRf-FtSE8BVy67zeQgRmkaiAp7cr479qkC93ec859sQjbWuM2aIkzsgvz7PS7JcgPajvAO7Rb57m3dZkT3xV-0MGnjvS8Hu7fQYVRvzWRlton685eoPcqU5CpFCNUICE1gDCAZCBbnV1A8o4khozFJgvKKPb-AO2nOGc:1sT29O:dGreqyZeb8QxON0Bh70-J29CeWVMOtbkj1r3hPr9M6Q','2024-07-28 16:32:38.354396'),('ptr2cumzqmyyrsav4xt4tytqnrsn6rby','.eJxVjMsOwiAQRf-FtSE8BVy67zeQgRmkaiAp7cr479qkC93ec859sQjbWuM2aIkzsgvz7PS7JcgPajvAO7Rb57m3dZkT3xV-0MGnjvS8Hu7fQYVRvzWRlton685eoPcqU5CpFCNUICE1gDCAZCBbnV1A8o4khozFJgvKKPb-AO2nOGc:1sRpsP:trISxfh6Oi4Rqds2EMTR3KjiK0PFAKcNuBdzUXgn6IY','2024-07-25 09:14:09.472392'),('rkty4uufyysj4zjdhwv1l6dknar6fh9k','.eJxVjEEOwiAUBe_C2hD4AgWX7j0DeR9QqoYmpV0Z765NutDtm5n3EhHrUuPayxzHLE7CiMPvxkiP0jaQ72i3SaapLfPIclPkTru8TLk8z7v7d1DR67f2KAOOA1OAdQTlrQraG0DDOzaKXTA2E6UrgX0gzijGQLH2KavkxPsD2KQ36g:1sRIyZ:HG2AUPmz16Oc014O_gOSYVfqbPmncEehgu3pHFxGHa8','2024-07-23 22:06:19.242695'),('sy1udmct5p7kq5ra15xgkk11j7prkzdf','.eJxVjLsKAjEQAP8ltQTykE0s7f2GkN3NmlNJ4HJXif8ugSu0nRnmrVLet5r2Uda0sLooUKdfhpmepU3Bj9zuXVNv27qgnok-7NC3zuV1Pdq_Qc2jzi0BUYCzMDJEcFksCETvwAAJgi3gLQqTyS6KC8gigN4Ez5bRePX5AgPhOLU:1sRVPh:xshMMuVS9EZ-NoQsfvGuct1KuqvVUiaGJuCrFe_EjSA','2024-07-24 11:23:09.374503'),('tczd5cmq8lz5laxl69cjbevmoxtydt6x','.eJxVjDsOwjAQBe_iGlnY8Q9K-pzB2vWucQDZUpxUiLuTSCmgfTPz3iLCupS4dp7jROIqlDj9bgjpyXUH9IB6bzK1uswTyl2RB-1ybMSv2-H-HRToZasNqMF4l3LQFh0j-ux48C77TOrCGg0NNnhlk7bKwmZpwhzInTm7QFZ8vuMQN-k:1sSbCe:FT1mqzJ9Q032jOgfzfUPbMRsQ7MCZTbl-9qSUn5PrEw','2024-07-27 11:46:12.286826'),('tizeqrenojui0tza1yb5zsog2zyhlst0','.eJxVjDsOwjAQBe_iGlnY8Q9K-pzB2vWucQDZUpxUiLuTSCmgfTPz3iLCupS4dp7jROIqlDj9bgjpyXUH9IB6bzK1uswTyl2RB-1ybMSv2-H-HRToZasNqMF4l3LQFh0j-ux48C77TOrCGg0NNnhlk7bKwmZpwhzInTm7QFZ8vuMQN-k:1sT24J:kY9DZrs4dTke6CJEk305R4IF1IfSIf8SbqdaEnfgafY','2024-07-28 16:27:23.049797'),('tlq6s39m4ob25a29wfrohkfmmvy00uwv','.eJxVjDsOwjAQBe_iGlnY8Q9K-pzB2vWucQDZUpxUiLuTSCmgfTPz3iLCupS4dp7jROIqlDj9bgjpyXUH9IB6bzK1uswTyl2RB-1ybMSv2-H-HRToZasNqMF4l3LQFh0j-ux48C77TOrCGg0NNnhlk7bKwmZpwhzInTm7QFZ8vuMQN-k:1sRVIZ:HvpZxl0a0T-OYGAg5e0pX4FzMoIyCWpSkyk1MeqOUHk','2024-07-24 11:15:47.988046'),('tlqcpr4akezudj4jotybm92f924v4blr','.eJxVjLsOAiEUBf-F2pDLGyzt_QbC5SGrBpJltzL-u5Jsoe2ZmfMiPuxb9fvIq18SORPGyel3xBAfuU2S7qHdOo29beuCdCr0oINee8rPy-H-HdQw6qyd0uiUMpYLxwrLwFBkGzUDbY1wyIEVY6IzWcLXiUGpAmgAi0wQJXl_ANiNNxo:1sSbc1:03oe2aW_239ltZeqbONbXebyJx1_2brJ__b2oMhaYN4','2024-07-27 12:12:25.916678'),('ufxd980ws0qcm9n6gclx3rb4ssjbgkgw','.eJxVjEEOwiAUBe_C2hD4AgWX7j0DeR9QqoYmpV0Z765NutDtm5n3EhHrUuPayxzHLE7CiMPvxkiP0jaQ72i3SaapLfPIclPkTru8TLk8z7v7d1DR67f2KAOOA1OAdQTlrQraG0DDOzaKXTA2E6UrgX0gzijGQLH2KavkxPsD2KQ36g:1sSNay:JqqKfrv0s6vkAGtTA5nJQvF3ehL-qw4NvqySyFENeYI','2024-07-26 21:14:24.097469'),('vf0i9y7u8yc27ureg43pd0db9tzu36jl','.eJxVjEEOwiAUBe_C2hD4AgWX7j0DeR9QqoYmpV0Z765NutDtm5n3EhHrUuPayxzHLE7CiMPvxkiP0jaQ72i3SaapLfPIclPkTru8TLk8z7v7d1DR67f2KAOOA1OAdQTlrQraG0DDOzaKXTA2E6UrgX0gzijGQLH2KavkxPsD2KQ36g:1sSalp:pFAH0R1h3vlLM6j4rxooNQvhh6u6yhmWtTJgEgW4raw','2024-07-27 11:18:29.040807'),('xofrd22h82x87szvjr68ql07ylkdf7ii','.eJxVjEEOgjAQRe_StWk6MANTl-49QzOdtoIaSCisjHdXEha6_e-9_zJBtnUIW81LGJM5GyBz-h2j6CNPO0l3mW6z1XlalzHaXbEHrfY6p_y8HO7fwSB1-NaRSmZFaD0yN1C6yJjFky_FKWPL6sQhUWq99ARIrmMfG3GpB1RQ8_4A9t03UA:1sT2OJ:OvCDYMe2x6bwlLcp35sjOwuLMR-blT2ewIJzLaIhILQ','2024-07-28 16:48:03.366911'),('zd3rx89lxg7s2qdcvieiwbpiqds3cnds','.eJxVjEEOwiAQRe_C2pDKFASX7nsGMjCDVA0kpV0Z7y5NutDtf-_9t_C4rdlvjRc_k7gKEKffLWB8ctkBPbDcq4y1rMsc5K7IgzY5VeLX7XD_DjK23OsxXBAIlNImGLDRGo1kGVmdLTnQiZABnBl4TA4SpZi6ZIMeVMegxOcL6YI4GQ:1sSFTw:Ip1nbuioKGy2o2cfU-SIhZxC32uJb5woPw642sLyTzI','2024-07-26 12:34:36.332551');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token_blacklist_blacklistedtoken`
--

DROP TABLE IF EXISTS `token_blacklist_blacklistedtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token_blacklist_blacklistedtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `blacklisted_at` datetime(6) NOT NULL,
  `token_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_id` (`token_id`),
  CONSTRAINT `token_blacklist_blacklistedtoken_token_id_3cc7fe56_fk` FOREIGN KEY (`token_id`) REFERENCES `token_blacklist_outstandingtoken` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_blacklist_blacklistedtoken`
--

LOCK TABLES `token_blacklist_blacklistedtoken` WRITE;
/*!40000 ALTER TABLE `token_blacklist_blacklistedtoken` DISABLE KEYS */;
/*!40000 ALTER TABLE `token_blacklist_blacklistedtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token_blacklist_outstandingtoken`
--

DROP TABLE IF EXISTS `token_blacklist_outstandingtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token_blacklist_outstandingtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token` longtext NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) NOT NULL,
  `user_id` bigint DEFAULT NULL,
  `jti` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq` (`jti`),
  KEY `token_blacklist_outs_user_id_83bc629a_fk_core_cust` (`user_id`),
  CONSTRAINT `token_blacklist_outs_user_id_83bc629a_fk_core_cust` FOREIGN KEY (`user_id`) REFERENCES `core_customuser` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_blacklist_outstandingtoken`
--

LOCK TABLES `token_blacklist_outstandingtoken` WRITE;
/*!40000 ALTER TABLE `token_blacklist_outstandingtoken` DISABLE KEYS */;
/*!40000 ALTER TABLE `token_blacklist_outstandingtoken` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-18  5:39:55
