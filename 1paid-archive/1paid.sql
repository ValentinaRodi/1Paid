-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Янв 31 2024 г., 14:41
-- Версия сервера: 8.1.0
-- Версия PHP: 8.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `1paid`
--

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int UNSIGNED NOT NULL,
  `game_id` int NOT NULL,
  `lang_id` int NOT NULL,
  `name` varchar(190) COLLATE utf8mb3_unicode_ci NOT NULL,
  `sort` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `game_id`, `lang_id`, `name`, `sort`, `created_at`, `updated_at`) VALUES
(1, 1, 3, 'accwarface', 0, '2024-01-10 07:36:11', '2024-01-10 07:36:11'),
(2, 1, 4, 'pin-codes', 0, '2024-01-10 08:08:51', '2024-01-10 08:08:51'),
(3, 1, 5, 'bust-pm', 0, '2024-01-10 08:19:35', '2024-01-10 08:19:35'),
(4, 1, 6, 'specoperations', 0, '2024-01-10 08:34:10', '2024-01-10 08:34:10'),
(5, 2, 15, 'accwarface', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` int UNSIGNED NOT NULL,
  `uuid` varchar(32) COLLATE utf8mb3_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `payload` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `exception` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `file`
--

CREATE TABLE `file` (
  `id` int UNSIGNED NOT NULL,
  `original_name` varchar(190) COLLATE utf8mb3_unicode_ci NOT NULL,
  `hashed_name` varchar(190) COLLATE utf8mb3_unicode_ci NOT NULL,
  `extension` varchar(190) COLLATE utf8mb3_unicode_ci NOT NULL,
  `user_id` int NOT NULL,
  `size` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Дамп данных таблицы `file`
--

INSERT INTO `file` (`id`, `original_name`, `hashed_name`, `extension`, `user_id`, `size`, `created_at`, `updated_at`) VALUES
(1, 'icon-warface.75063d1d', 'icon-warface.75063d1d', 'png', 1, 1, NULL, NULL),
(2, 'game-card-bg-warface.9e636275', 'game-card-bg-warface.9e636275', 'png', 1, 1, NULL, NULL),
(3, 'giveaway-item.19f85331', 'giveaway-item.19f85331', 'png', 1, 5124, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `game`
--

CREATE TABLE `game` (
  `id` int UNSIGNED NOT NULL,
  `icon_id` int NOT NULL,
  `background_id` int NOT NULL,
  `name` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `lang_id` int NOT NULL,
  `new` tinyint NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Дамп данных таблицы `game`
--

INSERT INTO `game` (`id`, `icon_id`, `background_id`, `name`, `lang_id`, `new`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'Warface', 1, 0, NULL, NULL),
(2, 1, 2, 'New cool game', 14, 1, '2024-01-17 01:27:54', '2024-01-17 01:27:54');

-- --------------------------------------------------------

--
-- Структура таблицы `item`
--

CREATE TABLE `item` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb3_unicode_ci NOT NULL,
  `category_id` int NOT NULL,
  `lang_id` int NOT NULL,
  `user_id` int NOT NULL,
  `icon_id` int NOT NULL,
  `new` tinyint NOT NULL,
  `sort` int NOT NULL,
  `price` double UNSIGNED NOT NULL,
  `rank` double NOT NULL,
  `description` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Дамп данных таблицы `item`
--

INSERT INTO `item` (`id`, `name`, `category_id`, `lang_id`, `user_id`, `icon_id`, `new`, `sort`, `price`, `rank`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Аккаунт', 1, 7, 4, 3, 1, 0, 1000, 5, 'Аккаунт с высокой статистикой', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `lang`
--

CREATE TABLE `lang` (
  `id` int UNSIGNED NOT NULL,
  `russian` varchar(190) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `english` varchar(190) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Дамп данных таблицы `lang`
--

INSERT INTO `lang` (`id`, `russian`, `english`, `created_at`, `updated_at`) VALUES
(1, 'Warface', 'Warface', NULL, NULL),
(3, 'Аккаунты', 'Accounts', '2024-01-10 07:36:11', '2024-01-10 07:36:11'),
(4, 'Пин-коды', 'PIN Codes', '2024-01-10 08:08:51', '2024-01-10 08:08:51'),
(5, 'Буст PM', 'Boost PM', '2024-01-10 08:19:35', '2024-01-10 08:19:35'),
(6, 'Спецоперации', 'Special Operations', '2024-01-10 08:34:10', '2024-01-10 08:34:10'),
(7, 'Аккаунт', 'Account', NULL, NULL),
(8, 'Крутая игра', 'Cool game', NULL, NULL),
(9, 'Крутая игра', 'Cool game', NULL, NULL),
(10, 'Крутая игра', 'Cool game', NULL, NULL),
(11, 'Крутая игра', 'Cool game', NULL, NULL),
(12, 'Крутая игра', 'Cool game', NULL, NULL),
(13, 'Крутая игра', 'Cool game', NULL, NULL),
(14, 'Крутая игра', 'Cool game', NULL, NULL),
(15, 'Аккаунты', 'Accounts', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `migration`
--

CREATE TABLE `migration` (
  `version` varchar(180) NOT NULL,
  `apply_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `migration`
--

INSERT INTO `migration` (`version`, `apply_time`) VALUES
('m000000_000000_base', 1705107210),
('m240113_004029_create_table_category', 1705107213),
('m240113_004029_create_table_failed_jobs', 1705107213),
('m240113_004029_create_table_file', 1705107213),
('m240113_004029_create_table_game', 1705107213),
('m240113_004029_create_table_item', 1705107213),
('m240113_004029_create_table_lang', 1705107213),
('m240113_004029_create_table_user', 1705107213),
('m240113_004029_create_table_user_token', 1705107213),
('m240113_005034_insert_data_into_category', 1705107213),
('m240113_005034_insert_data_into_file', 1705107213),
('m240113_005034_insert_data_into_game', 1705107213),
('m240113_005034_insert_data_into_lang', 1705107213),
('m240113_014612_alter_table_user_token_reset_password_nullable', 1705110655),
('m240113_085941_alter_table_user_add_columns_avatar_balance_bonus', 1705136597),
('m240113_100805_alter_table_user_token_add_column_updated_at', 1705140673),
('m240113_101634_alter_table_user_add_column_status', 1705141087);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `email` varchar(250) COLLATE utf8mb3_unicode_ci NOT NULL,
  `email_verified` tinyint DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `secret_word` varchar(190) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `avatar` int DEFAULT '0',
  `balance` decimal(19,4) DEFAULT '0.0000',
  `bonus` decimal(19,4) DEFAULT '0.0000',
  `status` int DEFAULT '9'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `email_verified`, `email_verified_at`, `password`, `secret_word`, `remember_token`, `created_at`, `updated_at`, `avatar`, `balance`, `bonus`, `status`) VALUES
