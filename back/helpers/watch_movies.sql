-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Lun 04 Mars 2019 à 08:45
-- Version du serveur :  5.7.25-0ubuntu0.18.04.2
-- Version de PHP :  7.2.15-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `watch_movies`
--

-- --------------------------------------------------------

--
-- Structure de la table `actors`
--

CREATE TABLE `actors` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `picture` varchar(250) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `actors`
--

INSERT INTO `actors` (`id`, `name`, `lastname`, `picture`, `age`) VALUES
(1, 'John', 'Travolta', 'https://m.media-amazon.com/images/M/MV5BMTUwNjQ0ODkxN15BMl5BanBnXkFtZTcwMDc5NjQwNw@@._V1_UY317_CR11,0,214,317_AL_.jpg', 64),
(2, 'Samuel', 'L. Jackson', 'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg', 70),
(3, 'Tim', 'Roth', 'https://m.media-amazon.com/images/M/MV5BMjA5NTA3MDQyOV5BMl5BanBnXkFtZTcwODM4NDE3Mw@@._V1_UY317_CR16,0,214,317_AL_.jpg', 57),
(4, 'Bruce', 'Willis', 'https://m.media-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_UY317_CR27,0,214,317_AL_.jpg', 63),
(5, 'Ethan', 'Hawke', 'https://m.media-amazon.com/images/M/MV5BMTk4NDMxMTI0MF5BMl5BanBnXkFtZTYwMjE3ODE0._V1_UY317_CR5,0,214,317_AL_.jpg', 48),
(6, 'Uma', 'Thurman', 'https://m.media-amazon.com/images/M/MV5BMjMxNzk1MTQyMl5BMl5BanBnXkFtZTgwMDIzMDEyMTE@._V1_UX214_CR0,0,214,317_AL_.jpg', 48),
(7, 'Jude', 'Law', 'https://m.media-amazon.com/images/M/MV5BMTMwOTg5NTQ3NV5BMl5BanBnXkFtZTcwNzM3MDAzNQ@@._V1_UY317_CR6,0,214,317_AL_.jpg', 46);

-- --------------------------------------------------------

--
-- Structure de la table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `director` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `poster` varchar(250) NOT NULL,
  `release_date` date NOT NULL,
  `rating` int(11) NOT NULL,
  `big_poster` varchar(250) DEFAULT NULL,
  `synopsis` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `movies`
--

INSERT INTO `movies` (`id`, `name`, `director`, `category`, `poster`, `release_date`, `rating`, `big_poster`, `synopsis`) VALUES
(1, 'Le roi et l\'oiseau', 'Paul Grimaud', 'animation', 'http://fr.web.img5.acsta.net/pictures/210/095/21009544_20130530152117763.jpg', '1953-05-27', 7, 'https://www.pop-up-urbain.com/wp-content/uploads/2017/07/RoiOiseau-800x435.jpeg', ''),
(3, 'Pulp fiction', 'Quentin Tarantino', 'Crime', 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg', '1994-10-23', 9, 'https://www.indiewire.com/wp-content/uploads/2016/07/samuel-l-jackson-in-pulp-fiction.jpg?w=780', 'Great story'),
(4, 'Moby dick', 'John Huston', 'adventure', 'https://i.pinimg.com/originals/18/b9/cd/18b9cdcce7be7b64fd43deca04f5a4d4.jpg', '1956-11-12', 7, 'https://m.media-amazon.com/images/M/MV5BMjIwNzY4OTk5MF5BMl5BanBnXkFtZTcwMTUzODI1NA@@._V1_.jpg', ''),
(5, 'Gattacaqsd', 'Andrew Niccol', 'science-fiction', 'http://fr.web.img5.acsta.net/medias/nmedia/18/36/17/53/18458816.jpg', '1998-04-22', 7, 'https://tel.img.pmdstatic.net/fit/http.3A.2F.2Fimages.2Eone.2Eprismamedia.2Ecom.2Fprogram.2Ff.2Fd.2F1.2F4.2Ff.2F4.2F0.2F7.2Fd.2F6.2F4.2F5.2F9.2F3.2F2.2Fd.2Ejpg/690x385/crop-from/top/bienvenue-a-gattaca.jpg', '');

-- --------------------------------------------------------

--
-- Structure de la table `movie_cast`
--

CREATE TABLE `movie_cast` (
  `movie_id` int(11) NOT NULL,
  `actor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `movie_cast`
--

INSERT INTO `movie_cast` (`movie_id`, `actor_id`) VALUES
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(5, 5),
(3, 6),
(5, 6),
(5, 7);

-- --------------------------------------------------------

--
-- Structure de la table `series`
--

CREATE TABLE `series` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `director` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `poster` varchar(250) NOT NULL,
  `release_date` date NOT NULL,
  `seasons` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `synopsis` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `series`
--

INSERT INTO `series` (`id`, `name`, `director`, `category`, `poster`, `release_date`, `seasons`, `rating`, `synopsis`) VALUES
(1, 'The office', 'Greg Daniels', 'comedy', 'https://m.media-amazon.com/images/M/MV5BMTgzNjAzMDE0NF5BMl5BanBnXkFtZTcwNTEyMzM3OA@@._V1_SY1000_CR0,0,736,1000_AL_.jpg', '2005-03-24', 9, 9, ''),
(2, 'The IT crowd', 'Graham Linehan', 'comedy', 'https://images.justwatch.com/poster/745686/s592/the-it-crowd', '2006-02-03', 4, 9, ''),
(3, 'The big bang theory', 'Bill Prady', 'comedy', 'http://fr.web.img5.acsta.net/pictures/18/11/06/15/36/0408812.jpg', '2007-09-24', 12, 8, ''),
(4, 'Malcolm in the middle', 'Linwood Boomer', 'comedy', 'https://images-na.ssl-images-amazon.com/images/I/51AbofPznLL._SY445_.jpg', '2000-01-09', 7, 8, '');

-- --------------------------------------------------------

--
-- Structure de la table `serie_cast`
--

CREATE TABLE `serie_cast` (
  `serie_id` int(11) NOT NULL,
  `actor_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `movie_cast`
--
ALTER TABLE `movie_cast`
  ADD KEY `movie_id` (`movie_id`),
  ADD KEY `actor_id` (`actor_id`);

--
-- Index pour la table `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `serie_cast`
--
ALTER TABLE `serie_cast`
  ADD KEY `serie_id` (`serie_id`),
  ADD KEY `actor_id` (`actor_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `series`
--
ALTER TABLE `series`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `movie_cast`
--
ALTER TABLE `movie_cast`
  ADD CONSTRAINT `movie_cast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  ADD CONSTRAINT `movie_cast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`);

--
-- Contraintes pour la table `serie_cast`
--
ALTER TABLE `serie_cast`
  ADD CONSTRAINT `serie_cast_ibfk_1` FOREIGN KEY (`serie_id`) REFERENCES `series` (`id`),
  ADD CONSTRAINT `serie_cast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
