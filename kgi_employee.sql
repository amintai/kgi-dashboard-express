-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 04, 2021 at 11:57 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kgi`
--

-- --------------------------------------------------------

--
-- Table structure for table `kgi_employee`
--

CREATE TABLE IF NOT EXISTS `kgi_employee` (
  `id` int(25) NOT NULL,
  `name` varchar(50) NOT NULL,
  `teamName` varchar(50) NOT NULL,
  `total_resloved` int(50) NOT NULL,
  `total_created` int(50) NOT NULL,
  `total_closed` int(50) NOT NULL,
  `fb_and_resolved` int(50) NOT NULL,
  `critical_resolved` int(50) NOT NULL,
  `rpt_resloved` int(50) NOT NULL,
  `resolved_in_days_avg` int(50) NOT NULL,
  `total_hrs` int(50) NOT NULL,
  `billable_hours` int(50) NOT NULL,
  `productivity` int(50) NOT NULL,
  `planned_leaves` int(50) NOT NULL,
  `unplanned_leaves` int(50) NOT NULL,
  `avg_delayed_in_timesheet` int(50) NOT NULL,
  `estimation_vs_actual_on_task` int(50) NOT NULL,
  `less_hours` int(50) NOT NULL,
  `not_complete_task` int(50) NOT NULL,
  `supervisor_name` varchar(50) NOT NULL,
  `project` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kgi_employee`
--

INSERT INTO `kgi_employee` (`id`, `name`, `teamName`, `total_resloved`, `total_created`, `total_closed`, `fb_and_resolved`, `critical_resolved`, `rpt_resloved`, `resolved_in_days_avg`, `total_hrs`, `billable_hours`, `productivity`, `planned_leaves`, `unplanned_leaves`, `avg_delayed_in_timesheet`, `estimation_vs_actual_on_task`, `less_hours`, `not_complete_task`, `supervisor_name`, `project`) VALUES
(0, 'Raj Bhavsar', 'Mobile', 149, 192, 116, 12, 21, 1, 10, 1150, 437, 43, 0, 5, 12, 0, 4, 93, 'Tejas', 'facebook'),
(1, 'Hima Trivedi', 'PHP', 2, 88, 15, 1, 1, 0, 0, 1073, 673, 63, 1, 7, 5, 0, 12, 169, 'Tejas', 'whatsapp'),
(2, 'Kaushal Mehta', 'QA', 10, 293, 266, 5, 5, 2, 0, 1057, 437, 41, 3, 9, 0, 0, 0, 0, 'Tejas', 'instagram'),
(3, 'Sanni Kalariya', 'Design', 37, 15, 0, 1, 1, 1, 10, 521, 466, 89, 0, 0, 2, 0, 2, 92, 'vanita', 'google'),
(4, 'amin', 'Mobile', 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 'Tejas', 'facebook'),
(5, 'vidhi pandya', 'CMS', 98, 176, 107, 0, 3, 0, 0, 1070, 768, 70, 1, 9, 8, 0, 6, 458, 'Tejas', 'youtube'),
(6, 'Uma Mehta', 'CMS', 15, 34, 0, 0, 0, 0, 3, 1021, 515, 50, 0, 12, 3, 4, 12, 4, 'Vidhi', 'youtube'),
(7, 'Ruchita Pawar', 'CMS', 27, 9, 0, 0, 0, 0, 3, 1151, 502, 44, 0, 6, 1, 0, 5, 9, 'Vidhi', 'google'),
(8, 'Nikita Tailor', 'E-COM', 208, 169, 271, 0, 0, 0, 0, 1096, 556, 51, 1, 8, 4, 73, 5, 1452, 'Vanita', 'amazon'),
(9, 'Alpesh Solanki', 'E-COM', 35, 83, 33, 1, 0, 1, 47, 1101, 667, 61, 6, 2, 7, 8, 6, 680, 'Vanita', 'amazon'),
(10, 'Raj Rudani', 'PHP', 78, 21, 2, 0, 0, 3, 3, 897, 604, 67, 1, 8, 33, 0, 18, 7, 'Hima', 'BANG'),
(11, 'Henisha Shah', '.NET', 21, 25, 13, 1, 0, 0, 0, 1162, 781, 68, 0, 2, 2, 77, 6, 56, 'Megha', 'MyTap'),
(12, 'Ruchita Pawar', 'CMS', 27, 9, 0, 0, 0, 0, 3, 1151, 502, 44, 0, 6, 1, 0, 5, 9, 'Vidhi', 'google'),
(13, 'Vanita Madhwani', 'E-COM', 1, 41, 30, 0, 0, 0, 15, 933, 558, 59, 0, 4, 3, 0, 11, 84, 'Vanita', 'amazon'),
(14, 'Tarun Bhaglani', 'E-COM', 34, 73, 13, 0, 1, 0, 0, 1122, 573, 51, 3, 4, 6, 0, 11, 680, 'Vanita', 'amazon'),
(15, 'Mitul Patel', 'PHP', 0, 0, 0, 0, 0, 0, 0, 1139, 917, 81, 3, 7, 6, 6, 8, 43, 'Tejas', 'facebook'),
(16, 'Khyati Kava', 'PHP', 72, 36, 90, 17, 12, 1, 6, 1073, 407, 38, 17, 2, 2, 15, 7, 242, 'Tejas', 'youtube'),
(17, 'Kartavi Patel', 'PHP', 81, 135, 14, 3, 0, 2, 3, 1090, 487, 45, 1, 7, 6, 0, 3, 801, 'Hima', 'amazon'),
(18, 'Tejas Sapovadiya', '1', 1, 41, 37, 0, 0, 0, 7, 1080, 722, 67, 3, 4, 12, 0, 18, 14, 'Tejas', 'BANG'),
(19, 'Nancy Khakhkhar', 'PHP', 28, 34, 18, 3, 2, 9, 1, 1090, 717, 66, 4, 8, 11, 0, 5, 399, 'Tejas', 'youtube'),
(20, 'Punit Nirmal', 'Mobile', 14, 90, 10, 0, 2, 1, 8, 78, 0, 0, 0, 0, 0, 0, 20, 28, 'Tejas', 'google'),
(21, 'Pratik Parmar', 'QA', 1, 0, 0, 0, 0, 0, 0, 559, 265, 47, 0, 3, 1, 14, 3, 18, 'Megha', 'MyTap'),
(22, 'Tapan Thakkar', '.NET', 35, 8, 2, 0, 0, 0, 0, 1163, 542, 48, 4, 6, 6, 0, 22, 16, 'Megha', 'MyTap'),
(23, 'Megha Patel', '.NET', 34, 172, 221, 0, 1, 1, 11, 987, 576, 58, 3, 14, 6, 44, 21, 31, 'Megha', 'MyTap');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