(4, 'test-name', '1@1.ru', NULL, NULL, '$2y$13$SYtrQnMlrBUUf1x.RruEnORn6rFefvDfSEWaycxjorIVD8Yp0mK2q', '12345678', NULL, '2024-01-13 10:19:45', '2024-01-13 10:19:45', 0, 0.0000, 0.0000, 9),
(5, 'test1234', '2@1.com', NULL, NULL, '$2y$13$cVnjUJPCDXTl7SRHS.Qnk.zFzYCm1WksyhUTCutExWjOlK8i7vUl2', '12345678', NULL, '2024-01-16 20:15:28', '2024-01-16 20:15:28', 0, 0.0000, 0.0000, 9);

-- --------------------------------------------------------

--
-- Структура таблицы `user_token`
--

CREATE TABLE `user_token` (
  `id` int UNSIGNED NOT NULL,
  `id_user` int NOT NULL,
  `email_token` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `reset_password_token` varchar(191) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Дамп данных таблицы `user_token`
--

INSERT INTO `user_token` (`id`, `id_user`, `email_token`, `reset_password_token`, `created_at`, `updated_at`) VALUES
(1, 4, 'dpzhEw4_LO-JunYJyVdbc13l0pGy7eRC_1705141185', NULL, '2024-01-13 10:19:45', '2024-01-13 10:19:45'),
(2, 5, 'BJlYjWu-i0mFxNrRPddIYeuiRuAN7nFU_1705436128', NULL, '2024-01-16 20:15:28', '2024-01-16 20:15:28');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `lang`
--
ALTER TABLE `lang`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migration`
--
ALTER TABLE `migration`
  ADD PRIMARY KEY (`version`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user_token`
--
ALTER TABLE `user_token`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `file`
--
ALTER TABLE `file`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `game`
--
ALTER TABLE `game`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `item`
--
ALTER TABLE `item`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `lang`
--
ALTER TABLE `lang`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `user_token`
--
ALTER TABLE `user_token`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
