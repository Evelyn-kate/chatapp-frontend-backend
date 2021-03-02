-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Sam 09 Janvier 2021 à 10:44
-- Version du serveur: 5.5.24-log
-- Version de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `chatapp`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `idmessages` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(255) DEFAULT NULL,
  `idUsers` int(11) DEFAULT NULL,
  `receiverId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`idmessages`),
  KEY `idUsers` (`idUsers`),
  KEY `receiverId` (`receiverId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `messages`
--

INSERT INTO `messages` (`idmessages`, `message`, `idUsers`, `receiverId`, `createdAt`, `updatedAt`) VALUES
(1, 'Hello, Kate', 2, 1, '2021-01-08 08:53:27', '2021-01-08 08:53:27'),
(2, 'How are you??', 1, 2, '2021-01-08 09:24:17', '2021-01-08 09:24:17');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2021-01-07 09:45:19', '2021-01-07 09:45:19'),
(2, 'user', '2021-01-07 09:45:19', '2021-01-07 09:45:19');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `idUsers` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`idUsers`),
  KEY `roleId` (`roleId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`idUsers`, `name`, `email`, `password`, `isActive`, `createdAt`, `updatedAt`, `roleId`) VALUES
(1, 'Yvan', 'yvan@worldvoice.com', '$2b$10$XELgBwkwNzmSnw.XKlzqxumCWCGKRRZAHbYf8cbb98H82Nbhm9v.C', 1, '2021-01-07 09:47:51', '2021-01-08 17:29:10', 1),
(2, 'Kate_Evelyne', 'kate.mbemoh@worldvoice.cm', '$2b$10$ZqA3mNFvPUF8jKANmFhQXeZ19SIvtLMSBnMp7gpLmMSEDZfIZQqKG', 1, '2021-01-07 09:50:35', '2021-01-08 17:25:47', 2);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`idUsers`) REFERENCES `users` (`idUsers`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiverId`) REFERENCES `users` (`idUsers`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
