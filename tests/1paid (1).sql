-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Фев 05 2024 г., 14:40
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

--
-- Дамп данных таблицы `field`
--

INSERT INTO `field` (`id`, `seo_name`, `lang_id`, `type`, `value`, `created_at`, `updated_at`, `search`) VALUES
(1, 'account_rating', 16, 'float', '0', NULL, NULL, 0),
(2, 'server', 18, 'options', 'wf1|wf2|wf3', '2024-02-01 18:57:22', '2024-02-01 18:57:22', 0),
(3, 'server', 19, 'options', 'wf1|wf2|wf3', '2024-02-01 18:58:34', '2024-02-01 18:58:34', 0),
(4, 'server', 20, 'options', 'wf1|wf2|wf3', '2024-02-01 19:33:21', '2024-02-01 19:33:21', 1);

--
-- Дамп данных таблицы `field_category`
--

INSERT INTO `field_category` (`id`, `field_id`, `category_id`) VALUES
(1, 1, 1),
(2, 3, 1),
(3, 4, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
