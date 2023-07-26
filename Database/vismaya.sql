-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2023 at 06:22 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vismaya`
--

-- --------------------------------------------------------

--
-- Table structure for table `cosplay`
--

CREATE TABLE `cosplay` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `crime detection`
--

CREATE TABLE `crime detection` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `event x`
--

CREATE TABLE `event x` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expression`
--

CREATE TABLE `expression` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `famelab`
--

CREATE TABLE `famelab` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gaming`
--

CREATE TABLE `gaming` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `logo making`
--

CREATE TABLE `logo making` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `math puzzle`
--

CREATE TABLE `math puzzle` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `photography`
--

CREATE TABLE `photography` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `science show`
--

CREATE TABLE `science show` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `video making`
--

CREATE TABLE `video making` (
  `Member_name` varchar(20) NOT NULL,
  `Mobile_number` varchar(10) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Team_name` varchar(20) NOT NULL,
  `College` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
