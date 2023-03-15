-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2023 at 03:48 PM
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
-- Database: `ishop`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_quantity` int(3) NOT NULL,
  `is_paid` tinyint(4) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `order_status` varchar(255) DEFAULT 'NEW',
  `order_total` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `product_id`, `order_quantity`, `is_paid`, `created_at`, `updated_at`, `order_status`, `order_total`) VALUES
(1, 1, 1, 1, 1, '2023-02-28 16:00:00', '2023-02-28 16:00:00', 'order status', 10);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) DEFAULT 0,
  `category_id` varchar(255) DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT 4
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `quantity`, `category_id`, `code`, `rating`) VALUES
(135, 'dsa', 321, 0, 'Inactive', 0, 4),
(136, '321', 3213121, 0, 'Published', 0, 4),
(137, 'dsa', 321, 0, 'Published', 0, 4),
(138, 'dassdaas', 312, 0, 'Inactive', 0, 4);

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_category`
--

INSERT INTO `product_category` (`id`, `name`) VALUES
(1, 'Published'),
(2, 'Scheduled'),
(3, 'Inactive');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `full_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `joined_date` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `full_name`, `email`, `role`, `phone_number`, `joined_date`, `password`) VALUES
(30, 'dsa', 'asd', '1', '2', '2023-03-14 20:19:29', NULL),
(31, 'das', 'asd', '2', '0', '2023-03-14 20:19:38', NULL),
(33, 'dsa', 'das', '1', '0', '0000-00-00 00:00:00', 'ds'),
(34, 'ds', 'ds', '2', '0', '2023-03-14 20:50:24', ''),
(37, 'dsadsa123', 'dsad', '1', '0', '2023-03-14 21:11:13', 'd'),
(38, 'fsdf', 'dfsf', '2', '0', '2023-03-14 21:11:13', 'f'),
(39, 'hhha', '', '1', '0', '2023-03-14 21:11:13', ''),
(40, 'ds', 'ds', '1', '0', '2023-03-14 13:07:32', ''),
(41, 'dsa', '', '2', '0', '2023-03-14 13:10:19', ''),
(42, 'fd', 'fd', '1', '0', '2023-03-14 13:11:56', ''),
(43, 'sd', 'da', '1', '0', '0000-00-00 00:00:00', ''),
(44, 'fds', '', '2', '0', '0000-00-00 00:00:00', ''),
(45, 'dasdasdas', 'ds', '1', '0', '0000-00-00 00:00:00', ''),
(46, 'ds', 'ds', '1', '0', '2023-03-14 13:20:43', ''),
(49, 'sda', 'sda', '1', '0', '2023-03-14 13:25:26', ''),
(50, 'dasd', 'dsa', '2', '0', '2023-03-14T13:27:09.869Z', ''),
(52, 'dsa', 'dsd', '2', '0', ' Mar 14 2023 21:48:08', ''),
(53, 'hhe', '', '1', '0', ' Mar 14 2023 21:48:32', ''),
(54, 'ml;m', '', '1', '0', ' Mar 14 2023 22:32:32', ''),
(55, 'dsa', 'dsa', '1', '0', ' Mar 14 2023 22:37:05', 'dsa'),
(56, 'gichi', '', '2', '0', ' Mar 14 2023 22:56:55', ''),
(57, 'sad', '', '1', '0', ' Mar 14 2023 23:14:10', ''),
(58, 'jya', '', 'Analyst', '0', ' Mar 14 2023 23:22:06', ''),
(59, 'modal', '', 'Administrator', '0', ' Mar 15 2023 16:38:29', '3213'),
(60, 'modal', '', 'Administrator', '0', ' Mar 15 2023 16:38:29', '3213'),
(61, 'modal', '', 'Administrator', '0', ' Mar 15 2023 16:38:29', '3213'),
(62, 'modal', '', 'Administrator', '0', ' Mar 15 2023 16:38:29', '3213'),
(63, 'modal', '', 'Administrator', '0', ' Mar 15 2023 16:38:29', '3213'),
(64, 'modal', '', 'Administrator', '0', ' Mar 15 2023 16:38:29', '3213'),
(65, 'modal', '', 'Administrator', '0', ' Mar 15 2023 16:38:29', '3213'),
(66, 'modal', '', 'Administrator', '0', ' Mar 15 2023 16:38:29', '3213'),
(67, 'modal', '', 'Analyst', '0', ' Mar 15 2023 16:38:29', '3213'),
(68, 'modal', '', 'Analyst', '0', ' Mar 15 2023 16:38:29', '3213'),
(69, 'modal', '', 'Analyst', '0', ' Mar 15 2023 16:38:29', '3213'),
(70, 'modal', '', 'Analyst', '0', ' Mar 15 2023 16:38:29', '3213'),
(71, 'modal', '', 'Analyst', '0', ' Mar 15 2023 16:38:29', '3213'),
(73, 'modal', '', 'Analyst', '0', ' Mar 15 2023 16:38:29', '3213'),
(74, 'modal', '', 'Analyst', '0', ' Mar 15 2023 16:38:29', '3213'),
(75, 'modal', '', 'Analyst', '0', ' Mar 15 2023 16:38:29', '3213'),
(76, 'modal', '', 'Analyst', '0', ' Mar 15 2023 16:38:29', '3213'),
(78, '', '', '', '0', ' Mar 15 2023 16:53:03', ''),
(79, '', '', '', '0', ' Mar 15 2023 16:58:25', ''),
(80, '', '', '', '0', ' Mar 15 2023 17:00:18', ''),
(81, '', '', 'Analyst', '', ' Mar 15 2023 17:04:50', ''),
(82, 'das', '', 'Analyst', '', ' Mar 15 2023 17:04:50', ''),
(83, 'das', '', 'Analyst', '', ' Mar 15 2023 17:04:50', ''),
(84, 'das', '', 'Analyst', '', ' Mar 15 2023 17:04:50', ''),
(85, 'das', '', 'Analyst', '', ' Mar 15 2023 17:04:50', ''),
(86, 'das123', 'dsadsa', 'Administrator', '12312', ' Mar 15 2023 17:04:50', ''),
(88, 'nozi bi', '', 'Administrator', '', ' Mar 15 2023 17:08:45', ''),
(89, 'huskenb', '', 'Analyst', '', ' Mar 15 2023 17:12:33', ''),
(90, 'nozi oo oo ', '', 'Developer', '', ' Mar 15 2023 17:12:33', ''),
(91, 'tulga123', '', 'Analyst', '', ' Mar 15 2023 20:26:25', ''),
(92, 'puntsag123', '', 'Developer', '', ' Mar 15 2023 21:00:13', ''),
(93, 'jaya', '', 'Developer', '', ' Mar 15 2023 21:24', '');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `name`) VALUES
(1, 'Administrator'),
(2, 'Analyst'),
(3, 'Developer'),
(4, 'Support'),
(5, 'Trial');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
