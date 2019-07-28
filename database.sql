/*
SQLyog Ultimate v12.5.1 (64 bit)
MySQL - 5.6.21 : Database - db_server
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_server` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_server`;

/*Table structure for table `tbl_karyawan` */

DROP TABLE IF EXISTS `tbl_karyawan`;

CREATE TABLE `tbl_karyawan` (
  `nip` char(10) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `alamat` varchar(100) DEFAULT NULL,
  `jabatan` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`nip`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tbl_karyawan` */

insert  into `tbl_karyawan`(`nip`,`nama`,`alamat`,`jabatan`) values 
('123456','Zeldianto Eka Putra','Jl. Moh Hatta No 20 Padang','Staff IT Application'),
('123457','Desy Gusrita','Komp. Unand No 19 Padang','Staff Administrasi');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
