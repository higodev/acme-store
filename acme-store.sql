-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 18, 2019 at 03:52 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `acme-store`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `cpf_cnpj` varchar(14) NOT NULL,
  `email` varchar(100) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_1ae2b94669917363b9595b18a8` (`cpf_cnpj`),
  KEY `FK_07a7a09b04e7b035c9d90cf4984` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `nome`, `cpf_cnpj`, `email`, `user_id`) VALUES
(1, 'Higo Alexandre', '07590217409', 'higoalexandreb@gmail.com', 1);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `desconto_percentual` decimal(5,2) NOT NULL DEFAULT '0.00',
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_427785468fb7d2733f59e7d7d39` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `nome`, `desconto_percentual`, `user_id`) VALUES
(1, 'ESPECIE', '5.00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `preco_compra` decimal(5,2) NOT NULL DEFAULT '0.00',
  `preco_venda` decimal(5,2) NOT NULL DEFAULT '0.00',
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_176b502c5ebd6e72cafbd9d6f70` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `nome`, `descricao`, `preco_compra`, `preco_venda`, `user_id`) VALUES
(1, 'CONFEITO.', 'BALA BLAH BLAH.', '1.09', '2.13', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
CREATE TABLE IF NOT EXISTS `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data_pedido` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total_pedido` decimal(5,2) NOT NULL DEFAULT '0.00',
  `status` varchar(50) DEFAULT 'EM ABERTO',
  `client_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `desconto` decimal(5,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`),
  KEY `FK_c49d95226945ca3a93584f912ca` (`client_id`),
  KEY `FK_5f282f3656814ec9ca2675aef6f` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `data_pedido`, `total_pedido`, `status`, `client_id`, `user_id`, `desconto`) VALUES
(1, '2019-12-18 15:40:20', '652.20', 'PAGO', 1, 1, '32.61');

-- --------------------------------------------------------

--
-- Table structure for table `sales_items`
--

DROP TABLE IF EXISTS `sales_items`;
CREATE TABLE IF NOT EXISTS `sales_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantidade` decimal(5,2) NOT NULL DEFAULT '0.00',
  `preco` decimal(5,2) NOT NULL DEFAULT '0.00',
  `total_item` decimal(5,2) NOT NULL DEFAULT '0.00',
  `sale_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b2a6e6db514f8a48851f0ba0ed4` (`sale_id`),
  KEY `FK_2e62caaea771f155d11324a50fb` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales_items`
--

INSERT INTO `sales_items` (`id`, `quantidade`, `preco`, `total_item`, `sale_id`, `product_id`) VALUES
(2, '5.00', '10.87', '54.35', 1, 1),
(3, '5.00', '10.87', '54.35', 1, 1),
(4, '5.00', '108.70', '543.50', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sales_payments`
--

DROP TABLE IF EXISTS `sales_payments`;
CREATE TABLE IF NOT EXISTS `sales_payments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `valor` decimal(5,2) NOT NULL DEFAULT '0.00',
  `sale_id` int(11) DEFAULT NULL,
  `payment_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_24af23eaffb9f518a79553876c2` (`sale_id`),
  KEY `FK_1f07479f085d669c2d8e907b2a2` (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales_payments`
--

INSERT INTO `sales_payments` (`id`, `valor`, `sale_id`, `payment_id`) VALUES
(4, '619.59', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `cnpj` varchar(14) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(16) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_a7815967475d0accd76feba8a1` (`cnpj`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nome`, `cnpj`, `email`, `senha`) VALUES
(1, 'SOFTCOM TECNOLOGIA', '06220266000128', 'suporte1@softcomtecnologia.com.br', '293');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `FK_07a7a09b04e7b035c9d90cf4984` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `FK_427785468fb7d2733f59e7d7d39` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_176b502c5ebd6e72cafbd9d6f70` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `FK_5f282f3656814ec9ca2675aef6f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_c49d95226945ca3a93584f912ca` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `sales_items`
--
ALTER TABLE `sales_items`
  ADD CONSTRAINT `FK_2e62caaea771f155d11324a50fb` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_b2a6e6db514f8a48851f0ba0ed4` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `sales_payments`
--
ALTER TABLE `sales_payments`
  ADD CONSTRAINT `FK_1f07479f085d669c2d8e907b2a2` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_24af23eaffb9f518a79553876c2` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
