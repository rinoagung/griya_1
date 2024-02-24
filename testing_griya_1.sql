-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 24, 2024 at 02:46 PM
-- Server version: 11.0.0-MariaDB-log
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `griya_1`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_paket` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `no_telp` int(11) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `foto_ktp` varchar(255) NOT NULL,
  `foto_rumah` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `id_paket`, `nama`, `no_telp`, `alamat`, `foto_ktp`, `foto_rumah`, `created_at`, `updated_at`) VALUES
(23, 1, 'q', 62, 'q', 'gambar/h95GqlTnBK36wb3aM4mKt51lUAxfzLMBTUwY8qrc.jpg', 'gambar/Na58x28YvuSL5ed59HuULEUx9wcdR72BHykxhlp5.jpg', '2024-02-22 01:43:16', '2024-02-22 01:43:16'),
(24, 1, '133', 62, 'q', 'gambar/kHmYZrqFAIFfY5b5bLrpgbG3cNnZOnnHZBgR7XBD.jpg', 'gambar/cSZqVtqrIMfqMrRaFYcO6mOE99q2z5mAeWGzGIeW.jpg', '2024-02-22 01:43:22', '2024-02-22 01:43:22'),
(25, 1, '31231', 62, 'q', 'gambar/BIIe3G7kp4jDyYjiBu3LLNblBZwkWvTD7Ttl5IXy.jpg', 'gambar/zAeB1lSLK40Y87toexG54sw4jWD78Y2yPz5w7pmg.jpg', '2024-02-22 01:43:26', '2024-02-22 01:43:26'),
(26, 1, '312313131312', 62, 'qnn', 'gambar/hFIKx1ngBwgh1SRfg3zQRvjaYZMtEMedSRUoLb3B.jpg', 'gambar/nfMq8a3G2z1vEKFuVTiLSsr407tWOJk9WoyR3GYN.jpg', '2024-02-22 01:43:30', '2024-02-22 01:54:31'),
(32, 1, '5151', 62, '5', 'gambar/8bS1PJMy2HeLIh4G1QUGmz5BaSYnc9NN0DelShVE.jpg', 'gambar/vw8xjRhwwhgBoKIPLT4RVU4nhLilhEPbOxj388Rc.jpg', '2024-02-22 21:20:16', '2024-02-22 21:20:16'),
(34, 2, 'Finish', 623321, '3123', 'gambar/6QOLa2rRMP4SAvnY97nJ2zVuIDkTn24U02IuxbCb.png', 'gambar/c96OlVgJcKbV7vU7JZmWjUPoPJvCHrqj2YeX7hqA.png', '2024-02-24 07:43:03', '2024-02-24 07:43:03');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(42, '2014_10_12_000000_create_users_table', 1),
(43, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(44, '2019_08_19_000000_create_failed_jobs_table', 1),
(45, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(46, '2024_02_20_040903_create_pakets_table', 1),
(47, '2024_02_20_074213_create_customers_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `pakets`
--

CREATE TABLE `pakets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama_paket` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pakets`
--

INSERT INTO `pakets` (`id`, `nama_paket`, `harga`, `created_at`, `updated_at`) VALUES
(1, 'coba 1', 123, '2024-02-20 05:19:48', '2024-02-20 05:19:48'),
(2, 'test 2', 3000, '2024-02-20 12:33:16', '2024-02-20 12:33:16');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_pegawai` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `id_pegawai`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin_rino', '$2y$12$hsmjknjb3O86hoMycpncJeb6ylMWR1vA998Y4CMkZZoxeEes1sTwq', 'admin', NULL, '2024-02-20 04:33:40', '2024-02-20 04:33:40'),
(2, 'sales_rino', '$2y$12$hsmjknjb3O86hoMycpncJeb6ylMWR1vA998Y4CMkZZoxeEes1sTwq', 'sales', NULL, '2024-02-20 04:33:40', '2024-02-20 04:33:40'),
(3, '123', '$2y$12$/AL/g7VL0CCQBOak0n9Gs.PhrGtWXVRP.HTYwuWinLb/qpKzQ6/mi', 'sales', NULL, '2024-02-22 17:58:27', '2024-02-22 17:58:27'),
(7, '321', '$2y$12$kDNoEuhGaakKgeBvU4dBN.7wLQCvdjW3uf4LSIp24W5ZBAquhqUqi', 'sales', NULL, '2024-02-22 19:16:51', '2024-02-22 19:16:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pakets`
--
ALTER TABLE `pakets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_id_pegawai_unique` (`id_pegawai`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `pakets`
--
ALTER TABLE `pakets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
